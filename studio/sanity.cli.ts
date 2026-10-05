import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET ?? "production",
  },
  /* `npm run deploy` publishes the Studio to https://manyait.sanity.studio */
  studioHost: "manyait",
  autoUpdates: true,
});
