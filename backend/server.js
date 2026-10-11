import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";   // FIXED: default import
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Simple test model
const TestSchema = new mongoose.Schema({
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const TestModel = mongoose.model("Test", TestSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/test", async (req, res) => {
  try {
    const doc = await TestModel.create({ message: "MongoDB is working!" });
    res.json({ success: true, doc });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
// ===============================
// 1. Imports & Config
// ===============================

// express setup
// dotenv config
// connectDB()

// ===============================
// 2. Middleware
// ===============================

// JSON parser
// CORS
// Auth middleware (later)

// ===============================
// 3. Routes
// ===============================

// /auth
// /subjects
// /notes
// /decks
// /cards
// /study
// /analytics

// ===============================
// 4. Server Start
// ===============================
