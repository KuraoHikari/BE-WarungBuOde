import { Router } from "express";
import authRoute from "./authRoute.js";
import warungRoute from "./warungRoute.js";
import menuRoute from "./menuRoute.js";

const router = Router();

router.use("/auth", authRoute);
router.use("/warung", warungRoute);
router.use("/menu", menuRoute);

export default router;
