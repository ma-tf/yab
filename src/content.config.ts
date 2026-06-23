import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/post.md", base: "./src/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()),
      updatedDate: z.date().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
