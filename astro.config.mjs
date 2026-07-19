import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://wzxsph.github.io",
  base: "/wzxsph",
  output: "static",
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
