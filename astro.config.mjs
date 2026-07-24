import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://wzxsph.github.io";
const base = process.env.BASE_PATH ?? "/wzxsph";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
