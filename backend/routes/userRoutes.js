import express from "express";
import { auth } from "../middlewares/auth.js";
import { signup } from "../controllers/authController.js";

const router = express.Router();

router.post("/login");
router.post("/signup", signup);

export default router;
