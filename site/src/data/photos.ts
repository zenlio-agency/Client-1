/**
 * Photography for the image tiles: free Unsplash photos, standing in until
 * ManyaIT's own photography is ready. They are served from `public/images/`
 * as WebP, so pages make no third-party requests. To swap one, replace the
 * file and keep its name, or add a new file and change its path here.
 */
const image = (name: string) => `/images/${name}.webp`;

/** Keyed by capability id. */
export const CAPABILITY_PHOTOS: Record<string, string> = {
  "cap-data": image("cap-data"),
  "cap-sap": image("cap-sap"),
  "cap-ai": image("cap-ai"),
  "cap-flow": image("cap-flow"),
  "cap-code": image("cap-code"),
};

/** Keyed by industry id. */
export const INDUSTRY_PHOTOS: Record<string, string> = {
  "industry-banking": image("industry-banking"),
  "industry-telecom": image("industry-telecom"),
  "industry-healthcare": image("industry-healthcare"),
  "industry-energy": image("industry-energy"),
};

/** One per Insights article, in order. */
export const INSIGHT_PHOTOS = [1, 2, 3, 4, 5].map((n) => image(`insight-${n}`));

/** The homepage careers card. */
export const CAREERS_PHOTO = image("careers-home");

/** One per careers-page point, in order. */
export const CAREERS_POINT_PHOTOS = [1, 2, 3, 4].map((n) =>
  image(`careers-point-${n}`),
);

/** The About page: hero, then the story section. */
export const ABOUT_PHOTOS = {
  hero: image("about-hero"),
  story: image("about-story"),
};

/** The careers page's "Life at ManyaIT" section. */
export const CAREERS_LIFE_PHOTO = image("careers-life");

/** The Locations page hero. */
export const LOCATIONS_PHOTO = image("locations-hero");
