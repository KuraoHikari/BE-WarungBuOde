import { Router } from "express";
import authRoute from "./authRoute.js";
import warungRoute from "./warungRoute.js";
import menuRoute from "./menuRoute.js";
import publicRoute from "./publicRoute.js";
import billRoute from "./billRoute.js";

const router = Router();

router.use("/auth", authRoute);
router.use("/warung", warungRoute);
router.use("/menu", menuRoute);
router.use("/public", publicRoute);
router.use("/bill", billRoute);

export default router;
