import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    authors: z.array(z.string()).default([]),
    publication: z.string().optional(),
    publication_short: z.string().optional(),
    abstract: z.string().optional(),
    abstract_hr: z.string().optional(),
    tags: z.array(z.string()).default([]),
    publication_type: z.string().optional(),
    url_pdf: z.string().optional(),
    url_preprint: z.string().optional(),
    url_code: z.string().optional(),
    url_dataset: z.string().optional(),
    url_project: z.string().optional(),
    url_slides: z.string().optional(),
    url_video: z.string().optional(),
    url_poster: z.string().optional(),
    url_source: z.string().optional(),
    doi: z.string().optional(),
    selected: z.boolean().default(false),
    bibtex: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    summary_hr: z.string().optional(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    external_link: z.string().optional(),
    url_code: z.string().optional(),
    url_pdf: z.string().optional(),
    url_slides: z.string().optional(),
    url_video: z.string().optional(),
  }),
});

export const collections = { publications, projects };
