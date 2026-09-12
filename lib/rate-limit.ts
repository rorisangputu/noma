import { db } from "@/lib/db";

type RateLimitResult = {
  success: boolean;
  remaining: number;
  resetAt: Date;
};

type RateLimitOptions = {
  limit: number;
  windowSeconds: number;
};

export async function rateLimit(
  key: string,
  { limit, windowSeconds }: RateLimitOptions,
): Promise<RateLimitResult> {
  const now = new Date();

  try {
    const existing = await db.rateLimitCounter.findUnique({ where: { key } });

    if (!existing || existing.expiresAt < now) {
      const resetAt = new Date(now.getTime() + windowSeconds * 1000);
      await db.rateLimitCounter.upsert({
        where: { key },
        create: { key, count: 1, expiresAt: resetAt },
        update: { count: 1, expiresAt: resetAt },
      });
      return { success: true, remaining: limit - 1, resetAt };
    }

    if (existing.count >= limit) {
      return { success: false, remaining: 0, resetAt: existing.expiresAt };
    }

    const updated = await db.rateLimitCounter.update({
      where: { key },
      data: { count: { increment: 1 } },
    });

    return {
      success: true,
      remaining: limit - updated.count,
      resetAt: updated.expiresAt,
    };
  } catch {
    // fail-open, same pattern as WagGo — a rate-limiter outage should
    // never take down order/contact submission
    return { success: true, remaining: limit, resetAt: now };
  }
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}
