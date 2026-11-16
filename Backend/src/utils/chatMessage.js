const MAX_MESSAGE_LENGTH = 2000;

export function validateChatMessage(value) {
  if (typeof value !== "string") {
    return { valid: false, message: "Please enter a message." };
  }

  const message = value.trim();

  if (!message) {
    return { valid: false, message: "Please enter a message." };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return {
      valid: false,
      message: `Your message must not exceed ${MAX_MESSAGE_LENGTH} characters.`,
    };
  }

  return { valid: true, message };
}
