const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
).replace(/\/+$/, "");

export async function postJson(path, payload) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    let result;
    try {
      result = await response.json();
    } catch (error) {
      throw new Error("The service returned an unreadable response.", {
        cause: error,
      });
    }

    if (!response.ok || result?.success !== true) {
      throw new Error(
        result?.message || "The service could not complete your request."
      );
    }

    return result.data;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("The request timed out. Please try again.", {
        cause: error,
      });
    }

    if (error instanceof TypeError) {
      throw new Error(
        "Unable to reach Jali Mama services. Check your connection and try again.",
        { cause: error }
      );
    }

    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}
