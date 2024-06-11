import express from "express";
import { auth } from "../middlewares/auth.js";
import { createResume } from "../controllers/resumeController.js";

const router = express.Router();

router.post("/createResume", auth, createResume);

export default router;
