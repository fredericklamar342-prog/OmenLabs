/**
 * Simple in-memory rate limiter for serverless environments.
 * Note: This persists as long as the runtime instance is warm.
 */
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

export function isRateLimited(ip: string, config: RateLimitConfig): boolean {
  const now = Date.now();
  const userData = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  // Reset window if expired
  if (now - userData.lastReset > config.windowMs) {
    userData.count = 0;
    userData.lastReset = now;
  }

  userData.count++;
  rateLimitMap.set(ip, userData);

  return userData.count > config.maxRequests;
}

export const DEFAULT_RATE_LIMIT: RateLimitConfig = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 5,
};
