"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

export default function OrderForm({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire this up to a real order/checkout endpoint
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-8 rounded-2xl border border-stone-950/10 bg-white/50 p-6">
        <p className="text-sm text-stone-700">
          Thanks — your order for {quantity}× {product.name} has been received.
          We&apos;ll be in touch to confirm and arrange delivery from Dublin.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
      <div>
        <label
          htmlFor="quantity"
          className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500"
        >
          Quantity
        </label>
        <div className="mt-2 inline-flex items-center rounded-full border border-stone-900/15 bg-white/50">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-11 w-11 items-center justify-center text-lg text-stone-700"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <input
            id="quantity"
            type="number"
            min={1}
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, Number(e.target.value) || 1))
            }
            className="w-14 bg-transparent text-center text-sm text-stone-950 outline-none"
          />
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-11 w-11 items-center justify-center text-lg text-stone-700"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
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
