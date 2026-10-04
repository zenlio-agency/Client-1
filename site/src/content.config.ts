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

export const collections = { legal };
