import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getProductBySlug } from "@/lib/products";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

type OrderItemInput = {
  slug: string;
  quantity: number;
};

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const { success, resetAt } = await rateLimit(`order:${ip}`, {
    limit: 5,
    windowSeconds: 60 * 60, // 5 orders per hour per IP
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

  const body = await request.json();
  const { name, email, address, notes, items } = body as {
    name: string;
    email: string;
    address: string;
    notes?: string;
    items: OrderItemInput[];
  };

  if (!name || !email || !address || !items?.length) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const resolvedItems = items
    .map((item) => {
      const product = getProductBySlug(item.slug);
      if (!product) return null;
      return {
        productSlug: product.slug,
        productName: product.name,
        quantity: Math.max(1, item.quantity),
        priceSnapshot: product.price ?? null,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  if (!resolvedItems.length) {
    return NextResponse.json({ error: "No valid items" }, { status: 400 });
  }

  const user = await db.user.upsert({
    where: { email },
    update: { name },
    create: { email, name },
  });

  const order = await db.order.create({
    data: {
      userId: user.id,
      name,
      email,
      address,
      notes,
      items: { create: resolvedItems },
    },
  });

  return NextResponse.json({ id: order.id }, { status: 201 });
}
