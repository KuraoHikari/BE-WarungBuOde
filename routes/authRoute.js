import { Router } from "express";
import { validateData } from "../middleware/validationMiddleware.js";
import { loginSchema, registrationSchema } from "../schemas/authSchema.js";
import { loginAuth, registerAuth } from "../controllers/authController.js";

const authRoute = Router();

authRoute.post("/register", validateData(registrationSchema), registerAuth);
authRoute.post("/login", validateData(loginSchema), loginAuth);

export default authRoute;
