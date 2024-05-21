import { Router } from "express";
import { getAllMenuByWarungName } from "../controllers/menuController.js";
import { validateData } from "../middleware/validationMiddleware.js";
import { createPublicBillSchema } from "../schemas/billSchema.js";
import { createPublicBill } from "../controllers/billController.js";
import { authorizationPublicBillMiddleware } from "../middleware/authMiddleware.js";
const publicRoute = Router();

publicRoute.get("/:warungName/menu", getAllMenuByWarungName);
publicRoute.post(
  "/:warungName/create-public-bill",
  authorizationPublicBillMiddleware,
  validateData(createPublicBillSchema),
  createPublicBill
);

export default publicRoute;
