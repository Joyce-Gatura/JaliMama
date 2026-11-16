import { postJson } from "./apiClient";

export async function sendHealthMessage(message) {
  const result = await postJson("/api/ai/chat", { message });

  if (typeof result?.reply !== "string" || !result.reply.trim()) {
    throw new Error("The assistant returned an empty response. Please try again.");
  }

  return result.reply.trim();
}
