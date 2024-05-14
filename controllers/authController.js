import "dotenv/config";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

import prisma from "../utils/prisma.js";

export async function loginAuth(req, res, next) {
  try {
    const { email, password } = req.body;
    const findUser = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!findUser) {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "Invalid Credentials" });
    }

    const match = await bcrypt.compare(password, findUser.password);

    if (match) {
      //login
      var token = jwt.sign(
        { id: findUser.id, email: findUser.email },
        process.env.JWT_SECRET
      );

      return res.status(StatusCodes.OK).json({ token: token });
    } else {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}

export async function registerAuth(req, res) {
  try {
    const { email, password, username } = req.body;

    const findUser = await prisma.user.findFirst({
      where: { email: email },
    });

    if (findUser) {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "User Already Exit" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: { email: email, username: username, password: hashPassword },
    });

    return res.status(StatusCodes.CREATED).send({ message: "User Created" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
}
