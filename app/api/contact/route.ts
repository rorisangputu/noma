import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
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
