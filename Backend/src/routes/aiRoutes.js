import express from "express";
import { chatWithJaliMama } from "../controllers/aiController.js";

const router = express.Router();

router.post("/chat", chatWithJaliMama);

export default router;