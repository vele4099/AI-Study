// ===============================================
// SERVER.JS — Main backend entry point
// ===============================================
import aiRoutes from "./routes/aiRoutes.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db.js"; // MongoDB connection

dotenv.config();

const app = express();

// ===============================================
// MIDDLEWARE
// ===============================================
app.use(cors());
app.use(express.json()); // allows JSON body parsing
app.use("/api/ai", aiRoutes); // POST /api/ai/parse

// ===============================================
// DATABASE CONNECTION
// ===============================================
connectDB(); // connects to MongoDB using MONGO_URI

// ===============================================
// TEST MODEL (temporary)
// ===============================================
// This is only for verifying MongoDB works.
// You will delete this once real models exist.
const TestSchema = new mongoose.Schema({
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const TestModel = mongoose.model("Test", TestSchema);

// ===============================================
// ROUTES
// ===============================================

// Root route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// MongoDB test route
app.get("/api/test", async (req, res) => {
  try {
    const doc = await TestModel.create({ message: "MongoDB is working!" });
    res.json({ success: true, doc });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ===============================================
// START SERVER
// ===============================================
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
// use this code to connect to MD
//mongoose.connect(process.env.Mongo_URI).then(() => console.log('MongoDb connected')).catch(err => console.(err))