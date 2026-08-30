import Link from "next/link";
import MobileMenu from "./mobileNav";

export default function AppNavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-900/5 bg-[#f5efe6]/72 text-stone-950 backdrop-blur-2xl">
      <div className="mx-auto w-full max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-stone-950 text-sm font-bold text-white transition group-hover:bg-amber-800">
              N
            </span>
            <span className="text-2xl font-semibold tracking-tight">NOMA.</span>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-stone-900/8 bg-white/42 p-1 shadow-sm backdrop-blur-xl lg:flex">
            <Link
              href="/"
              className="rounded-full px-4 py-2 text-sm font-medium text-stone-600 transition hover:bg-white/70 hover:text-stone-950"
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="rounded-full px-4 py-2 text-sm font-medium text-stone-600 transition hover:bg-white/70 hover:text-stone-950"
            >
              Shop
            </Link>

            <Link
              href="/our-story"
              className="rounded-full px-4 py-2 text-sm font-medium text-stone-600 transition hover:bg-white/70 hover:text-stone-950"
            >
              Our Story
            </Link>

            <Link
              href="/contact"
              className="rounded-full px-4 py-2 text-sm font-medium text-stone-600 transition hover:bg-white/70 hover:text-stone-950"
            >
              Contact
            </Link>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/shop"
              className="rounded-full bg-stone-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-800"
            >
              Shop Now
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
