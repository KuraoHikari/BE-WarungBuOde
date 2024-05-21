import { Router } from "express";
import { validateData } from "../middleware/validationMiddleware.js";
import { createBillSchema, updateBillSchema } from "../schemas/billSchema.js";
import {
  createBill,
  getAllUserBill,
  getBillById,
  getBillByWarungId,
  updateBillById,
} from "../controllers/billController.js";
import {
  authenticationMiddleware,
  authorizationWarungMiddleware,
} from "../middleware/authMiddleware.js";

const billRoute = Router();

billRoute.use(authenticationMiddleware);
billRoute.get("/all", getAllUserBill);
billRoute.get("/:warungId", authorizationWarungMiddleware, getBillByWarungId);
billRoute.get(
  "/:warungId/detail/:billId",
  authorizationWarungMiddleware,
  getBillById
);

billRoute.post(
  "/:warungId",
  authorizationWarungMiddleware,
  validateData(createBillSchema),
  createBill
);
billRoute.patch(
  "/:warungId/edit/:billId",
  authorizationWarungMiddleware,
  validateData(updateBillSchema),
  updateBillById
);

export default billRoute;
