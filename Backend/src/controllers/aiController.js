import { generateHealthResponse } from "../services/aiServices.js";
import { validateChatMessage } from "../utils/chatMessage.js";

export async function chatWithJaliMama(req, res) {
  const validation = validateChatMessage(req.body?.message);

  if (!validation.valid) {
    return res.status(400).json({
      success: false,
      message: validation.message,
      data: null,
    });
  }

  try {
    const reply = await generateHealthResponse(validation.message);

    return res.status(200).json({
      success: true,
      message: "Health information response generated.",
      data: { reply },
    });
  } catch (error) {
    console.error("Jali Mama AI provider request failed.", {
      errorType: error instanceof Error ? error.name : "UnknownError",
    });

    return res.status(503).json({
      success: false,
      message: "Jali Mama AI is temporarily unavailable. Please try again.",
      data: null,
    });
  }
}