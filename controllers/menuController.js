import { StatusCodes } from "http-status-codes";

import prismaClient from "../utils/prisma.js";
import { handleUpload } from "../utils/cloudinary.js";
import {
  getAllMenuByWarungNameSchema,
  getAllMenuSchema,
  getWarungMenuSchema,
} from "../schemas/menuSchema.js";

export async function createMenu(req, res) {
  const { id: userId } = req.user;
  const { warungId } = req.params;

  const { title, price, desc, available, category } = req.body;

  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);

    const menu = await prismaClient.menu.create({
      data: {
        title,
        price: Number(price),
        desc,
        available:
          typeof available !== "boolean" ? available === "true" : available,
        image: cldRes.secure_url,
        warungId: Number(warungId),
        userId: Number(userId),
        category: category,
      },
    });

    return res.status(StatusCodes.CREATED).json(menu);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function updateMenuImage(req, res) {
  const { warungId } = req.params;
  const { menuId } = req.params;

  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);

    const menu = await prismaClient.menu.update({
      where: {
        id: +menuId,
        warungId: +warungId,
      },
      data: {
        image: cldRes.secure_url,
      },
    });

    return res.status(StatusCodes.OK).json(menu);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function updateMenuAvailablity(req, res) {
  const { warungId } = req.params;
  const { available } = req.body;
  const { menuId } = req.params;

  try {
    const menu = await prismaClient.menu.update({
      where: {
        id: +menuId,
        warungId: +warungId,
      },
      data: {
        available:
          typeof available !== "boolean" ? available === "true" : available,
      },
    });

    return res.status(StatusCodes.OK).json(menu);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function updateMenu(req, res) {
  const { warungId } = req.params;
  const { menuId } = req.params;

  const { title, price, desc, available, category } = req.body;

  try {
    const dataUpdate = {
      title: title || undefined,
      price: Number(price) || undefined,
      desc: desc || undefined,
      available:
        typeof available !== "boolean"
          ? available
            ? available === "true"
            : undefined
          : available,
      category: category || undefined,
    };

    const menu = await prismaClient.menu.update({
      where: {
        id: +menuId,
        warungId: +warungId,
      },
      data: {
        ...dataUpdate,
      },
    });

    return res.status(StatusCodes.OK).json(menu);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function getAllMenu(req, res) {
  const { id: userId } = req.user;

  // Validasi input menggunakan Zod
  const validationResult = getAllMenuSchema.safeParse(req);
  if (!validationResult.success) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: validationResult.error.errors });
  }

  const { page = "1", limit = "10", search, category, available } = req.query;

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
        title: {
          contains: search,
          mode: "insensitive",
        },
      });
    }

    if (category) {
      whereConditions.AND.push({
        category: category,
      });
    }

    if (available !== "") {
      whereConditions.AND.push({
        available: available === "true",
      });
    }

    const menus = await prismaClient.menu.findMany({
      where: whereConditions,
      skip: skip,
      take: limitNum,
      include: {
        warung: true,
      },
    });

    const totalMenus = await prismaClient.menu.count({
      where: whereConditions,
    });

    return res.status(StatusCodes.OK).json({
      data: menus,
      total: totalMenus,
      page: pageNum,
      totalPages: Math.ceil(totalMenus / limitNum),
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}
export async function getOneMenuById(req, res) {
  const { menuId } = req.params;
  const { id: userId } = req.user;

  try {
    const menu = await prismaClient.menu.findUnique({
      where: {
        id: +menuId,
        userId: userId,
      },
      include: {
        warung: true,
      },
    });
    if (!menu)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Menu not found" });

    return res.status(StatusCodes.OK).json(menu);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function getWarungMenu(req, res) {
  console.log("masuk");
  // Validasi input menggunakan Zod
  const validationResult = getWarungMenuSchema.safeParse(req);
  if (!validationResult.success) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: validationResult.error.errors });
  }

  const { warungId } = req.params;
  const { page = "1", limit = "10", search, category, available } = req.query;
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  try {
    const whereConditions = {
      warungId: parseInt(warungId),
      AND: [],
    };

    if (search) {
      whereConditions.AND.push({
        title: {
          contains: search,
          mode: "insensitive",
        },
      });
    }

    if (category) {
      whereConditions.AND.push({
        category: category,
      });
    }

    if (available !== "") {
      whereConditions.AND.push({
        available: available === "true",
      });
    }

    const menus = await prismaClient.menu.findMany({
      where: whereConditions,
      skip: skip,
      take: limitNum,
      include: {
        warung: true,
      },
    });

    const totalMenus = await prismaClient.menu.count({
      where: whereConditions,
    });

    return res.status(StatusCodes.OK).json({
      data: menus,
      total: totalMenus,
      page: pageNum,
      totalPages: Math.ceil(totalMenus / limitNum),
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function getAllMenuByWarungName(req, res) {
  const validationResult = getAllMenuByWarungNameSchema.safeParse(req);
  if (!validationResult.success) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: validationResult.error.errors });
  }
  const { warungName } = req.params;
  const { page = "1", limit = "10", search, category, available } = req.query;
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  try {
    const whereConditions = {
      warung: {
        name: warungName,
      },
      AND: [],
    };

    if (search) {
      whereConditions.AND.push({
        title: {
          contains: search,
          mode: "insensitive",
        },
      });
    }

    if (category) {
      whereConditions.AND.push({
        category: category,
      });
    }

    if (available !== undefined) {
      whereConditions.AND.push({
        available: available === "true",
      });
    }

    const menus = await prismaClient.menu.findMany({
      where: whereConditions,
      skip: skip,
      take: limitNum,
      include: {
        warung: true,
      },
    });

    const totalMenus = await prismaClient.menu.count({
      where: whereConditions,
    });

    return res.status(StatusCodes.OK).json({
      data: menus,
      total: totalMenus,
      page: pageNum,
      totalPages: Math.ceil(totalMenus / limitNum),
    });
  } catch (error) {
    console.log("🚀 ~ getAllMenuByWarungName ~ error:", error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}
