/**
 * Builds `studio/seed/production.ndjson`: today's site content as Sanity
 * documents, for `npm run seed` in studio/ to import. Run it with
 * `npm run seed:build` after `npm run build`, because the checks compare the
 * documents against the built pages in dist/.
 *
 * - Data files, Markdown articles and page props are read from the site
 *   itself; copy typed into component markup comes from `seed/page-copy.mjs`.
 * - Images point at the files already in the repo. The import resolves
 *   `file://./` against studio/seed/, so the paths work on any machine.
 * - Every claim (figure, client logo, ecosystem company) is unconfirmed, and
 *   job roles are drafts until HR completes and publishes them.
 *
 * It stops if a check fails: a missing image, a string that isn't on the
 * site, a confirmed claim, a banned word, or a broken reference.
 */
import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { parse as parseAstro } from "@astrojs/compiler";
import { parse as parseYaml } from "yaml";
import { markdownToBlocks } from "./seed/markdown.mjs";
import {
  COMPONENT_HEROES,
  FOOTER_LINE,
  HOME,
  ROLES,
} from "./seed/page-copy.mjs";

const SITE = fileURLToPath(new URL("..", import.meta.url));
const REPO = resolve(SITE, "..");
const DIST = join(SITE, "dist");
const SEED_DIR = join(REPO, "studio", "seed");
const OUT = join(SEED_DIR, "production.ndjson");

try {
  await access(join(DIST, "index.html"));
} catch {
  console.error("seed: build the site first (npm run build).");
  process.exit(1);
}

/* ---------------------------------------------------------------------------
 * Load the site's TypeScript modules through Vite, which resolves `@/` and
 * the `.svg` imports. `astro:assets` is stubbed: only the Portable Text
 * renderer imports it, for images the articles don't have.
 */
