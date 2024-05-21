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
