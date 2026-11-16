import assert from "node:assert/strict";
import test from "node:test";
import { validateChatMessage } from "../src/utils/chatMessage.js";

test("chat message validation trims usable text", () => {
  assert.deepEqual(validateChatMessage("  Hello  "), {
    valid: true,
    message: "Hello",
  });
});

test("chat message validation rejects missing, blank, and oversized input", () => {
  assert.equal(validateChatMessage(undefined).valid, false);
  assert.equal(validateChatMessage("  ").valid, false);
  assert.equal(validateChatMessage("x".repeat(2001)).valid, false);
  assert.equal(validateChatMessage("x".repeat(2000)).valid, true);
});
