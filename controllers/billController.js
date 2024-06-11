import { Prisma } from "../prisma/generated/client/index.js";
import { StatusCodes } from "http-status-codes";

import prismaClient from "../utils/prisma.js";
import {
  getAllUserBillSchema,
  getBillByWarungIdSchema,
} from "../schemas/billSchema.js";

export async function createBill(req, res) {
  const { warungId } = req.params;
  const { id: userId } = req.user;
  const { status, approved, customerName, orders } = req.body;

  try {
    let total = 0;

    for (let order of orders) {
      const { menuId, quantity } = order;
      const menu = await prismaClient.menu.findUnique({
        where: {
          id: menuId,
        },
      });

      total += menu.price * quantity;
    }
    const newBill = await prismaClient.bill.create({
      data: {
        status,
        total: total,
        customerName: customerName,
        approved:
          typeof approved === "boolean" ? approved : approved === "true",
        userId: userId,
        warungId: Number(warungId),
      },
    });

    const billId = newBill.id;

    let ordersToBill = [];

    for (let order of orders) {
      const { menuId, quantity } = order;
      const menu = await prismaClient.menu.findUnique({
        where: {
          id: menuId,
        },
      });
      const createOrder = await prismaClient.order.create({
        data: {
          quantity: quantity,
          menuId: menuId,
          billId: billId,
          total: menu.price * quantity,
        },
      });
      ordersToBill.push(createOrder);
    }

    return res
      .status(StatusCodes.CREATED)
      .json({ ...newBill, orders: ordersToBill });
  } catch (error) {
    console.log("🚀 ~ createBill ~ error:", error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function getAllUserBill(req, res) {
  const { id: userId } = req.user;

  // Validasi input menggunakan Zod
  const validationResult = getAllUserBillSchema.safeParse(req);
  if (!validationResult.success) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: validationResult.error.errors });
  }

  const { page = "1", limit = "10", search, status, approved } = req.query;
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  try {
    const whereConditions = {
      userId: userId,
      AND: [],
    };

    if (search) {
      whereConditions.AND.push({
        customerName: {
          contains: search,
          mode: "insensitive",
        },
      });
    }

    if (status) {
      whereConditions.AND.push({
        status: status,
      });
    }

    if (approved !== undefined) {
      whereConditions.AND.push({
        approved: approved === "true",
      });
    }

    const bills = await prismaClient.bill.findMany({
      where: whereConditions,
      skip: skip,
      take: limitNum,
      include: {
        warung: true,
        orders: true,
      },
    });

    const totalBills = await prismaClient.bill.count({
      where: whereConditions,
    });

    return res.status(StatusCodes.OK).json({
      data: bills,
      total: totalBills,
      page: pageNum,
      totalPages: Math.ceil(totalBills / limitNum),
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function getBillByWarungId(req, res) {
  // Validasi input menggunakan Zod
  const validationResult = getBillByWarungIdSchema.safeParse(req);
  if (!validationResult.success) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: validationResult.error.errors });
  }

  const { warungId } = req.params;
  const { id: userId } = req.user;
  const { page = "1", limit = "10", search, status, approved } = req.query;
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  try {
    const warung = await prismaClient.warung.findUnique({
      where: {
        id: +warungId,
        userId: userId,
      },
    });

    if (!warung) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Warung not found" });
    }

    const whereConditions = {
      warungId: +warungId,
      AND: [],
    };

    if (search) {
      whereConditions.AND.push({
        customerName: {
          contains: search,
          mode: "insensitive",
        },
      });
    }

    if (status) {
      whereConditions.AND.push({
        status: status,
      });
    }

    if (approved !== undefined) {
      whereConditions.AND.push({
        approved: approved === "true",
      });
    }

    const bills = await prismaClient.bill.findMany({
      where: whereConditions,
      skip: skip,
      take: limitNum,
      include: {
        orders: true,
      },
    });

    const totalBills = await prismaClient.bill.count({
      where: whereConditions,
    });

    return res.status(StatusCodes.OK).json({
      data: bills,
      total: totalBills,
      page: pageNum,
      totalPages: Math.ceil(totalBills / limitNum),
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function getBillById(req, res) {
  const { billId } = req.params;
  const { id: userId } = req.user;

  try {
    const bill = await prismaClient.bill.findUnique({
      where: {
        id: +billId,
        userId: userId,
      },
      include: {
        orders: true,
      },
    });

    if (!bill)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Bill not found" });

    return res.status(StatusCodes.OK).json(bill);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function updateBillById(req, res) {
  const { billId } = req.params;
  const { id: userId } = req.user;
  const { status, approved, customerName } = req.body;

  try {
    const bill = await prismaClient.bill.findUnique({
      where: {
        id: +billId,
        userId: userId,
      },
    });

    if (!bill)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Bill not found" });

    const dataUpdate = {
      status: status || undefined,
      customerName: customerName || undefined,
      approved:
        typeof approved !== "boolean"
          ? approved
            ? approved === "true"
            : undefined
          : approved,
    };

    const updateBill = await prismaClient.bill.update({
      where: {
        id: +billId,
      },
      data: {
        ...dataUpdate,
      },
    });

    return res.status(StatusCodes.OK).json(updateBill);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function createPublicBill(req, res) {
  const { id: warungId, userId } = req.warung;
  const { customerName, orders } = req.body;

  try {
    let total = 0;

    for (let order of orders) {
      const { menuId, quantity } = order;
      const menu = await prismaClient.menu.findUnique({
        where: {
          id: menuId,
        },
      });

      total += menu.price * quantity;
    }
    const newBill = await prismaClient.bill.create({
      data: {
        status: "Unpaid",
        total: total,
        customerName: customerName,
        approved: false,
        userId: userId,
        warungId: Number(warungId),
      },
    });

    const billId = newBill.id;

    let ordersToBill = [];

    for (let order of orders) {
      const { menuId, quantity } = order;
      const menu = await prismaClient.menu.findUnique({
        where: {
          id: menuId,
        },
      });
      const createOrder = await prismaClient.order.create({
        data: {
          quantity: quantity,
          menuId: menuId,
          billId: billId,
          total: menu.price * quantity,
        },
      });
      ordersToBill.push(createOrder);
    }

    return res
      .status(StatusCodes.CREATED)
      .json({ ...newBill, orders: ordersToBill });
  } catch (error) {
    console.log("🚀 ~ createBill ~ error:", error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}
