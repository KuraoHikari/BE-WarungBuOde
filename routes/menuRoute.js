import { Router } from "express";
import { validateData } from "../middleware/validationMiddleware.js";
import {
  authenticationMiddleware,
  authorizationWarungMiddleware,
} from "../middleware/authMiddleware.js";
import { createMenuSchema, updateMenuSchema } from "../schemas/menuSchema.js";
import {
  createMenu,
  getAllMenu,
  getOneMenuById,
  getWarungMenu,
  updateMenu,
} from "../controllers/menuController.js";
import upload from "../middleware/multerModdleware.js";
import imgValidate from "../middleware/imageValidationMiddleware.js";

const menuRoute = Router();

menuRoute.use(authenticationMiddleware);

menuRoute.get("/", getAllMenu);
menuRoute.get("/:warungId", getWarungMenu);
menuRoute.get("/:warungId/:menuId", getOneMenuById);

menuRoute.post(
  "/:warungId",
  upload.single("image"),
  imgValidate,
  authorizationWarungMiddleware,
  validateData(createMenuSchema),
  createMenu
);

menuRoute.patch(
  "/:warungId/:menuId",
  authorizationWarungMiddleware,
  validateData(updateMenuSchema),
  updateMenu
);

export default menuRoute;
