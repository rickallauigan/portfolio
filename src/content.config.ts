import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const status = z.enum(['Planned', 'Lab', 'In progress', 'Complete']);
const caseStudies = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/case-studies',
  }),
  schema: z.object({
    title: z.string(),
    status,
    summary: z.string(),
    technologies: z.array(z.string()),
    order: z.number(),
    repositoryUrl: z.url().nullable().default(null),
  }),
});
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    status,
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { caseStudies, writing };
