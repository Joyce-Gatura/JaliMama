import assert from "node:assert/strict";
import { once } from "node:events";
import test from "node:test";
import app from "../src/app.js";

test("API exposes a health response, validates AI input, and reports unknown routes", async (t) => {
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => {
    server.closeAllConnections();
    return new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  });

  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;

  const healthResponse = await fetch(baseUrl);
  assert.equal(healthResponse.status, 200);
  assert.deepEqual(await healthResponse.json(), {
    success: true,
    message: "Jali Mama API is running.",
    data: { status: "ok" },
  });

  const validationResponse = await fetch(`${baseUrl}/api/ai/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "   " }),
  });
  assert.equal(validationResponse.status, 400);
  assert.equal((await validationResponse.json()).success, false);

  const unknownRouteResponse = await fetch(`${baseUrl}/api/missing`);
  assert.equal(unknownRouteResponse.status, 404);
  assert.equal((await unknownRouteResponse.json()).success, false);
});

test("API returns a safe validation error for malformed JSON", async (t) => {
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => {
    server.closeAllConnections();
    return new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  });

  const address = server.address();
  const response = await fetch(
    `http://127.0.0.1:${address.port}/api/ai/chat`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{invalid",
    }
  );

  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), {
    success: false,
    message: "The request body must be valid JSON.",
    data: null,
  });
});

test("AI endpoint reports provider configuration failure without exposing details", async (t) => {
  const previousApiKey = process.env.GEMINI_API_KEY;
  const previousModel = process.env.GEMINI_MODEL;
  process.env.GEMINI_API_KEY = "";
  process.env.GEMINI_MODEL = "test-model";

  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => {
    server.closeAllConnections();
    return new Promise((resolve, reject) => {
      server.close((error) => {
        if (previousApiKey === undefined) {
          delete process.env.GEMINI_API_KEY;
        } else {
          process.env.GEMINI_API_KEY = previousApiKey;
        }

        if (previousModel === undefined) {
          delete process.env.GEMINI_MODEL;
        } else {
          process.env.GEMINI_MODEL = previousModel;
        }

        if (error) reject(error);
        else resolve();
      });
    });
  });

  const address = server.address();
  const response = await fetch(`http://127.0.0.1:${address.port}/api/ai/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "General question" }),
  });

  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), {
    success: false,
    message: "Jali Mama AI is temporarily unavailable. Please try again.",
    data: null,
  });
});
