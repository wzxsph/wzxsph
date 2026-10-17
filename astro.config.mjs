import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://wzxsph.github.io";
const base = process.env.BASE_PATH ?? "/wzxsph";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({ filter: (page) => !/\/(?:zh\/|404\.html)$/.test(new URL(page).pathname) }),
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
