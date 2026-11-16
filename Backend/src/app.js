import express from "express";
import cors from "cors";
import aiRoutes from "./routes/aiRoutes.js";

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
}));

app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Jali Mama API is running.",
    data: { status: "ok" },
  });
});

app.use("/api/ai", aiRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "The requested API endpoint was not found.",
    data: null,
  });
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  const status =
    error.type === "entity.too.large"
      ? 413
      : error.type === "entity.parse.failed"
        ? 400
        : 500;

  if (status === 500) {
    console.error("Unhandled API request error.", {
      method: req.method,
      path: req.path,
    });
  }

  return res.status(status).json({
    success: false,
    message:
      status === 413
        ? "The request is too large."
        : status === 400
          ? "The request body must be valid JSON."
          : "An unexpected server error occurred.",
    data: null,
  });
});

export default app;