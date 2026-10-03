# ManyaIT website

The ManyaIT marketing site, built with [Astro](https://astro.build) on the
[Lumos for Astro](https://lumosframework.com) framework. It turns the
wireframe in `../wireframe` and the copy in `../content/homepage-copy.md` into
a working site in the ManyaIT palette.

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
  pages/            index, contact and 404 (pages carry no CSS)
  components/
    global/         Nav (mega menu and mobile drawer), Footer, Logo
    content/        one component per homepage section, listed below
  data/site.ts      capabilities, industries, hubs, nav, CTAs, social links
  styles/base.css   brand tokens, type scale, themes, motion
  assets/           logo mark and icons
public/             favicon and social share image
```

| #   | Section                  | Component                    |
| --- | ------------------------ | ---------------------------- |
| 01  | Hero and capability reel | `HeroHome`, `CapabilityReel` |
| 02  | At a glance (trust bar)  | `TrustStrip`                 |
| 03  | Challenges we solve      | `ChallengeRows`              |
| 04  | Why ManyaIT              | `WhyCards`                   |
| 05  | Capabilities (bento)     | `CapabilityBento`            |
| 06  | How we work              | `ProcessSteps`               |
| 07  | Industries               | `IndustryTabs`               |
| 08  | Enterprise impact        | `ImpactCase`                 |
| 09  | Careers                  | `CareersHome`                |
| 10  | Insights                 | `InsightsGrid`               |
| 11  | Global presence          | `GlobalPresence`             |
| 12  | Ecosystem                | `EcosystemCards`             |
| 13  | Final call to action     | `CtaFinal`                   |
| —   | Contact page             | `ContactConversation`        |

Capability and industry copy comes from `src/data/site.ts`, so the nav, the
bento, the dialogs, the tabs and the contact form's topic list all stay in step.

## Brand

The palette comes from the ManyaIT logo directions: Ink Black `#0D0F0D`, Manya
Blue `#2340E6` with its 50–900 ramp, slate text greys, and the success, warning
and error pairs. They are tokens in `src/styles/base.css`, and the four themes
(`light`, `tint`, `dark`, `brand`) map them onto backgrounds, text, borders and
buttons. Headings and UI use Poppins 400/500/600 and body text uses Inter.
Both are self-hosted, so there are no requests to Google Fonts.

## Motion

- Sections fade and rise into view as they scroll in, in a short stagger.
- Pages cross-fade with native view transitions, and the nav stays still.
- The hero badge cycles Data, SAP, AI and Digital Engineering, and lights the
  matching tile in the capability reel.
- The reel and challenge rows scroll as marquees. They pause on hover and
  have a pause button.
- The How we work rail fills as you scroll (scroll-driven animation).
- The map draws the Dallas to Hyderabad arc, with a dot travelling along it.
- Capability dialogs and the mega menu open with short transitions.

With `prefers-reduced-motion: reduce`, nothing moves: reveals are off and the
marquees start paused. Without JavaScript, all content still shows.

## Before launch

Anything in square brackets is a placeholder. Each one goes through `tbc()` in
`src/data/site.ts`, so on the page it shows with a dotted underline and a
"confirm before launch" tooltip. To list them all after a build:

```sh
npm run build
grep -ohE 'class="tbc"[^>]*>[^<]+' dist/index.html dist/contact/index.html \
  | sed 's/.*>//' | sort | uniq -c
```

The open items:

- **Figures.** Years, programs, team size, countries, impact percentages and
  the reply time on the contact page.
- **Hub details.** Street address, phone and email for Dallas and Hyderabad
  (`HUBS` in `src/data/site.ts`).
- **Case study.** Industry, story, outcome and an approved sponsor quote
  (`ImpactCase`). Until one is approved for publication, pass `approved={false}`
  and the section shows a "what an engagement looks like" walkthrough instead.
- **Client logos.** `TrustStrip` shows a logo bar only when it is given
  `logos`. It is hidden until logos are cleared for use.
- **Ecosystem.** `EcosystemCards` renders nothing until `companies` is given
  confirmed affiliates.
- **Forms.** The contact form, the newsletter field and the role finder are
  not connected to anything, and each one says so when used. Give the contact
  `Form` an `action` endpoint, connect the newsletter in `Footer.astro`, and
  replace the sample roles in `CareersHome` with the live job feed.
- **Insights.** The five articles are marked "Coming soon" and do not link
  anywhere yet.
- **Links.** Social profiles (`SOCIAL`), Privacy, Terms, Cookies and
  Accessibility are `#`.
- **Domain.** `SITE_URL` in `src/consts.ts` is `https://manyait.com`.
  Sitemap and canonical URLs use it.

## Copy rules

The copy follows the master prompt in `../content/homepage-copy.md`:

- ManyaIT builds and runs capabilities; it does not supply people.
- Hiring and outsourcing vocabulary stays off the public site.
- Dallas is the Client & Leadership Hub and Hyderabad the Engineering &
  Delivery Hub: "Two cities. One team."
- No client, number, certification or affiliate goes live until it is
  confirmed.

Check new copy against that list before publishing.
