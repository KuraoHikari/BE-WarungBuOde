import { StatusCodes } from "http-status-codes";

import prismaClient from "../utils/prisma.js";
import { handleUpload } from "../utils/cloudinary.js";

export async function createMenu(req, res) {
  const { id: userId } = req.user;
  const { warungId } = req.params;

  const { title, price, desc, available, category } = req.body;

  const b64 = Buffer.from(req.file.buffer).toString("base64");
  let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
  const cldRes = await handleUpload(dataURI);

  try {
    const menu = await prismaClient.menu.create({
      data: {
        title,
        price: Number(price),
        desc,
        available: Boolean(available),
        image: cldRes.secure_url,
        warungId: Number(warungId),
        userId: Number(userId),
        category: category,
      },
    });

    return res.status(StatusCodes.CREATED).json(menu);
  } catch (error) {
    console.log("🚀 ~ createMenu ~ error:", error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function updateMenu(req, res) {
  const { warungId } = req.params;

  const { title, price, desc, available, category } = req.body;

  const b64 = Buffer.from(req.file.buffer).toString("base64");
  let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
  const cldRes = await handleUpload(dataURI);

  try {
    const dataUpdate = {
      title: title || undefined,
      price: Number(price) || undefined,
      desc: desc || undefined,
      available: Boolean(available) || undefined,
      category: category || undefined,
    };

    const menu = await prismaClient.menu.update({
      where: {
        id: +warungId,
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
  try {
    const menus = await prismaClient.menu.findMany({
      where: { userId: userId },
      include: {
        warung: true,
      },
    });

    return res.status(StatusCodes.OK).json(menus);
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
  const { warungId } = req.params;
  try {
    const menus = await prismaClient.menu.findMany({
      where: { warungId: +warungId },
      include: {
        warung: true,
      },
    });

    return res.status(StatusCodes.OK).json(menus);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function getAllMenuByWarungName(req, res) {
  const { warungName } = req.params;
  const { category } = req.query;

  try {
    const whereClause = { warung: { name: warungName } };

    if (category) {
      whereClause.category = category;
    }
    const menus = await prismaClient.menu.findMany({
      where: whereClause,
      select: {
        title: true,
        price: true,
        desc: true,
        available: true,
        image: true,
      },
    });

    if (menus.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Menus not found" });
    }

    return res.status(StatusCodes.OK).json(menus);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}
