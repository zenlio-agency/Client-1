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

| Script            | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Dev server with hot reload                            |
| `npm run build`   | Static build to `dist/`                               |
| `npm run preview` | Serves the built site                                 |
| `npm run check`   | Type-checks every `.astro` file                       |
| `npm run format`  | Formats with Prettier                                 |
| `npm run map`     | Regenerates the dot map in `src/data/world-dots.json` |

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
  pages/            index, about, careers, contact, insights, locations, 404,
                    capabilities/ and industries/ (index and [slug]) (no CSS)
  components/
    global/         Nav (mega menu and mobile drawer), Footer, Logo
    content/        one component per section, listed below
  data/site.ts      capabilities, client logos, industries, hubs, nav, CTAs,
                    the shared team steps and the page-link helpers
  data/capability-pages.ts, data/industry-pages.ts
                    copy for each capability and industry page
  styles/base.css   brand tokens, type scale, themes, motion
  assets/           fonts, logo mark and icons
public/             favicon, social share image and logos/ for client logos
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

Capability and industry names, lines and slugs come from `src/data/site.ts`,
so the nav, the bento, the industry cards and pages, the footer and the
contact form's topic list all stay in step. Each page's longer copy lives in
`src/data/capability-pages.ts` or `src/data/industry-pages.ts`, keyed by the
same `id`. `capabilityHref` and `industryHref` build the page links, and
`TEAM_STEPS` holds the four steps from skills brief to Build-Operate-Transfer
shown on the About and capability pages.

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
"confirm before launch" tooltip. To list them all after a build:

```sh
npm run build
find dist -name '*.html' -exec grep -ohE 'class="tbc"[^>]*>[^<]+' {} + \
  | sed 's/.*>//' | sort | uniq -c
```

The open items:

- **Figures.** Years, enterprises served, talent network size, weeks to a
  productive team, countries, industry percentages and the reply time. Each
  capability and industry page also has four "Outcomes to expect" figures.
- **Hero photos.** The five reel photos in `src/assets/photos/` were
  supplied for the redesign; confirm the licence covers use on the live site.
- **Inner-page facts.** On the About page, the founding year and early
  milestones. On the careers page, health and wellbeing benefits, the length
  of the joining process and the careers email. The platforms, tools and
  standards listed on each capability and industry page describe skills, not
  partnerships; check each list reflects the teams ManyaIT can field. The
  healthcare FAQ says business associate agreements are put in place where
  needed; confirm that holds.
- **Hub details.** Street address, phone and email for Dallas and Hyderabad
  (`HUBS` in `src/data/site.ts`).
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
  `CareersOpenings` with the live job feed. The form's consent line links to
  the Privacy and Terms pages, which don't exist yet.
- **Insights.** The five articles are marked "Coming soon" and do not link
  anywhere yet.
- **Links.** Social profiles (`SOCIAL`), Privacy, Terms, Cookies and
  Accessibility are `#`.
- **Domain.** `SITE_URL` in `src/consts.ts` is `https://manyait.com`.
  Sitemap and canonical URLs use it.

## Copy rules

These apply to every word on the site:

- ManyaIT is a GCC (Global Capability Center) technology and talent partner.
  Tagline: "Technology & Talent Partners".
- Imply, never state, that ManyaIT provides vetted tech talent and builds
  teams. Use: talent, specialists, teams, capability center, AI-ready, vetted,
  matched to your stack, productive from week one, teams live in weeks,
  flexible scale, scale on demand, Build-Operate-Transfer, skills brief.
- Never use: recruiting/recruitment, staffing, staff augmentation,
  hire/hiring, placement, headhunting, outsourcing, consulting/consultants,
  agency, contractor, engagement/engagement lead, bench, resources, manpower,
  vendor.
- The hero does not lead with the service list or with locations.
- One idea per card, one line per tile.
- Dallas is the Client & Leadership Hub and Hyderabad the Engineering &
  Talent Hub.
- No client, number, certification or affiliate goes live until it is
  confirmed.

To check a build for the banned words:

```sh
npm run build
find dist -name '*.html' -exec grep -oiE "recruit|staffing|staff aug|\bhir(e|ed|ing)\b|placement|headhunt|outsourc|consult|agency|contractor|engagement|\bbench\b|\bresources?\b|manpower|vendor" {} + \
  | sort | uniq -c
```
