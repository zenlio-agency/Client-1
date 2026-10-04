// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/consts.ts";
import { isNoindexRoute } from "./src/utils/seo.ts";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) => !isNoindexRoute(new URL(page).pathname),
    }),
  ],
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.local(),
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/inter-latin-wght-normal.woff2"],
          },
        ],
      },
    },
    {
      name: "Plus Jakarta Sans",
      cssVariable: "--font-plus-jakarta",
      provider: fontProviders.local(),
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            weight: "200 800",
            style: "normal",
            src: [
              "./src/assets/fonts/plus-jakarta-sans-latin-wght-normal.woff2",
            ],
          },
          {
            weight: "200 800",
            style: "italic",
            src: [
              "./src/assets/fonts/plus-jakarta-sans-latin-wght-italic.woff2",
            ],
          },
        ],
      },
    },
    {
      name: "Poppins",
      cssVariable: "--font-poppins",
      provider: fontProviders.local(),
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/poppins-latin-400-normal.woff2"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/poppins-latin-500-normal.woff2"],
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/poppins-latin-600-normal.woff2"],
          },
        ],
      },
    },
  ],
  vite: { build: { cssTarget: "safari15.4" } },
});