const vite = await createServer({
  root: SITE,
  configFile: false,
  logLevel: "error",
  appType: "custom",
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
  optimizeDeps: { noDiscovery: true, include: [] },
  resolve: {
    alias: [
      { find: /^@\//, replacement: `${join(SITE, "src")}/` },
      {
        find: "astro:assets",
        replacement: join(SITE, "scripts/seed/astro-assets-stub.mjs"),
      },
    ],
  },
});
const load = (path) => vite.ssrLoadModule(path);
const site = await load("/src/data/site.ts");
const photos = await load("/src/data/photos.ts");
const consts = await load("/src/consts.ts");
const legal = await load("/src/data/legal.ts");
const { CAPABILITY_PAGES } = await load("/src/data/capability-pages.ts");
const { INDUSTRY_PAGES } = await load("/src/data/industry-pages.ts");
const { portableTextToHtml } = await load("/src/sanity/portable-text.ts");
const { wrapTables, markPlaceholders } = await load("/src/utils/html.ts");
const studio = await load(join(REPO, "studio/lib/constants.ts"));
const { BANNED_WORDS } = await load(join(REPO, "studio/lib/validation.ts"));

/* ---------------------------------------------------------------------------
 * Building blocks
 */
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** An image in the repo, relative to studio/seed/ (where the import runs). */
const asset = (repoPath) => `image@file://./../../${repoPath}`;
const publicFile = (path) => `site/public${path}`;

const image = (repoPath) => ({ _type: "image", _sanityAsset: asset(repoPath) });

/** A photo with alt text, or marked decorative as it is on the site today. */
const photo = (repoPath, alt) => ({
  _type: "imageWithAlt",
  _sanityAsset: asset(repoPath),
  ...(alt ? { alt, decorative: false } : { decorative: true }),
});

const ref = (id, key) => ({
  _type: "reference",
  _ref: id,
  ...(key ? { _key: key } : {}),
});
const slug = (current) => ({ _type: "slug", current });
const keyed = (items, prefix, map) =>
  items.map((item, index) => ({ _key: `${prefix}${index}`, ...map(item) }));

/** A figure. Every one starts unconfirmed. */
const stat = ({ value, label }) => ({
  _type: "stat",
  value,
  label,
  confirmed: false,
});

const decode = (text) =>
  text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCodePoint(parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");

/**
 * One paragraph of rich text. Some FAQ answers carry inline HTML today
 * (`<a href>`, `<strong>`, `<em>`); those become links and marks.
 */
function textBlock(html, prefix) {
  const markDefs = [];
  const children = [];
  const open = [];
  for (const part of html.split(/(<\/?(?:a|strong|em)\b[^>]*>)/)) {
    if (!part) continue;
    const start = part.match(/^<(a|strong|em)\b([^>]*)>$/);
    if (start) {
      if (start[1] === "a") {
        const def = {
          _type: "link",
          _key: `${prefix}l${markDefs.length}`,
          href: start[2].match(/href="([^"]*)"/)[1],
        };
        markDefs.push(def);
        open.push(def._key);
      } else open.push(start[1]);
      continue;
    }
    if (/^<\//.test(part)) {
      open.pop();
      continue;
    }
    if (/<[a-z/]/i.test(part)) throw new Error(`Unsupported HTML in "${html}"`);
    children.push({
      _type: "span",
      _key: `${prefix}s${children.length}`,
      text: decode(part),
      marks: [...open],
    });
  }
  return [
    { _type: "block", _key: `${prefix}b`, style: "normal", markDefs, children },
  ];
}

const faq = (items, prefix = "faq") =>
  keyed(items, prefix, ({ question, answer }) => ({
    _type: "faqItem",
    question,
    answer: textBlock(answer, `${prefix}a`),
  }));

const seo = (fields) => {
  const set = Object.entries(fields).filter(([, value]) => value);
  return set.length ? { _type: "seo", ...Object.fromEntries(set) } : undefined;
};

const sectionIntro = (intro) => intro && { _type: "sectionIntro", ...intro };

/** Problems, offerings and stack, shared by capabilities and industries. */
const pageSections = (page) => ({
  problems: {
    heading: page.problems.heading,
    rows: keyed(page.problems.rows, "problem", (row) => ({
      _type: "problemRow",
      ...row,
    })),
  },
  offerings: {
    heading: page.offerings.heading,
    intro: page.offerings.intro,
    items: keyed(page.offerings.items, "offer", (item) => ({
      _type: "featureItem",
      ...item,
    })),
  },
  stack: {
    intro: page.stack.intro,
    groups: keyed(page.stack.groups, "group", (group) => ({
      _type: "chipGroup",
      ...group,
    })),
  },
  outcomes: keyed(page.outcomes, "outcome", stat),
  faq: faq(page.faq),
});

/** `[placeholder]` values aren't stored: phase 4 shows the marker instead. */
const known = (value) => (/^\[.*\]$/.test(value) ? undefined : value);

/* ---------------------------------------------------------------------------
 * Page props, read from the page files with Astro's own parser. Expression
 * props (`points={[...]}`, `photo={ABOUT_PHOTOS.hero}`) are evaluated with
 * the site's data in scope; they come only from this repo's own pages.
 */
const scope = { ...site, ...photos, ...legal };
const evaluate = (expression) =>
  new Function(...Object.keys(scope), `return (${expression});`)(
    ...Object.values(scope),
  );

async function pageProps(file) {
  const { ast } = await parseAstro(
    await readFile(join(SITE, "src/pages", file), "utf8"),
  );
  const found = {};
  const walk = (node) => {
    if (
      node.type === "component" &&
      ["Layout", "HeroDetail", "FaqList"].includes(node.name) &&
      !found[node.name]
    ) {
      found[node.name] = Object.fromEntries(
        node.attributes.map((attribute) => [
          attribute.name,
          attribute.kind === "expression"
            ? evaluate(attribute.value)
            : attribute.value,
        ]),
      );
    }
    (node.children ?? []).forEach(walk);
  };
  walk(ast);
  return found;
}

/* ---------------------------------------------------------------------------
 * Documents. Each lists the built pages its words appear on, for the checks.
 */
const documents = [];
const add = (pages, document) => documents.push({ pages, document });

const home = await pageProps("index.astro");

/* Site settings */
add(["index.html"], {
  _id: "siteSettings",
  _type: "siteSettings",
  email: site.COMPANY_CONTACT.email,
  careersEmail: site.COMPANY_CONTACT.careersEmail,
  phone: site.COMPANY_CONTACT.phone,
  /* Only profiles with a real address; the rest are still `#`. */
  social: keyed(
    site.SOCIAL.filter(({ href }) => href.startsWith("https://")),
    "social",
    ({ icon, href }) => ({ _type: "socialProfile", platform: icon, url: href }),
  ),
  ctaPrimaryLabel: site.CTA.primary.label,
  ctaSecondaryLabel: site.CTA.secondary.label,
  footerLine: FOOTER_LINE,
  approvedJobBoards: [],
  seo: seo({
    title: consts.SITE_NAME,
    description: consts.SITE_DESCRIPTION,
    image: image("site/public/og-image.jpg"),
  }),
});

/* Homepage */
add(["index.html"], {
  _id: "homePage",
  _type: "homePage",
  hero: HOME.hero,
  reel: keyed(HOME.reel, "reel", ({ file, alt, caption }) => ({
    _type: "reelPhoto",
    image: photo(`site/src/assets/photos/${file}`, alt),
    caption,
  })),
  logosHeading: HOME.logosHeading,
  why: HOME.why,
  stats: keyed(HOME.stats, "stat", stat),
  ...Object.fromEntries(
    Object.entries(HOME.sections).map(([name, intro]) => [
      name,
      sectionIntro(intro),
    ]),
  ),
  featuredInsight: ref("insight-ai-pilots-to-production"),
  seo: seo({
    title: home.Layout.title,
    description: home.Layout.description,
  }),
});

/* Pages whose layout lives in code */
const PAGE_FILES = {
  "page-about": "about.astro",
  "page-careers": "careers.astro",
  "page-contact": "contact.astro",
  "page-capabilities": "capabilities/index.astro",
  "page-industries": "industries/index.astro",
  "page-insights": "insights/index.astro",
};
const builtPage = (file) =>
  file === "index.astro"
    ? "index.html"
    : file.replace(/(\/index)?\.astro$/, "/index.html");

for (const { id, title } of studio.PAGE_SETTINGS) {
  const file = PAGE_FILES[id];
  /* No case studies page exists yet: an empty document for later. */
  if (!file) {
    add([], { _id: id, _type: "pageSettings", page: title });
    continue;
  }
  const props = await pageProps(file);
  const header = props.HeroDetail ?? COMPONENT_HEROES[id];
  const questions = props.FaqList;
  add([builtPage(file)], {
    _id: id,
    _type: "pageSettings",
    page: title,
    hero: {
      _type: "pageHero",
      eyebrow: header.eyebrow,
      title: header.title,
      lede: header.lede,
      points: header.points,
      ...(header.photo && {
        photo: photo(publicFile(header.photo), header.photoAlt),
      }),
    },
    ...(questions && {
      faqIntro: sectionIntro({
        eyebrow: questions.eyebrow,
        heading: questions.heading,
        intro: questions.intro,
      }),
      faq: faq(questions.items),
    }),
    seo: seo({
      title: props.Layout.title,
      description: props.Layout.description,
    }),
  });
}

/* Capabilities */
for (const cap of site.CAPABILITIES) {
  const page = CAPABILITY_PAGES[cap.id];
  add([`capabilities/${cap.slug}/index.html`, "index.html"], {
    _id: cap.id,
    _type: "capability",
    title: cap.title,
    slug: slug(cap.slug),
    line: cap.line,
    photo: photo(publicFile(photos.CAPABILITY_PHOTOS[cap.id])),
    pageTitle: page.title,
    lede: page.lede,
    points: page.points,
    ...pageSections(page),
    industryNotes: keyed(
      Object.entries(page.industries),
      "note",
      ([industry, text]) => ({
        _type: "industryNote",
        industry: ref(industry),
        text,
      }),
    ),
    seo: seo({ description: page.description }),
  });
}

/* Industries */
for (const industry of site.INDUSTRIES) {
  const page = INDUSTRY_PAGES[industry.id];
  add([`industries/${industry.slug}/index.html`, "industries/index.html"], {
    _id: industry.id,
    _type: "industry",
    title: industry.title,
    slug: slug(industry.slug),
    short: industry.short,
    summary: industry.summary,
    photo: photo(publicFile(photos.INDUSTRY_PHOTOS[industry.id])),
    hero: industry.hero,
    lede: page.lede,
    points: page.points,
    challenge: industry.challenge,
    build: industry.build,
    outcome: industry.outcome,
    metric: stat({ value: industry.metric, label: industry.metricLabel }),
    ...pageSections(page),
    capabilityNotes: keyed(
      Object.entries(page.capabilities),
      "note",
      ([capability, text]) => ({
        _type: "capabilityNote",
        capability: ref(capability),
        text,
      }),
    ),
    seo: seo({ description: page.description }),
  });
}

/* Locations */
site.HUBS.forEach((hub, index) => {
  /* The Locations page was removed; hubs are no longer checked against a page. */
  add([], {
    _id: hub.id,
    _type: "location",
    city: hub.city,
    short: hub.short,
    role: hub.role,
    text: hub.text,
    address: hub.address,
    phone: known(hub.phone),
    email: known(hub.email),
    timeZone: hub.timeZone,
    locale: hub.locale,
    position: { lat: hub.lat, lon: hub.lon },
    link: { _type: "linkItem", ...hub.link },
    order: index + 1,
  });
});

/* Insights categories, in the order of the grid's filters */
const CATEGORIES = [
  "AI",
  "Data",
  "SAP",
  "Digital Engineering",
  "Enterprise Technology",
];
const categoryId = (title) => `category-${slugify(title)}`;
CATEGORIES.forEach((title, index) => {
  add(["insights/index.html"], {
    _id: categoryId(title),
    _type: "insightCategory",
    title,
    slug: slug(slugify(title)),
    order: index + 1,
  });
});

/* Insights articles */
const ARTICLES = join(SITE, "src/content/insights");
const articles = [];
for (const file of (await readdir(ARTICLES)).filter((f) => f.endsWith(".md"))) {
  const source = await readFile(join(ARTICLES, file), "utf8");
  const [, frontMatter, markdown] = source.match(
    /^---\n([\s\S]*?)\n---\n([\s\S]*)$/,
  );
  const data = parseYaml(frontMatter);
  const name = file.replace(/\.md$/, "");
  if (!CATEGORIES.includes(data.category)) {
    throw new Error(`${file}: unknown category "${data.category}"`);
  }
  const body = markdownToBlocks(markdown, "b");
  articles.push({ name, body });
  add([`insights/${name}/index.html`], {
    _id: `insight-${name}`,
    _type: "insight",
    title: data.title,
    slug: slug(name),
    summary: data.summary,
    category: ref(categoryId(data.category)),
    type: data.type,
    /* Dates are placeholders until ManyaIT sets them. */
    ...(/^\d{4}-\d{2}-\d{2}$/.test(data.published) && {
      publishedAt: data.published,
    }),
    author: data.author ?? "The ManyaIT team",
    photo: photo(publicFile(`/images/${data.photo}.webp`)),
    takeaways: data.takeaways,
    body,
    featured: Boolean(data.featured),
    order: data.order,
    capabilities: data.topic.startsWith("cap-")
      ? [ref(data.topic, "cap0")]
      : [],
    contactTopic: data.topic,
    related: { _type: "linkItem", ...data.related },
    seo: seo({ description: data.description }),
  });
}

/* Client logos: none has permission yet */
const ROWS = ["banking", "telecom-healthcare-energy"];
let logoOrder = 0;
site.CLIENT_LOGO_ROWS.forEach(({ logos }, row) => {
  for (const logo of logos) {
    add(["index.html"], {
      _id: `logo-${logo.src.replace(/^\/logos\/|\.\w+$/g, "")}`,
      _type: "clientLogo",
      name: logo.name,
      row: ROWS[row],
      logo: image(publicFile(logo.src)),
      permissionConfirmed: false,
      order: ++logoOrder,
    });
  }
});

/* Ecosystem companies: relationships not confirmed yet */
site.ECOSYSTEM.forEach((company, index) => {
  add(["index.html"], {
    _id: `ecosystem-${slugify(company.name)}`,
    _type: "ecosystemCompany",
    name: company.name,
    focus: company.focus,
    line: company.line,
    ...(company.logo && { logo: image(publicFile(company.logo)) }),
    url: company.href,
    relationshipConfirmed: false,
    order: index + 1,
  });
});

/* Job roles, as drafts for HR to complete and publish */
const teamOf = (title) =>
  site.CAPABILITIES.find((cap) => cap.title === title)?.id;
for (const role of ROLES) {
  const capability = teamOf(role.team);
  if (!capability && role.team !== "Client Partnership") {
    throw new Error(`Role "${role.title}": unknown team "${role.team}"`);
  }
  add(["careers/index.html"], {
    _id: `drafts.role-${slugify(role.title)}`,
    _type: "opportunity",
    title: role.title,
    status: "open",
    slug: slug(slugify(role.title)),
    team: capability ? "capability" : "client-partnership",
    ...(capability && { capability: ref(capability) }),
    locations: [ref(role.location, "loc0")],
    remote: false,
    workMode: role.mode,
    employmentType: "Full-time",
    experience: role.experience,
    applyMethod: "email",
  });
}

/* ---------------------------------------------------------------------------
 * Checks
 */
const problems = [];

/* Drop empty values so the documents hold only what's set. */
const clean = (value) => {
  if (Array.isArray(value)) return value.map(clean);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, v]) => v !== undefined)
        .map(([k, v]) => [k, clean(v)]),
    );
  }
  return value;
};
for (const entry of documents) entry.document = clean(entry.document);

