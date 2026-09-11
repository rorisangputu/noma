import Link from "next/link";
import { FaTiktok, FaInstagram } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5efe6] px-6 pb-10 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-stone-900/8 bg-white/42 p-8 shadow-[0_20px_70px_rgba(45,38,25,0.08)] backdrop-blur-2xl sm:p-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div>
              <Link href="/" className="group inline-flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-stone-950 text-sm font-bold text-white transition group-hover:bg-amber-800">
                  N
                </span>
                <span className="text-2xl font-semibold tracking-tight text-stone-950">
                  NŌLU.
                </span>
              </Link>
              <p className="mt-4 max-w-[220px] text-sm leading-6 text-stone-600">
                Exceptional coffee, grown in Africa. Woman-led, African-founded.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                Explore
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-stone-700 transition hover:text-stone-950"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="text-stone-700 transition hover:text-stone-950"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-story"
                    className="text-stone-700 transition hover:text-stone-950"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-1 font-semibold text-amber-800 transition hover:text-amber-900"
                  >
                    Shop Uganda 001
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                Legal
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    href="/legal/terms-and-conditions"
                    className="text-stone-700 transition hover:text-stone-950"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/privacy-policy"
                    className="text-stone-700 transition hover:text-stone-950"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/cancellations-and-refunds"
                    className="text-stone-700 transition hover:text-stone-950"
                  >
                    Returns & Refunds
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                Contact
              </h3>
              <p className="mt-4 text-sm text-stone-700">
                Roasted in South Africa
              </p>
              <p className="mt-1 text-sm text-stone-700">hello@nolu.ie</p>

              <div className="mt-4 flex items-center gap-2">
                <a
                  href="https://www.instagram.com/nolu/"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-900/8 bg-white/45 text-stone-700 shadow-sm transition hover:bg-white/70 hover:text-stone-950"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-900/8 bg-white/45 text-stone-700 shadow-sm transition hover:bg-white/70 hover:text-stone-950"
                >
                  <FaTiktok className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-stone-900/8 pt-6 text-center text-xs text-stone-500">
            © {new Date().getFullYear()} NOLU. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
