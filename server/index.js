import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/appRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();
const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: "Content-type",
  }),
);
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/playlist", router);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => console.log("server is running on port " + PORT));
  })
  .catch((e) => console.log(e));
