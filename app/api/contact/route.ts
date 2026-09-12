import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const { success, resetAt } = await rateLimit(`contact:${ip}`, {
    limit: 3,
    windowSeconds: 60 * 60, // 3 messages per hour per IP
  });

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(
            Math.ceil((resetAt.getTime() - Date.now()) / 1000),
          ),
        },
      },
    );
  }

  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const enquiry = await db.enquiry.create({
    data: { name, email, message },
  });

  return NextResponse.json({ id: enquiry.id }, { status: 201 });
}
