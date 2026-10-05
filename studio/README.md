# ManyaIT Studio

The Sanity Studio where HR and marketing manage the website's content: job
openings, insights, case studies, the homepage, capabilities, industries,
locations, search settings and site-wide details. The website in `../site`
keeps all design, layout and animation; the Studio only holds content.

The Studio uses project `4ovcy09k` and the `production` dataset. The website
already fetches this content at build time, but its pages switch to it one
area at a time, so nothing on the live site changes until then.

## Set up

Node 22.12 or newer.

```sh
cd studio
npm install
npm run dev        # http://localhost:3333, sign in with your Sanity account
```

To publish the Studio for editors, sign in once with `npx sanity login`, then
run `npm run deploy`. It goes to https://manyait.sanity.studio (if that name
is taken, Sanity asks for another).

No `.env` is needed. Copy `.env.example` to `.env` only to point the Studio
at another project or dataset, e.g. a test dataset.

| Script             | What it does                                                       |
| ------------------ | ------------------------------------------------------------------ |
| `npm run dev`      | The Studio locally                                                 |
| `npm run build`    | Builds the Studio to `dist/`                                       |
| `npm run deploy`   | Publishes it to https://manyait.sanity.studio                      |
| `npm run validate` | Checks the schemas                                                 |
| `npm run check`    | Type-checks the code                                               |
| `npm run typegen`  | Regenerates the website's query types (`site/src/sanity/types.ts`) |

## What editors see

The menu is arranged around the jobs HR and marketing do:

- **Start here**: a one-page guide to publishing, jobs, articles and the copy
  rules.
- **Careers**: open roles, closed roles and all roles. "New job opening" starts
  a role that is open, posted today and applied for by email. **Close role**
  closes and publishes in one step.
- **Insights**: articles and categories. The Insights grid's filters come from
  the categories.
- **Case studies**.
- **Website pages**: the homepage, the other pages (About, Careers, Locations,
  Contact and the overview pages), capabilities, industries and locations.
- **Proof & claims**: everything not yet confirmed in writing, client logos
  and ecosystem companies.
- **Site settings**: contacts, social profiles, button labels, the footer
  line, approved job boards and default search settings.

## Safeguards

- **Nothing unconfirmed goes live.** Figures, client logos, quotes, client
  names and ecosystem relationships start unconfirmed. Marking one confirmed
  needs who confirmed it, when and the evidence. A case study names its client
  only with recorded permission, and always has an anonymous description.
  "Proof & claims → Not confirmed yet" lists what's waiting.
- **Copy rules.** Every copy field warns about the banned words in
  `site/README.md` (recruiting, staffing, hire, consulting, vendor and the
  rest).
- **Addresses stay put.** Capability and industry addresses are read-only. A
  published article, role or case study can't change its address unless an
  administrator allows it (a developer then adds a redirect).
- **Fixed sets.** The settings, homepage, page settings, capabilities,
  industries and locations can be edited and published but never created,
  deleted, duplicated or unpublished, because the site's layout depends on
  them. They are created once by the seed script (phase 3).
- **Job applications** go by email to the careers address, or to a job board
  listed under "Approved job boards" in Site settings. The contact-form option
  is added once the form is connected to an inbox.
- **Alt text** is required on every image unless it's marked decorative.
- **The query tool** (Vision) is shown to administrators only.

## Content types

| Type                                 | What it is                                       |
| ------------------------------------ | ------------------------------------------------ |
| `siteSettings`, `homePage`           | One document each                                |
| `pageSettings`                       | One per code-owned page (`page-about`, …)        |
| `capability`, `industry`, `location` | Fixed sets with the site's existing ids          |
| `insight`, `insightCategory`         | Articles at `/insights/<slug>` and their filters |
| `opportunity`                        | Job openings at `/careers/<slug>`                |
| `caseStudy`                          | Case studies at `/case-studies/<slug>`           |
| `clientLogo`, `ecosystemCompany`     | Proof shown on the homepage, each confirmed      |

Shared objects: `seo`, `stat` (a figure with its confirmation), `imageWithAlt`,
`textBlock` and `articleBody` (rich text with tables and callouts), and the
section objects used by the pages.

## Phases

1. Done: the Studio, its content types and safeguards.
2. Done: the website fetches Sanity content at build time. Images are copied
   onto the site, so visitors never load anything from Sanity.
3. A seed script imports today's content, with every claim unconfirmed.
4. Pages switch to Sanity one area at a time, checked against today's output.
5. Build-time checks for unconfirmed claims, placeholders and banned words.
6. Hosting, the publish webhook and a daily rebuild.
7. An editor guide and invitations.
