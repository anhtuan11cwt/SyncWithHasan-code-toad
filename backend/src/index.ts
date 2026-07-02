import express, {
  type Application,
  type Request,
  type Response,
} from "express";

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
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.app.get("/", (_req: Request, res: Response) => {
      res.status(200).json({
        message: "REST xin chào thế giới",
        success: true,
        timestamp: new Date().toISOString(),
      });
    });
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server đang chạy tại http://localhost:${this.port}`);
      console.log(`Môi trường: ${process.env.NODE_ENV || "development"}`);
    });
  }
}

const server = new Server();
server.start();
