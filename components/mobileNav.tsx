"use client";

import { useState } from "react";
import Link from "next/link";
import { AlignJustify, X, Search, User, ShoppingBag } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#shop", label: "Shop" },
  // { href: "/shop/ground", label: "Ground" },
  // { href: "/shop/tea", label: "Tea" },
  { href: "#our-story", label: "Our Story" },
  { href: "#contact", label: "Contact" },
];

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
      <div className="flex items-center gap-1 lg:hidden">
        {/* <Link
          href="/cart"
          aria-label="Cart"
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-stone-700"
        >
          <ShoppingBag className="h-5 w-5" strokeWidth={1.75} />
        </Link> */}

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-stone-900/10 bg-white/45 text-stone-950 shadow-sm backdrop-blur-xl transition hover:bg-white/70"
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <AlignJustify className="h-5 w-5" />
          )}
        </button>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-stone-950/30 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-label="Close menu overlay"
        />
      )}

      {menuOpen && (
        <div className="fixed inset-x-4 top-4 z-50 overflow-hidden rounded-3xl border border-white/70 bg-[#f5efe6] p-5 shadow-2xl shadow-stone-950/15 backdrop-blur-2xl lg:hidden">
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
                NŌLU.
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

          <div className="grid gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-base font-medium text-stone-800 transition hover:bg-white/55"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* <div className="mt-4 flex items-center gap-2 border-t border-stone-900/10 pt-4">
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white/55 px-4 py-3 text-sm font-medium text-stone-800"
            >
              <Search className="h-4 w-4" strokeWidth={1.75} />
              Search
            </button>
            <Link
              href="/account"
              onClick={closeMenu}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white/55 px-4 py-3 text-sm font-medium text-stone-800"
            >
              <User className="h-4 w-4" strokeWidth={1.75} />
              Account
            </Link>
          </div> */}

          <div className="mt-3">
            <Link
              href="#shop"
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
