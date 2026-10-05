/* Stands in for `astro:assets` when the seed renders article text outside
   Astro. Article bodies in the seed have no images, so this never runs. */
export function getImage() {
  throw new Error("The seed renders text only; images need an Astro build.");
}
