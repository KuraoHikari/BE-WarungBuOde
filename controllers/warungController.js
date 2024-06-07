import { Prisma } from "../prisma/generated/client/index.js";
import { StatusCodes } from "http-status-codes";

import prismaClient from "../utils/prisma.js";
import { getAllMyWarungSchema } from "../schemas/warungSchemas.js";

export async function createWarung(req, res) {
  const { name, location } = req.body;
  const { id: userId } = req.user;

  try {
    const newWarung = await prismaClient.warung.create({
      data: {
        name: name,
        location: location,
        userId: userId,
      },
    });

    return res.status(StatusCodes.CREATED).json(newWarung);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res
          .status(StatusCodes.FORBIDDEN)
          .json({ message: "Warung Already Exit" });
      }
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function getAllMyWarung(req, res) {
  const { id: userId } = req.user;

  // Validasi input menggunakan Zod
  const validationResult = getAllMyWarungSchema.safeParse(req);
  if (!validationResult.success) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: validationResult.error.errors });
  }

  const { page = "1", limit = "10", search } = req.query;
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
        name: {
          contains: search,
          mode: "insensitive",
        },
      });
    }

    const allMyWarung = await prismaClient.warung.findMany({
      where: whereConditions,
      skip: skip,
      take: limitNum,
    });

    const totalWarungs = await prismaClient.warung.count({
      where: whereConditions,
    });

    return res.status(StatusCodes.OK).json({
      data: allMyWarung,
      total: totalWarungs,
      page: pageNum,
      totalPages: Math.ceil(totalWarungs / limitNum),
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function getOneWarungById(req, res) {
  const { warungId } = req.params;
  const { id: userId } = req.user;

  try {
    const warung = await prismaClient.warung.findUnique({
      where: {
        id: +warungId,
        userId: userId,
      },
    });
    if (!warung)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Warung not found" });

    return res.status(StatusCodes.OK).json(warung);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function editWarungById(req, res) {
  const { location } = req.body;
  const { warungId } = req.params;
  const { id: userId } = req.user;
  try {
    const warung = await prismaClient.warung.findUnique({
      where: {
        id: +warungId,
        userId: userId,
      },
    });
    if (!warung)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Warung not found" });

    const updatedWarung = await prismaClient.warung.update({
      where: {
        id: +warungId,
      },
      data: {
        location: location,
      },
    });
    return res.status(StatusCodes.OK).json(updatedWarung);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}
