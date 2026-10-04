/**
 * Photography for the image tiles. These are free Unsplash photos standing in
 * until ManyaIT's own photography is ready. To swap one, put the file in
 * `public/images/` and replace its URL with the path (e.g. "/images/team.jpg").
 */
const unsplash = (id: string, width = 1200) =>
  `https://images.unsplash.com/${id}?w=${width}&q=70&auto=format&fit=crop`;

/** Keyed by capability id. */
export const CAPABILITY_PHOTOS: Record<string, string> = {
  "cap-data": unsplash("photo-1551288049-bebda4e38f71"),
  "cap-sap": unsplash("photo-1558494949-ef010cbdcc31"),
  "cap-ai": unsplash("photo-1655720828018-edd2daec9349"),
  "cap-flow": unsplash("photo-1531746790731-6c087fecd65a"),
  "cap-code": unsplash("photo-1461749280684-dccba630e2f6"),
};

/** Keyed by industry id. */
export const INDUSTRY_PHOTOS: Record<string, string> = {
  "industry-banking": unsplash("photo-1563986768609-322da13575f3", 900),
  "industry-telecom": unsplash("photo-1544197150-b99a580bb7a8", 900),
  "industry-healthcare": unsplash("photo-1576091160399-112ba8d25d1d", 900),
  "industry-energy": unsplash("photo-1473341304170-971dccb5ac1e", 900),
};

/** One per Insights article, in order. */
export const INSIGHT_PHOTOS = [
  unsplash("photo-1677442136019-21780ecad995"),
  unsplash("photo-1460925895917-afdab827c52f", 900),
  unsplash("photo-1504868584819-f8e8b4b6d7e3", 900),
  unsplash("photo-1504384308090-c894fdcc538d", 900),
  unsplash("photo-1498050108023-c5249f4df085", 900),
];

/** The homepage careers card. */
export const CAREERS_PHOTO = unsplash("photo-1522071820081-009f0129c71c", 1600);

/** One per careers-page point, in order. */
export const CAREERS_POINT_PHOTOS = [
  unsplash("photo-1486312338219-ce68d2c6f44d", 900),
  unsplash("photo-1519389950473-47ba0277781c", 900),
  unsplash("photo-1531482615713-2afd69097998", 900),
  unsplash("photo-1552664730-d307ca884978", 900),
];

/** The About page: hero, then the story section. */
export const ABOUT_PHOTOS = {
  hero: unsplash("photo-1542744173-8e7e53415bb0"),
  story: unsplash("photo-1521737604893-d14cc237f11d"),
};

/** The careers page's "Life at ManyaIT" section. */
export const CAREERS_LIFE_PHOTO = unsplash("photo-1551434678-e076c223a692");

/** The Locations page hero. */
export const LOCATIONS_PHOTO = unsplash("photo-1497215728101-856f4ea42174");
