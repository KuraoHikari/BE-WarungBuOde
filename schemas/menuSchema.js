import { z } from "zod";

export const createMenuSchema = z.object({
  title: z.string(),
  price: z.coerce.number(),
  desc: z.string(),
  available: z.coerce.boolean(),
  category: z.string(),
});

export const MenuSchema = z.object({
  title: z.string(),
  price: z.coerce.number(),
  desc: z.string(),
  available: z.coerce.boolean(),
  category: z.string(),
});

export const updateMenuSchema = z.object({
  title: z.string().optional(),
  price: z.coerce.number().optional(),
  desc: z.string().optional(),
  available: z.coerce.boolean().optional(),
  category: z.string().optional(),
});

export const updateMenuAvailableSchema = z.object({
  available: z.coerce.boolean().optional(),
});

const menuQuerySchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
  search: z.string().optional(),
  category: z.string().optional(),
  available: z.string().optional(),
});

export const getAllMenuSchema = z.object({
  query: menuQuerySchema,
});

export const getWarungMenuSchema = z.object({
  query: menuQuerySchema,
  params: z.object({
    warungId: z.string(),
  }),
});
