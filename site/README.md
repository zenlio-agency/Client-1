# ManyaIT website

The ManyaIT marketing site, built with [Astro](https://astro.build) on the
[Lumos for Astro](https://lumosframework.com) framework, in the ManyaIT
palette. ManyaIT is positioned as a GCC (Global Capability Center) technology
and talent partner: "Technology & Talent Partners".

## Run it

Node 22.12 or newer.

```sh
cd site
npm install
npm run dev        # http://localhost:4321
```

| Script            | What it does                                                 |
| ----------------- | ------------------------------------------------------------ |
| `npm run dev`     | Dev server with hot reload                                   |
| `npm run build`   | Static build to `dist/`, then checks nothing links to Sanity |
| `npm run preview` | Serves the built site                                        |
| `npm run check`   | Type-checks every `.astro` file                              |
| `npm run format`  | Formats with Prettier                                        |
| `npm run map`     | Regenerates the dot map in `src/data/world-dots.json`        |

`dist/` is plain static files and can go on any host. `wrangler.jsonc` is
already set up for Cloudflare: `npm run build && npx wrangler deploy` publishes
it as an assets-only Worker.

## How it was scaffolded

`npm create lumos@latest` downloads the Lumos for Astro template, which is
itself an Astro project (Astro 7, TypeScript, sitemap, the Astro fonts API).
So it covers what `npm create astro@latest` would set up, and running both
would only produce two separate projects. This site came from create-lumos
0.3.5, Lumos 0.0.4, stamped under `"lumos"` in `package.json` so
`/lumos-upgrade-version` can merge later framework releases.

Lumos conventions (layers, themes, `_wrap` components, `rem` only) are in
`LUMOS.md`.

## Where things live

```
src/
  pages/            index, about, careers, contact, locations, 404,
                    capabilities/, industries/ and insights/ (index and
                    [slug]), legal/ (hub, [slug] and privacy-requests)
                    (no CSS)
  content/legal/    one Markdown file per policy (see "Legal pages")
  content/insights/ one Markdown file per article (see "Insights articles")
  sanity/           reading content from Sanity (see "Content from Sanity")
  components/
    global/         Nav (mega menu and mobile drawer), Footer, Logo
    content/        one component per section, listed below
  data/site.ts      capabilities, client logos, industries, hubs, nav, CTAs,
                    the shared team steps and the page-link helpers
  data/capability-pages.ts, data/industry-pages.ts
                    copy for each capability and industry page
  data/legal.ts     facts every legal page shares, and the footer's legal links
  data/photos.ts    which photo each tile uses
  styles/base.css   brand tokens, type scale, themes, motion
  assets/           fonts, logo mark and icons
public/             favicon, social share image, logos/ for client logos,
                    images/ for photos, and _redirects
```

| #   | Section                       | Component                    | Theme |
| --- | ----------------------------- | ---------------------------- | ----- |
| 01  | Hero and capability reel      | `HeroHome`, `CapabilityReel` | light |
| 02  | Client logos                  | `ClientLogos`                | light |
| 03  | Why ManyaIT, with stats panel | `WhyCards`, `TrustStrip`     | tint  |
| 04  | Capabilities (bento)          | `CapabilityBento`            | light |
| 05  | Industries                    | `IndustryCards`              | tint  |
| 06  | Careers teaser                | `CareersHome`                | light |
| 07  | Insights                      | `InsightsGrid`               | tint  |
| 08  | Global presence               | `GlobalPresence`             | light |
| 09  | Ecosystem                     | `EcosystemCards`             | tint  |
| 10  | Final call to action          | `CtaFinal`                   | dark  |
| —   | `/industries`                 | `IndustryDetail`             |       |
| —   | `/careers` (roles and finder) | `CareersOpenings`            |       |
| —   | `/contact`                    | `ContactConversation`        |       |

### Inner pages

Every page the nav and footer link to has its own route. They share a set of
section components, so a new page is mostly copy.

| Page                        | Sections                                                                                                                                                              |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/capabilities`             | `HeroDetail`, `FeatureGrid` (rows), `ProcessSteps`, `TrustStrip`, `FaqList`, `CtaFinal`                                                                               |
| `/capabilities/[slug]` (×5) | `HeroDetail`, `ProblemRows`, `FeatureGrid` + `TrustStrip` (outcomes), `ChipGroups`, `FeatureGrid` (industries), `ProcessSteps`, `FaqList`, `RelatedTiles`, `CtaFinal` |
| `/industries/[slug]` (×4)   | `HeroDetail`, `ProblemRows`, `FeatureGrid` + `TrustStrip` (outcomes), `FeatureGrid` (rows of capabilities), `ChipGroups`, `FaqList`, `RelatedTiles`, `CtaFinal`       |
| `/about`                    | `HeroDetail`, `StorySplit`, `FeatureGrid` (mission, values), `TrustStrip`, `ProcessSteps`, `GlobalPresence`, `FaqList`, `CtaFinal`                                    |
| `/careers`                  | `CareersOpenings`, `StorySplit`, `FeatureGrid` (benefits, tracks), `ProcessSteps`, `FaqList`, `GlobalPresence`, `CtaFinal`                                            |
| `/locations`                | `HeroDetail`, `HubCards`, `GlobalPresence`, `ProcessSteps`, `FaqList`, `CtaFinal`                                                                                     |
| `/insights`                 | `HeroDetail`, `InsightsGrid`, `FeatureGrid` (topics), `CtaFinal`                                                                                                      |
| `/insights/[slug]` (×5)     | `ArticleHeader`, `ArticleBody` (with `ArticleText`), `RelatedTiles`                                                                                                   |
| `/legal`                    | `LegalHub`, `LegalStrip`                                                                                                                                              |
| `/legal/[slug]` (×6)        | `LegalDocument` (with `LegalHeader`, `LegalToc`, `LegalBody`), `LegalStrip`                                                                                           |
| `/legal/privacy-requests`   | `LegalHeader`, `PrivacyRequestForm`                                                                                                                                   |

Capability and industry names, lines and slugs come from `src/data/site.ts`,
so the nav, the bento, the industry cards and pages, the footer and the
contact form's topic list all stay in step. Each page's longer copy lives in
`src/data/capability-pages.ts` or `src/data/industry-pages.ts`, keyed by the
same `id`. `capabilityHref` and `industryHref` build the page links, and
`TEAM_STEPS` holds the four steps from skills brief to Build-Operate-Transfer
shown on the About and capability pages.

## Legal pages

The legal pack lives under `/legal`: a hub, six policies and a privacy
request form. The footer links to each one, and the addresses people guess
(`/privacy`, `/privacy-policy`, `/terms`, `/terms-of-use`, `/cookie-policy`,
`/accessibility`) redirect to them. The redirects are in `astro.config.mjs`,
which writes a forwarding page at each address, and in `public/_redirects`,
which Cloudflare serves as permanent (301) redirects. Keep the two lists the
same.

| Page                      | File                                              |
| ------------------------- | ------------------------------------------------- |
| Privacy Notice            | `src/content/legal/privacy.md`                    |
| Terms of Use              | `src/content/legal/terms.md`                      |
| Cookie Notice             | `src/content/legal/cookies.md`                    |
| Accessibility Statement   | `src/content/legal/accessibility.md`              |
| Applicant Privacy Notice  | `src/content/legal/applicant-privacy.md`          |
| Job Offer Fraud Notice    | `src/content/legal/job-offer-fraud.md`            |
| Privacy requests (a form) | `src/components/content/PrivacyRequestForm.astro` |

Each Markdown file's front matter sets the title, the hub summary, the
"At a glance" bullets, the dates, the version, which contact card closes the
page and the change log (schema in `src/content.config.ts`). Each `##`
heading becomes a numbered section in the "On this page" list, with a stable
link such as `/legal/privacy#your-rights`. Forms and emails point at these
links, so rename a heading only with care.

Facts that appear on more than one page (company names, addresses, emails,
the Grievance Officer, response times) live once in `LEGAL` in
`src/data/legal.ts`. In the Markdown they are written as `{{key}}` tokens,
listed in `LEGAL_TOKENS`, and an unknown token fails the build.

To update a policy: edit the text, set `updated` (as `YYYY-MM-DD`), bump
`version`, and add a line at the top of `changes`. Legal pages have no scroll
reveals, and they print without the nav, footer or contents list.

## Insights articles

Each article is a Markdown file in `src/content/insights/`, served at
`/insights/<file name>`, and the Insights grid on the homepage and on
`/insights` lists them in `order`. The front matter (schema in
`src/content.config.ts`) sets the title, the one-line summary, the
category (which must match a grid filter), the type, the photo from
`public/images/`, the publish date, the "In short" points and the
capability the closing call to action links to. The read time is worked
out from the text. Articles follow the copy rules below: no client names,
statistics or partner claims until they're confirmed.

To add an article, copy an existing file, change the front matter and
write the body with `##` headings. Tables and numbered steps work as
normal Markdown.

## Content from Sanity

HR and marketing edit content in the Sanity Studio (`../studio`). The site
reads it at build time from project `n3hghywr`, dataset `production`.
Visitors never load anything from Sanity: images are copied into the build.

Pages move from the data files and Markdown to Sanity one area at a time.
Until an area moves, its Sanity content is fetched but not shown, and the
pages build exactly as before.

- `src/sanity/queries.ts` holds every query. After changing a query or a
  Studio schema, run `npm run typegen` in `studio/` to regenerate
  `src/sanity/types.ts`.
- `src/content.config.ts` has one collection per content type:
  `siteSettings`, `homePage`, `pageSettings`, `capabilities`, `industries`,
  `locations`, `articles`, `articleCategories`, `opportunities`,
  `caseStudies`, `clientLogos` and `ecosystem`. Each is fetched again on
  every build, so unpublished content leaves the site on the next build. If
  Sanity can't be reached, the build fails and the live site stays as it
  was.
- Images: `<SanityImg>` gives a responsive image and `sanityPhoto()` a
  single file for components that take a plain path. Both copy the image
  into the build with the editor's crop and hotspot.
- Rich text: `portableTextToHtml()` gives the same HTML Astro makes from
  Markdown, so `ArticleText`, `RichText` and `FaqList` take it unchanged.
- `npm run seed:build` (after `npm run build`) regenerates
  `studio/seed/production.ndjson`, the import of today's content, from the
  data files, the Markdown articles and the page files. Copy typed into
  component markup lives in `scripts/seed/page-copy.mjs`. It stops if any
  word doesn't match the built pages, an image is missing or a claim is
  marked confirmed. `npm run seed` in `studio/` imports it.
- `npm run build` ends with `scripts/check-dist.mjs`, which fails the build
  if any page links to Sanity or contains the read token.
- Every build also runs the content check
  (`src/integrations/content-check.ts`), described under "Before launch".

| Variable            | Default      | Notes                                                                                            |
| ------------------- | ------------ | ------------------------------------------------------------------------------------------------ |
| `SANITY_PROJECT_ID` | `n3hghywr`   |                                                                                                  |
| `SANITY_DATASET`    | `production` |                                                                                                  |
| `SANITY_READ_TOKEN` | none         | Only if the dataset is private. Set it on the host, or in `site/.env` locally; never commit it.  |
| `STRICT_CONTENT`    | none         | `1` on the live site's builds only: the content check then stops the build on anything it finds. |

## Brand

The palette comes from the ManyaIT logo directions: Ink Black `#0D0F0D`, Manya
Blue `#2340E6` with its 50–900 ramp, slate text greys, and the success, warning
and error pairs. They are tokens in `src/styles/base.css`, and the four themes
(`light`, `tint`, `dark`, `brand`) map them onto backgrounds, text, borders and
buttons. Every heading uses Plus Jakarta Sans (the `--display-family` token,
with its own leading-trim values), UI text such as buttons, labels and the nav
uses Poppins 400/500/600, and body text uses Inter. All three are self-hosted,
so there are no requests to Google Fonts.

## Motion

- Sections fade and rise into view as they scroll in, in a short stagger.
- Pages cross-fade with native view transitions, and the nav stays still.
- The hero reel scrolls five captioned photos (`src/assets/photos/reel-*`)
  and lifts one at a time. It sits at the fold, so it fades in on load rather
  than on scroll, and the hero copy is sized so the top quarter of its cards
  always shows above the fold. To change a photo, replace the file and keep
  its name, or edit the `photos` list in `CapabilityReel.astro`.
- The reel and the two client-logo rows scroll as marquees. They pause on
  hover and have a pause button.
- The data tile in the capabilities grid shows data flowing into a lakehouse
  and out to BI and AI.
- The map draws the Dallas to Hyderabad arc, with a dot travelling along it.
- The mega menu opens with a short transition.

With `prefers-reduced-motion: reduce`, nothing moves: reveals are off and the
marquees start paused. Without JavaScript, all content still shows.

## Before launch

Anything in square brackets is a placeholder. Each one goes through `tbc()` in
`src/data/site.ts`, so on the page it shows with a dotted underline and a
"confirm before launch" tooltip.

**The content check** (`src/integrations/content-check.ts`) runs at the end of
every `npm run build` and lists:

- **claims** in Sanity that aren't confirmed yet: figures, client logos, the
  ecosystem company, case-study quotes and client names. It's the same list
  as the Studio's "Proof & claims → Not confirmed yet";
- **placeholders** left on any page, legal pages included;
- **copy rules** broken on any page except the legal notices: banned words,
  and Dallas, Texas or Hyderabad outside the footer (see "Copy rules");
- **office addresses** in Sanity that differ from the ones the legal notices
  give.

Review builds print these as warnings and carry on. Set `STRICT_CONTENT=1`
on the live site's builds (Vercel → Settings → Environment Variables,
Production only), and any of them stops the build, so the version already
live stays up. In that mode the build also stops while Sanity has no
content, since nothing then records whether the site's claims are confirmed.
Two published items of one type with the same page address stop every
build.

The open items:

- **Figures.** Years, enterprises served, talent network size, weeks to a
  productive team, countries, industry percentages and the reply time. Each
  capability and industry page also has four "Outcomes to expect" figures.
- **Hero photos.** The five reel photos in `src/assets/photos/` were
  supplied for the redesign; confirm the licence covers use on the live site.
  The other photos, in `public/images/`, are free Unsplash photos saved as
  WebP so no page loads anything from another company's servers. Replace
  them with ManyaIT's own photography when it's ready.
- **Inner-page facts.** On the About page, the founding year and early
  milestones. On the careers page, health and wellbeing benefits, the length
  of the joining process and the careers email. The platforms, tools and
  standards listed on each capability and industry page describe skills, not
  partnerships; check each list reflects the teams ManyaIT can field. The
  healthcare FAQ says business associate agreements are put in place where
  needed; confirm that holds.
- **Hub details.** The Dallas phone and email, and the company email,
  careers email and phone shown beside the contact form (`COMPANY_CONTACT`),
  come from the contact page on manyait.com. Hyderabad's phone and email are
  still placeholders (`HUBS` in `src/data/site.ts`).
- **Client logos.** `CLIENT_LOGO_ROWS` in `src/data/site.ts` sets the two
  marquee rows: banking and financial services first, then telecom,
  healthcare and energy. The files in `public/logos/` are the companies'
  official logos from Wikimedia Commons. Logos are trademarks, so get written
  permission from each company before launch and remove any that can't be
  cleared. To add one, put the file in `public/logos/` and add its `name` and
  `src` to a row. Logos show in grey and turn to full colour on hover.
- **Ecosystem.** The homepage band shows one company, Siri Data Analytics
  (`ECOSYSTEM` in `src/data/site.ts`), with the logo from its website in
  `public/logos/`. Confirm the listing, its one-line description and the
  logo in writing before launch. To add a company, add an entry to
  `ECOSYSTEM`; cards stack in the right-hand column.
- **Forms.** The contact form (on `/contact` and at the foot of the homepage,
  both from `ContactConversation`) and the role finder are not connected to
  anything, and each one says so when used. Give the contact `Form` an
  `action` endpoint, which covers both pages, and replace the sample roles in
  `CareersOpenings` with the live job feed. The privacy request form on
  `/legal/privacy-requests` needs an endpoint too.
- **Legal pages.** The six policies are drafts written from the legal pack
  design. Counsel in the US and India must write or approve the final
  wording before launch. The open facts are in `LEGAL` in
  `src/data/legal.ts` (entity names, CIN, emails, the Grievance Officer) and
  in brackets in each Markdown file (dates, versions, retention periods,
  governing law, which tools receive form data, and Cloudflare's cookies).
  Before release, load the site in a fresh browser and confirm no cookie or
  third-party request appears that the Cookie Notice doesn't mention.
- **Insights.** The five articles are drafts. Each shows `[Publish date]`
  until `published` is set, and all are credited to "The ManyaIT team". The
  SAP article cites SAP's public maintenance dates (end of 2027, extended to
  end of 2030); confirm before launch.
- **Links.** In `SOCIAL`, Instagram links to the account on manyait.com;
  LinkedIn, X, Facebook and YouTube are `#` until their addresses arrive.
  The footer, the menu and the contact section all read from `SOCIAL`.
- **Domain.** `SITE_URL` in `src/consts.ts` is `https://manyait.com`.
  Sitemap and canonical URLs use it.

## Copy rules

These apply to every word on the site:

- ManyaIT is a technology and talent partner. Tagline: "Technology & Talent
  Partners".
- **Write for B2B decision-makers (important).** The readers are enterprises
  weighing a partnership and talent partners looking at open roles. Use
  high-level business and technical terms: operating model, delivery
  governance, time to value, data estate, production-grade, platform
  engineering, elastic capacity. Leave out basic explanations and everyday
  phrasing ("we listen first", "you meet everyone").
- Imply, never state, that ManyaIT provides vetted tech talent and builds
  teams. Use: talent, specialists, teams, AI-ready, vetted, matched to your
  stack, productive from week one, teams live in weeks, flexible scale, scale
  on demand.
- Never use: recruiting/recruitment, staffing, staff augmentation,
  hire/hiring, placement, headhunting, outsourcing, consulting/consultants,
  agency, contractor, engagement/engagement lead, bench, resources, manpower,
  vendor, GCC, capability center, Build-Operate-Transfer (BOT), headcount,
  skills brief.
- The homepage keeps its original wording at ManyaIT's request, including
  "Global Capability Center" and "build-operate-transfer". Those phrases are
  listed as exceptions in `src/data/copy-rules.ts`, for the homepage only.
- The hero does not lead with the service list or with locations.
- One idea per card, one line per tile.
- The United States is home to the Client & Leadership Hub and India to the
  Engineering & Talent Hub. In section copy and on the map, name the
  countries, once each. City names belong in the footer and in postal
  addresses.
- No client, number, certification or affiliate goes live until it is
  confirmed.

On legal pages, use "service providers" for vendors and contractors,
"sub-processors" for subcontractors of data, "professional advisers" for
consultants, "applicants" and "applications" for candidates and recruiting,
and "project" or "relationship" for engagement. Terms the law defines, such
as "sale", "share", "controller" and "Data Fiduciary", stay as written.

Every build checks the pages against these rules (see "Before launch"). The
list lives in `src/data/copy-rules.ts`, and the Studio warns editors with its
own copy in `studio/lib/validation.ts`; change the two together, and the
build warns when they differ.
