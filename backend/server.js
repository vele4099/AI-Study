import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables from backend/.env
dotenv.config();

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const connectDB = async () => {
  try {
    const connStr = process.env.DB_URI;
    if (!connStr) {
      throw new Error("DB_URI is not defined in your .env file.");
    }
    await mongoose.connect(connStr);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Database connection error:", err.message);
    process.exit(1);
  }
};

connectDB();

// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "online", timestamp: new Date().toISOString() });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});