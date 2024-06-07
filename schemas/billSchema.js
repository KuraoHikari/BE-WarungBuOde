import { z } from "zod";

const Order = z.object({
  menuId: z.number(),
  quantity: z.number(),
});

export const createBillSchema = z.object({
  status: z.string(),
  approved: z.boolean(),
  customerName: z.string(),

  orders: z.array(Order),
});

export const updateBillSchema = z.object({
  status: z.string().optional(),
  approved: z.boolean().optional(),
  customerName: z.string().optional(),
});

export const createPublicBillSchema = z.object({
  customerName: z.string(),

  orders: z.array(Order),
});

export const getAllUserBillSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    search: z.string().optional(),
    status: z.string().optional(),
    approved: z.string().optional(),
  }),
});

export const getBillByWarungIdSchema = z.object({
  params: z.object({
    warungId: z.string().nonempty(),
  }),
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    search: z.string().optional(),
    status: z.string().optional(),
    approved: z.string().optional(),
  }),
});
