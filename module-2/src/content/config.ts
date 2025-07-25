import { defineCollection } from "astro:content";
import { z } from 'astro:content';

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(160, "Description must be 160 characters or less"),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog: blogCollection,
};
