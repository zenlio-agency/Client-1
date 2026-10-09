import type { APIRoute } from "astro";
import { ecosystem, logoRows } from "@/sanity/content.ts";

/*
 * SVG logos from Sanity, copied into the build and served from this site,
 * so visitors never load anything from Sanity. Photos go through Astro's
 * image pipeline instead (src/sanity/image.ts).
 */
export async function getStaticPaths() {
  const files = new Map<string, string>();
  for (const row of await logoRows()) {
    for (const logo of row.logos) {
      if (logo.svg) files.set(logo.svg.file, logo.svg.text);
    }
  }
  for (const company of await ecosystem()) {
    if (company.svg) files.set(company.svg.file, company.svg.text);
  }
  return [...files].map(([file, text]) => ({
    params: { file },
    props: { text },
  }));
}

export const GET: APIRoute = ({ props }) =>
  new Response(props.text as string, {
    headers: { "Content-Type": "image/svg+xml" },
  });
