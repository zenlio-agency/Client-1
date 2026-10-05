import type { CollectionEntry } from "astro:content";

type Insight = CollectionEntry<"insights">;

/** Words read per minute, for the read time on cards and articles. */
const WORDS_PER_MINUTE = 220;

/** Minutes to read an article, worked out from its text. */
export const readMinutes = (entry: Insight) =>
  Math.max(
    1,
    Math.round(
      (entry.body ?? "").split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE,
    ),
  );

/** The article's page. */
export const insightHref = (entry: Insight) => `/insights/${entry.id}`;

/** The article's photo, from `public/images/`. */
export const insightPhoto = (entry: Insight) =>
  `/images/${entry.data.photo}.webp`;

/** Matches a category to its filter on the Insights grid. */
export const categorySlug = (category: string) =>
  category.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/** Articles in grid order. */
export const byOrder = (a: Insight, b: Insight) => a.data.order - b.data.order;
