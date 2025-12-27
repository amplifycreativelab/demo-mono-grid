import { defineCollection, z } from 'astro:content';

const work = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        location: z.string(),
        year: z.number(),
        cover: image(),
        overview: z.string(),
        outcome: z.string().optional(),
        gallery: z.array(z.object({
            image: image(),
            caption: z.string().optional(),
        })).optional(),
    }),
});

export const collections = {
    work,
};
