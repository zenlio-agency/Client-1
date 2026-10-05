import { getImage } from "astro:assets";
import { createImageUrlBuilder } from "@sanity/image-url";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./config.ts";
import type { SanityImageCrop, SanityImageHotspot } from "./types.ts";

/*
 * Images from Sanity are downloaded at build time and served from the
 * site's own domain, so visitors never load anything from Sanity. Astro
 * fetches each file once (allowed by `image.remotePatterns` in
 * astro.config.mjs) and writes the resized copies into the build.
 */

/** An image as the queries return it (see `IMAGE` in queries.ts). */
export type SanityImage = {
  asset: {
    _id: string;
    url: string | null;
    extension: string | null;
    width: number | null;
    height: number | null;
  } | null;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
  alt?: string;
  decorative?: boolean;
};

const builder = createImageUrlBuilder({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
});

/** The widest file fetched from Sanity; Astro makes smaller sizes from it. */
const MAX_WIDTH = 2400;

/**
 * The file Astro downloads: the editor's crop applied, at most `MAX_WIDTH`
 * wide. Given an aspect ratio, Sanity also crops to that shape around the
 * editor's hotspot, so a fixed-shape slot keeps the important part.
 */
export function imageSource(image: SanityImage, aspectRatio?: number) {
  const { asset } = image;
  if (!asset?.width || !asset.height) return undefined;
  if (asset.extension === "svg") {
    throw new Error(
      `Image ${asset._id} is an SVG. SVGs are copied as files, not resized; they can't go through the photo helpers.`,
    );
  }
  const { top = 0, bottom = 0, left = 0, right = 0 } = image.crop ?? {};
  const croppedWidth = asset.width * (1 - left - right);
  const croppedHeight = asset.height * (1 - top - bottom);
  const ratio = aspectRatio ?? croppedWidth / croppedHeight;
  const width = Math.floor(
    Math.min(MAX_WIDTH, croppedWidth, croppedHeight * ratio),
  );
  const height = Math.round(width / ratio);
  const url = builder.image(image).width(width).height(height).quality(90);
  return { url: url.url(), width, height };
}

/** The editor's hotspot as a CSS `object-position`, for cover-fit photos. */
export function objectPosition(image: SanityImage): string | undefined {
  const { hotspot } = image;
  if (hotspot?.x === undefined || hotspot.y === undefined) return undefined;
  const { top = 0, bottom = 0, left = 0, right = 0 } = image.crop ?? {};
  const percent = (value: number) =>
    `${Math.round(Math.min(1, Math.max(0, value)) * 100)}%`;
  return `${percent((hotspot.x - left) / (1 - left - right))} ${percent(
    (hotspot.y - top) / (1 - top - bottom),
  )}`;
}

/** Alt text, or empty for an image marked decorative. */
export const altText = (image: SanityImage) =>
  image.decorative ? "" : (image.alt ?? "");

type PhotoOptions = {
  /** Width of the file written to the build. */
  width?: number;
  /** Crop to this width ÷ height around the hotspot. */
  aspectRatio?: number;
  /** `jpg` for social images, which not every platform reads as WebP. */
  format?: "webp" | "jpg";
};

/**
 * A Sanity image copied into the build at one size, for components that take
 * a plain image path (photo tiles, page headers, social images). Returns
 * `undefined` when there's no image, so the component shows its fallback.
 */
export async function sanityPhoto(
  image: SanityImage | null | undefined,
  { width = 1600, aspectRatio, format = "webp" }: PhotoOptions = {},
) {
  const source = image && imageSource(image, aspectRatio);
  if (!image || !source) return undefined;
  const outWidth = Math.min(width, source.width);
  const outHeight = Math.round((outWidth * source.height) / source.width);
  const { src } = await getImage({
    src: source.url,
    width: outWidth,
    height: outHeight,
    format,
  });
  return {
    src,
    width: outWidth,
    height: outHeight,
    alt: altText(image),
    position: objectPosition(image),
  };
}
