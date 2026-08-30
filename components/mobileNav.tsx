"use client";

import { useState } from "react";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((open) => !open);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-stone-900/10 bg-white/45 text-stone-950 shadow-sm backdrop-blur-xl transition hover:bg-white/70 lg:hidden"
        aria-label="Open menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <AlignJustify className="h-5 w-5" />
        )}
      </button>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-stone-950/30 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-label="Close menu overlay"
        />
      )}

      {menuOpen && (
        <div className="fixed inset-x-4 top-4 z-50 overflow-hidden rounded-3xl border border-white/70 bg-[#f5efe6]/100 p-5 shadow-2xl shadow-stone-950/15 backdrop-blur-2xl lg:hidden">
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/"
              onClick={closeMenu}
              className="inline-flex items-center gap-2"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-stone-950 text-sm font-bold text-white">
                N
              </span>
              <span className="text-2xl font-semibold tracking-tight text-stone-950">
                NOMA.
              </span>
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/50 text-stone-950"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid gap-2">
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-medium text-stone-800 transition hover:bg-white/55"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-medium text-stone-800 transition hover:bg-white/55"
            >
              Shop
            </Link>

            <Link
              href="/our-story"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-medium text-stone-800 transition hover:bg-white/55"
            >
              Our Story
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-medium text-stone-800 transition hover:bg-white/55"
            >
              Contact
            </Link>
          </div>

          <div className="mt-5 border-t border-stone-900/10 pt-5">
            <Link
              href="/shop"
              onClick={closeMenu}
              className="block rounded-2xl bg-stone-950 px-4 py-3 text-center text-base font-semibold text-white transition hover:bg-amber-800"
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
