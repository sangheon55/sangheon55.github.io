import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const papers = defineCollection({
  loader: glob({ base: './src/content/papers', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    paper: z.object({
      title: z.string(),
      authors: z.string().optional(),
      venue: z.string().optional(),
      year: z.number().optional(),
      url: z.string().url().optional(),
    }),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { papers };
