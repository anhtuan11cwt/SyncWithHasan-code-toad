import { Logger } from "@packages/logger";
import { Redis } from "ioredis";

const redisUrl = process.env.REDIS_URL || "redis://127.0.0.1:6379";

export const redisClient = new Redis(redisUrl, {
  lazyConnect: true,
  maxRetriesPerRequest: 3,
  retryStrategy(times: number) {
    return Math.min(times * 50, 2000);
  },
});

redisClient.on("connect", () => {
  Logger.success("Kết nối Redis thành công");
});

redisClient.on("error", (err: Error) => {
  Logger.error(`Lỗi Redis: ${err.message}`);
});

export const CACHE_TIME = {
  FIVE_MINUTES: 300,
  ONE_DAY: 86400,
  ONE_HOUR: 3600,
  ONE_MINUTE: 60,
} as const;

export function generateCacheKey(
  resource: string,
  identifier: string | number,
): string {
  return `code-toad:${resource}:${identifier}`;
}
