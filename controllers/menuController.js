import { StatusCodes } from "http-status-codes";

import prismaClient from "../utils/prisma.js";

export async function createMenu(req, res) {
  const { warungId } = req.params;

  const { title, price, desc, available } = req.body;

  try {
    const menu = await prismaClient.menu.create({
      data: {
        title,
        price: Number(price),
        desc,
        available: Boolean(available),
        image: "https://via.placeholder.com/150",
        warungId: +warungId,
      },
    });

    return res.status(StatusCodes.CREATED).json(menu);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}
