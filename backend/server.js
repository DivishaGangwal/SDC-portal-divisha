import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { GridFSBucket } from "mongodb";

import authRoutes from "./routes/authRoutes.js";
import ug1FormRoutes from "./routes/ug1FormRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import UGForm2Routes from "./routes/UGForm2Route.js";

dotenv.config();

const app = express();

// 🔹 CORS Setup
app.use(cors({ 
  origin: process.env.FRONTEND_URL, 
  methods: ["GET", "POST", "DELETE"], 
  credentials: true 
}));

// 🔹 Middleware
app.use(express.json());
app.use(cookieParser());

// 🔹 Serve uploaded files
app.use("/uploads", express.static("uploads"));

// 🔹 MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Users",
})
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

const conn = mongoose.connection;

// 🔹 GridFS Setup
let gfs;
conn.once("open", () => {
  gfs = new GridFSBucket(conn.db, { bucketName: "uploads" });
  console.log("✅ GridFS connected successfully");
});

// 🔹 Routes
app.use("/api/auth", authRoutes);
app.use("/api/ug1form", ug1FormRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/ugform2", UGForm2Routes); // Ensure it matches frontend calls

// 🔹 Global Error Handling
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// 🔹 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
