import express from "express";
import { auth } from "../middlewares/auth.js";
import { login, signup } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

export default router;
