import express from "express";
import { parseText } from "../controllers/aiController.js";

const router = express.Router();

// POST /api/ai/parse
router.post("/parse", parseText);

export default router;
