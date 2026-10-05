// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/consts.ts";
import { isNoindexRoute } from "./src/utils/seo.ts";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./src/sanity/config.ts";
import { defineConfig } from 'astro/config';

const SITE_URL = 'https://manyait.com';

export default defineConfig({
  site: SITE_URL,
});



export default defineConfig({
  site: SITE_URL,
  /* The addresses people guess for the legal pages. */
  redirects: {
    "/privacy": "/legal/privacy",
    "/privacy-policy": "/legal/privacy",
    "/terms": "/legal/terms",
    "/terms-of-use": "/legal/terms",
    "/cookie-policy": "/legal/cookies",
    "/accessibility": "/legal/accessibility",
  },
  /* Lets an ngrok tunnel reach `npm run dev` and `npm run preview`, so the
     local site can be shared for review. A leading dot allows every
     subdomain, and ngrok gives each tunnel its own. */
  server: {
    allowedHosts: [
      ".ngrok-free.app",
      ".ngrok-free.dev",
      ".ngrok.app",
      ".ngrok.dev",
      ".ngrok.io",
    ],
  },
  /* Images from Sanity are downloaded at build time and served from this
     site, never from Sanity (see src/sanity/image.ts). Only this project's
     images may be fetched. */
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: `/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/**`,
      },
    ],
  },
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
