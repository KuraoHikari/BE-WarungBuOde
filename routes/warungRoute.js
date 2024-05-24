import { Router } from "express";
import { validateData } from "../middleware/validationMiddleware.js";
import { authenticationMiddleware } from "../middleware/authMiddleware.js";
import { createWarungSchema, updateWarungSchema } from "../schemas/warungSchemas.js";
import { createWarung, editWarungById, getAllMyWarung, getOneWarungById } from "../controllers/warungController.js";

const warungRoute = Router();

warungRoute.use(authenticationMiddleware);
warungRoute.post("/", validateData(createWarungSchema), createWarung);
warungRoute.get("/", getAllMyWarung);
warungRoute.get("/:warungId", getOneWarungById);
warungRoute.patch("/:warungId", validateData(updateWarungSchema), editWarungById);

export default warungRoute;
