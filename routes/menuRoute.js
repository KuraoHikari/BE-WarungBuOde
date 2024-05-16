import { Router } from "express";
import { validateData } from "../middleware/validationMiddleware.js";
import {
  authenticationMiddleware,
  authorizationWarungMiddleware,
} from "../middleware/authMiddleware.js";
import { createMenuSchema } from "../schemas/menuSchema.js";
import { createMenu } from "../controllers/menuController.js";

const menuRoute = Router();

menuRoute.use(authenticationMiddleware);
menuRoute.post(
  "/:warungId",
  authorizationWarungMiddleware,
  validateData(createMenuSchema),
  createMenu
);

export default menuRoute;
