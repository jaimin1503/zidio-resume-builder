import express from "express";
import { auth } from "../middlewares/auth.js";
import {
  addSection,
  createResume,
  editResume,
  getResume,
} from "../controllers/resumeController.js";

const router = express.Router();

router.post("/createResume", auth, createResume);
router.put("/editRedume/:id", auth, editResume);
router.get("/getResume/:id", getResume);
router.patch("/addSection/:id", addSection);

export default router;
