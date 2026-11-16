import { GoogleGenAI } from "@google/genai";

let gemini;

export function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  if (!gemini) {
    gemini = new GoogleGenAI({ apiKey });
  }

  return gemini;
}