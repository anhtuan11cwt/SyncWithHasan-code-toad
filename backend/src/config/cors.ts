import type { CorsOptions } from "cors";

const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:5173";

export const corsOptions: CorsOptions = {
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  optionsSuccessStatus: 200,
  origin: (origin, callback) => {
    if (!origin || origin === allowedOrigin) {
      callback(null, true);
    } else {
      callback(new Error("Không được phép bởi chính sách CORS"));
    }
  },
};
