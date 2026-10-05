import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { sanityLoader } from "./sanity/loader.ts";
import * as queries from "./sanity/queries.ts";
import type * as Sanity from "./sanity/types.ts";

/**
 * The legal pack: one Markdown file per policy in `src/content/legal/`, each
 * served at `/legal/<file name>`. Dates are ISO (`2026-10-04`) once set, or a
 * bracketed placeholder until counsel signs off.
 */
const legal = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/legal" }),
  schema: z.object({
    /** Page title and H1. */
    title: z.string(),
    /** One line for the card on the legal hub. */
    summary: z.string(),
    /** Meta description. */
    description: z.string(),
    /** Position on the hub. */
    order: z.number().int(),
    effective: z.string(),
    updated: z.string(),
    version: z.string(),
    /** Plain-language bullets for the "At a glance" box. */
    glance: z.array(z.string()).min(1),
    /** Optional warning shown above everything else. */
    callout: z.string().optional(),
    /** Which contact card closes the page. */
    contact: z.enum(["privacy", "legal", "accessibility", "careers"]),
    /** Newest first. */
    changes: z
      .array(
        z.object({
          version: z.string(),
          date: z.string(),
          summary: z.string(),
        }),
      )
      .default([]),
  }),
});

/**
 * Insights articles: one Markdown file per article in `src/content/insights/`,
 * served at `/insights/<file name>`. The read time is worked out from the
 * text, so it never needs updating by hand.
 */
const insights = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    /** One line under the title, and on the card. */
    summary: z.string(),
    /** Meta description. */
    description: z.string(),
    /** Matches a filter on the Insights grid. */
    category: z.enum([
      "AI",
      "Data",
      "SAP",
      "Digital Engineering",
      "Enterprise Technology",
    ]),
    type: z.enum(["Perspective", "Guide", "Explainer", "Field notes"]),
    /** Position on the grid. */
    order: z.number().int(),
    /** The first card, shown large. */
    featured: z.boolean().default(false),
    /** A file name in `public/images/`, without `.webp`. */
    photo: z.string(),
    /** ISO date (`2026-10-05`) once set, or a bracketed placeholder. */
    published: z.string(),
    author: z.string().default("The ManyaIT team"),
    /** Three or four lines for the "In short" box at the top. */
    takeaways: z.array(z.string()).min(1),
    /** Contact-form topic the closing call to action preselects. */
    topic: z.string(),
    /** The capability or page the article leads to. */
    related: z.object({ label: z.string(), href: z.string() }),
  }),
});

/**
 * Content from Sanity, fetched fresh on every build: one collection per
 * content type, each entry keyed by its Sanity document id. Studio checks the
 * content when it's published, so these schemas only carry the types that
 * `npm run typegen` (in studio/) generates from the queries.
 *
 * Pages switch from the data files and Markdown to these one area at a time.
 */
const fromSanity = <Entry>(query: string) =>
  defineCollection({
    loader: sanityLoader(query),
    schema: z.custom<Entry>(),
  });

type One<T extends unknown[]> = T[number];

const siteSettings = fromSanity<One<Sanity.SiteSettingsQueryResult>>(
  queries.siteSettingsQuery,
);
const homePage = fromSanity<One<Sanity.HomePageQueryResult>>(
  queries.homePageQuery,
);
const pageSettings = fromSanity<One<Sanity.PageSettingsQueryResult>>(
  queries.pageSettingsQuery,
);
const capabilities = fromSanity<One<Sanity.CapabilitiesQueryResult>>(
  queries.capabilitiesQuery,
);
const industries = fromSanity<One<Sanity.IndustriesQueryResult>>(
  queries.industriesQuery,
);
const locations = fromSanity<One<Sanity.LocationsQueryResult>>(
  queries.locationsQuery,
);
/** Replaces the Markdown `insights` collection when the Insights pages switch. */
const articles = fromSanity<One<Sanity.ArticlesQueryResult>>(
  queries.articlesQuery,
);
const articleCategories = fromSanity<One<Sanity.ArticleCategoriesQueryResult>>(
  queries.articleCategoriesQuery,
);
const opportunities = fromSanity<One<Sanity.OpportunitiesQueryResult>>(
  queries.opportunitiesQuery,
);
const caseStudies = fromSanity<One<Sanity.CaseStudiesQueryResult>>(
  queries.caseStudiesQuery,
);
const clientLogos = fromSanity<One<Sanity.ClientLogosQueryResult>>(
  queries.clientLogosQuery,
);
const ecosystem = fromSanity<One<Sanity.EcosystemQueryResult>>(
  queries.ecosystemQuery,
);

export const collections = {
  legal,
  insights,
  siteSettings,
  homePage,
  pageSettings,
  capabilities,
  industries,
  locations,
  articles,
  articleCategories,
  opportunities,
  caseStudies,
  clientLogos,
  ecosystem,
};
