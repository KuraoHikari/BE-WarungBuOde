import jwt from "jsonwebtoken";
import "dotenv/config";
import { StatusCodes } from "http-status-codes";
import prismaClient from "../utils/prisma.js";

export async function authenticationMiddleware(req, res, next) {
  try {
    const token = req.headers.token;

    if (!token) {
      throw new Error("Unauthicated");
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      throw new Error("Unauthicated");
    } else {
      const { id } = verifyToken;

      const findUser = await prismaClient.user.findUnique({
        where: { id: id },
      });

      if (!findUser) {
        throw new Error("Unauthicated");
      }

      req.user = verifyToken;
      req.user.role = findUser.role;

      next();
    }
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Unauthicated" });
  }
}

export async function authorizationAdminMiddleware(req, res, next) {
  try {
    const { role } = req.user;

    if (role !== "ADMIN") {
      throw new Error("Unauthorized");
    }

    next();
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Unauthorized" });
  }
}

export async function authorizationWarungMiddleware(req, res, next) {
  const { warungId } = req.params;
  const { id: userId } = req.user;
  try {
    const warung = await prismaClient.warung.findUnique({
      where: {
        id: +warungId,
        userId: userId,
      },
    });

    if (!warung) throw new Error("Unauthorized");

    next();
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Unauthorized" });
  }
}

export async function authorizationPublicBillMiddleware(req, res, next) {
  const { warungName } = req.params;

  try {
    if (!warungName) {
      throw new Error("Unauthorized");
    }

    const findWarung = await prismaClient.warung.findUnique({
      where: { name: warungName },
    });

    if (!findWarung) {
      throw new Error("Unauthorized");
    }

    req.warung = findWarung;

    next();
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Unauthorized" });
  }
}
