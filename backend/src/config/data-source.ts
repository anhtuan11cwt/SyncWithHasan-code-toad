import "reflect-metadata";
import { Logger } from "@packages/logger";
import { DataSource } from "typeorm";

const isDev = process.env.NODE_ENV === "development";
const neonUrl = process.env.NEON_DB_CONNECTION_STRING;

export const AppDataSource = neonUrl
  ? new DataSource({
      entities: [isDev ? "src/entities/**/*.ts" : "dist/entities/**/*.js"],
      logging: isDev,
      ssl: { rejectUnauthorized: false },
      synchronize: isDev,
      type: "postgres",
      url: neonUrl,
    })
  : new DataSource({
      database: process.env.DB_NAME || "code_toad",
      entities: [isDev ? "src/entities/**/*.ts" : "dist/entities/**/*.js"],
      host: process.env.DB_HOST || "localhost",
      logging: isDev,
      password: process.env.DB_PASSWORD || "postgres",
      port: Number.parseInt(process.env.DB_PORT || "5432", 10),
      synchronize: isDev,
      type: "postgres",
      username: process.env.DB_USERNAME || "postgres",
    });

export async function connectDatabase(): Promise<void> {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      Logger.success(
        `Kết nối Database thành công qua ${neonUrl ? "NeonDB Cloud" : "PostgreSQL cục bộ"}`,
      );
    }
  } catch (error) {
    Logger.error("Kết nối Database thất bại");
    Logger.error(error instanceof Error ? error.message : String(error));
    throw error;
  }
}
