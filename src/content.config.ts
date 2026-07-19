import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const cases = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/cases",
    generateId: ({ data }) => `${data.lang}/${data.slug}`,
  }),
  schema: z.object({
    lang: z.enum(["en", "zh"]),
    slug: z.enum(["fashionai-studio", "tt16", "storyweaver"]),
    order: z.string(),
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    year: z.string(),
    status: z.string(),
    role: z.string(),
    tech: z.array(z.string()),
    proof: z.array(z.string()),
    links: z.array(
      z.object({
        label: z.string(),
        href: z.url(),
        kind: z.enum(["primary", "secondary"]).default("secondary"),
      }),
    ),
    nextSlug: z.enum(["fashionai-studio", "tt16", "storyweaver"]),
    nextLabel: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

export const collections = { cases };
