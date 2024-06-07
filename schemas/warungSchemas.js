import { z } from "zod";

export const createWarungSchema = z.object({
  name: z.string(),
  location: z.string(),
});

export const updateWarungSchema = z.object({
  location: z.string().optional(),
});

export const getAllMyWarungSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    search: z.string().optional(),
  }),
});
