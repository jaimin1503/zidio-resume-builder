import express from "express";
import cookieParser from "cookie-parser";
import connect from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

connect();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/user", userRoutes);
app.use("/resume", resumeRoutes);

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
