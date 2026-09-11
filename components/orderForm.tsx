"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

type LineItem = { slug: string; quantity: number };

export default function OrderForm({
  product,
  allProducts,
}: {
  product: Product;
  allProducts: Product[];
}) {
  const [items, setItems] = useState<LineItem[]>([
    { slug: product.slug, quantity: 1 },
  ]);
  const [addingSlug, setAddingSlug] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const availableToAdd = allProducts.filter(
    (p) => !items.some((item) => item.slug === p.slug),
  );

  function updateQuantity(slug: string, delta: number) {
    setItems((prev) =>
      prev.map((item) =>
        item.slug === slug
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  }

  function removeItem(slug: string) {
    setItems((prev) => prev.filter((item) => item.slug !== slug));
  }

  function addItem() {
    if (!addingSlug) return;
    setItems((prev) => [...prev, { slug: addingSlug, quantity: 1 }]);
    setAddingSlug("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire this up to a real order endpoint — items is the full list to send
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-8 rounded-2xl border border-stone-950/10 bg-white/50 p-6">
        <p className="text-sm text-stone-700">
          Thanks — your order has been received. We&apos;ll be in touch to
          confirm and arrange delivery from Dublin.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
      <div>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
          Items
        </span>

        <div className="mt-3 flex flex-col gap-3">
          {items.map((item) => {
            const itemProduct = allProducts.find((p) => p.slug === item.slug);
            if (!itemProduct) return null;

            return (
              <div
                key={item.slug}
                className="flex items-center gap-3 rounded-2xl border border-stone-900/15 bg-white/50 p-3"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-stone-950">
                    {itemProduct.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-500">
                    {itemProduct.format}
                  </p>
                </div>

                <div className="inline-flex items-center rounded-full border border-stone-900/15">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.slug, -1)}
                    className="flex h-9 w-9 items-center justify-center text-stone-700"
                    aria-label={`Decrease ${itemProduct.name} quantity`}
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm text-stone-950">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.slug, 1)}
                    className="flex h-9 w-9 items-center justify-center text-stone-700"
                    aria-label={`Increase ${itemProduct.name} quantity`}
                  >
                    +
                  </button>
                </div>

                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeItem(item.slug)}
                    className="text-xs uppercase tracking-[0.14em] text-stone-400 transition hover:text-stone-950"
                    aria-label={`Remove ${itemProduct.name}`}
                  >
                    Remove
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {availableToAdd.length > 0 && (
          <div className="mt-3 flex items-center gap-2">
            <select
              value={addingSlug}
              onChange={(e) => setAddingSlug(e.target.value)}
              className="flex-1 rounded-xl border border-stone-900/15 bg-white/50 px-4 py-2.5 text-sm text-stone-950 outline-none focus:border-stone-950"
            >
              <option value="">Add another product…</option>
              {availableToAdd.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={addItem}
              disabled={!addingSlug}
              className="rounded-xl border border-stone-950 px-4 py-2.5 text-sm font-medium text-stone-950 transition hover:bg-stone-950 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-stone-950"
            >
              Add
            </button>
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="name"
          className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="mt-2 w-full rounded-xl border border-stone-900/15 bg-white/50 px-4 py-3 text-sm text-stone-950 outline-none focus:border-stone-950"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="mt-2 w-full rounded-xl border border-stone-900/15 bg-white/50 px-4 py-3 text-sm text-stone-950 outline-none focus:border-stone-950"
        />
      </div>

      <div>
        <label
          htmlFor="address"
          className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500"
        >
          Delivery Address
        </label>
        <textarea
          id="address"
          required
          rows={3}
          className="mt-2 w-full resize-none rounded-xl border border-stone-900/15 bg-white/50 px-4 py-3 text-sm text-stone-950 outline-none focus:border-stone-950"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-stone-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-800"
      >
        Place Order
      </button>
    </form>
  );
}
