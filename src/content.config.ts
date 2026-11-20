import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  // One Markdown file per service: src/content/services/<slug>.md
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    name: z.string(),
    title: z.string().min(20).max(70),
    description: z.string().min(70).max(160),
    lastUpdated: z.coerce.date(),
    summary: z.string(),
    goodFor: z.array(z.string()).min(2),
    checks: z.array(z.string()).min(3),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(2),
  }),
});

export const collections = { services };
