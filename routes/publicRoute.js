import { Router } from "express";
import { getAllMenuByWarungName } from "../controllers/menuController.js";
const publicRoute = Router();

publicRoute.get("/:warungName/menu", getAllMenuByWarungName);

export default publicRoute;
