import express from "express";
import { auth } from "../middlewares/auth.js";
import { createResume, editResume } from "../controllers/resumeController.js";

const router = express.Router();

router.post("/createResume", auth, createResume);
router.put("/editRedume/:id", auth, editResume);

export default router;
