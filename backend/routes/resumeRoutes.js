import express from "express";
import { auth } from "../middlewares/auth.js";
import {
  addSection,
  createResume,
  editResume,
  getResume,
  getResumes,
} from "../controllers/resumeController.js";

const router = express.Router();

router.post("/createResume", auth, createResume);
router.put("/editRedume/:id", auth, editResume);
router.get("/getResume/:id", auth, getResume);
router.patch("/addSection/:id", auth, addSection);
router.get("/getResumes", auth, getResumes);

export default router;
