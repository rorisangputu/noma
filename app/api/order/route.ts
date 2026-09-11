import { NextResponse } from "next/server";

import { getProductBySlug } from "@/lib/products";
import { db } from "@/lib/db";

type OrderItemInput = {
  slug: string;
  quantity: number;
};

export async function POST(request: Request) {
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

  // find-or-create: don't duplicate a user record on repeat orders,
  // and never touch passwordHash here — that's only set at real signup
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
