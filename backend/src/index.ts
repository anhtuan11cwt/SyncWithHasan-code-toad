import "reflect-metadata";
import { Logger } from "@packages/logger";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import morgan from "morgan";
import { corsOptions } from "./config/cors.js";
import { connectDatabase } from "./config/data-source.js";
import { redisClient } from "./config/redis-client.js";

class Server {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = Number.parseInt(process.env.SERVER_PORT || "5000", 10);

    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(morgan("tiny"));
    this.app.use(cors(corsOptions));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    Logger.info("Middleware đã được cấu hình");
  }

  private routes(): void {
    this.app.get("/", (_req: Request, res: Response) => {
      Logger.debug("Yêu cầu đến route gốc");
      res.status(200).json({
        message: "REST xin chào thế giới",
        success: true,
        timestamp: new Date().toISOString(),
      });
    });
  }

  public start(): void {
    this.app.listen(this.port, () => {
      Logger.success(`Server đang chạy tại http://localhost:${this.port}`);
      Logger.info(`Môi trường: ${process.env.NODE_ENV || "development"}`);
    });
  }
}

async function bootstrap(): Promise<void> {
  try {
    await connectDatabase();
    await redisClient.connect().catch(() => {
      Logger.warning("Redis không khả dụng, tiếp tục không có cache");
    });

    const server = new Server();
    server.start();
  } catch (error) {
    Logger.error("Khởi động server thất bại");
    Logger.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

bootstrap();