/** Every value at every path, for the checks below. */
function* leaves(value, path = []) {
  if (Array.isArray(value)) {
    for (const [index, item] of value.entries())
      yield* leaves(item, [...path, index]);
  } else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value))
      yield* leaves(item, [...path, key]);
  } else yield [path, value];
}

/* 1. Ids: unique, no dots except a leading `drafts.`, references resolve */
const ids = new Set();
for (const { document } of documents) {
  if (ids.has(document._id)) problems.push(`duplicate id ${document._id}`);
  ids.add(document._id);
  if (document._id.replace(/^drafts\./, "").includes(".")) {
    problems.push(`id with a dot: ${document._id}`);
  }
}
const publishedIds = new Set([...ids].map((id) => id.replace(/^drafts\./, "")));
for (const { document } of documents) {
  for (const [path, value] of leaves(document)) {
    if (path.at(-1) === "_ref" && !publishedIds.has(value)) {
      problems.push(`${document._id}: reference to missing ${value}`);
    }
  }
}

/* 2. Images exist where the import will look for them */
const assets = new Set();
for (const { document } of documents) {
  for (const [path, value] of leaves(document)) {
    if (path.at(-1) !== "_sanityAsset") continue;
    const file = resolve(SEED_DIR, value.replace(/^image@file:\/\/\.\//, ""));
    assets.add(file);
    try {
      await access(file);
    } catch {
      problems.push(`${document._id}: missing image ${file}`);
    }
  }
}

/* 3. No confirmed claims */
const CLAIM_FLAGS = [
  "confirmed",
  "permissionConfirmed",
  "relationshipConfirmed",
];
for (const { document } of documents) {
  for (const [path, value] of leaves(document)) {
    if (CLAIM_FLAGS.includes(path.at(-1)) && value !== false) {
      problems.push(`${document._id}: ${path.join(".")} must be false`);
    }
  }
}

/* 4. Words: no banned words, and every word is on the site today */
const NOT_SHOWN = new Set([
  "_id",
  "_type",
  "_key",
  "_ref",
  "_sanityAsset",
  "current",
  "href",
  "url",
  "platform",
  "row",
  "status",
  "team",
  "employmentType",
  "applyMethod",
  "timeZone",
  "locale",
  "contactTopic",
  "page",
  "style",
  "listItem",
  "marks",
]);
const squash = (text) => text.replace(/\s+/g, " ").trim();
const haystacks = new Map();
async function haystack(page) {
  if (!haystacks.has(page)) {
    const html = await readFile(join(DIST, page), "utf8");
    const body = html.replace(/<(script|style)[\s\S]*?<\/\1>/g, "");
    /* Text with tags removed, plus every attribute value (alt, meta). */
    const text = decode(body.replace(/<[^>]+>/g, ""));
    const attributes = [...body.matchAll(/="([^"]*)"/g)].map(([, v]) =>
      decode(v),
    );
    haystacks.set(page, squash(`${text} ${attributes.join(" ")}`));
  }
  return haystacks.get(page);
}

for (const { pages, document } of documents) {
  for (const [path, value] of leaves(document)) {
    if (typeof value !== "string" || path.some((p) => NOT_SHOWN.has(p)))
      continue;
    for (const { word, pattern } of BANNED_WORDS) {
      if (pattern.test(value))
        problems.push(
          `${document._id}: banned word "${word}" in ${path.join(".")}`,
        );
    }
    if (!pages.length || value === "\n") continue;
    const needle = squash(value);
    const found = await Promise.all(
      pages.map(async (page) => (await haystack(page)).includes(needle)),
    );
    if (!found.some(Boolean)) {
      problems.push(
        `${document._id}: ${path.join(".")} not on ${pages.join(" or ")}: "${needle.slice(0, 80)}"`,
      );
    }
  }
}

/* 5. Each article renders to the same HTML as today's Markdown page */
const markup = (html) => squash(decode(html).replace(/>\s+</g, "><"));
for (const { name, body } of articles) {
  const page = await readFile(
    join(DIST, `insights/${name}/index.html`),
    "utf8",
  );
  const start =
    page.indexOf(">", page.indexOf('class="text rich-text article_text"')) + 1;
  const end = page.indexOf('<aside class="article_cta"');
  const today = page.slice(start, page.lastIndexOf("</div>", end));
  const ours = markPlaceholders(wrapTables(await portableTextToHtml(body)));
  if (markup(ours) !== markup(today)) {
    const a = markup(ours);
    const b = markup(today);
    let at = 0;
    while (a[at] === b[at]) at++;
    problems.push(
      `insight-${name}: body differs from the page at "${b.slice(Math.max(0, at - 40), at + 40)}" (ours: "${a.slice(Math.max(0, at - 40), at + 40)}")`,
    );
  }
}

await vite.close();

if (problems.length) {
  console.error(
    `\nseed: ${problems.length} problem(s):\n  ${problems.join("\n  ")}\n`,
  );
  process.exit(1);
}

/* ---------------------------------------------------------------------------
 * Write the import file
 */
await mkdir(SEED_DIR, { recursive: true });
await writeFile(
  OUT,
  documents.map(({ document }) => JSON.stringify(document)).join("\n") + "\n",
);

const counts = {};
for (const { document } of documents) {
  const kind = document._id.startsWith("drafts.")
    ? `${document._type} (draft)`
    : document._type;
  counts[kind] = (counts[kind] ?? 0) + 1;
}
console.log(
  `seed: wrote ${documents.length} documents and ${assets.size} images to ${OUT}`,
);
for (const [kind, count] of Object.entries(counts)) {
  console.log(`  ${String(count).padStart(3)}  ${kind}`);
}
