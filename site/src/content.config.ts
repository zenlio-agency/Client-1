import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

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

export const collections = { legal, insights };
