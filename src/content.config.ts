import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const blogs = defineCollection({
  loader: glob({
    base: './src/content/blogs',
    pattern: '**/*.{md,mdx}',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: image(),
      topics: z.array(z.string()),
      pubDate: z.coerce.date(),
    }),
});

const legals = defineCollection({
  loader: glob({
    base: './src/content/legals',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { blogs, legals };