import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import heroImage from "../public/noma-hero.png";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5efe6]">
      <div className="mx-auto w-full max-w-7xl px-6 pt-10 lg:px-10">
        {/* top meta row */}
        <div className="flex items-center justify-between border-b border-stone-950/10 pb-6">
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
            Est. South Africa
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
            Uganda 001 · Mount Elgon
          </span>
        </div>

        {/* main content */}
        <div className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-12 lg:gap-6 lg:py-20">
          <div className="lg:col-span-7">
            <h1 className="text-6xl font-light leading-[0.95] tracking-tight text-stone-950 sm:text-7xl lg:text-8xl">
              NOMA
            </h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
              Exceptional coffee. Grown in Africa.
            </p>

            <p className="mt-8 max-w-md text-base leading-7 text-stone-600">
              Single-origin coffee sourced across the continent, roasted with
              care and shared with the world — starting with a washed lot grown
              on the slopes of Mount Elgon.
            </p>

            <Link
              href="/shop"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950"
            >
              Shop Uganda 001
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-950 transition group-hover:bg-stone-950 group-hover:text-white">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs lg:col-span-5">
            <Image
              src={heroImage}
              alt="NOMA Uganda 001 coffee bag with scattered coffee beans"
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(28,20,10,0.15)]"
            />
          </div>
        </div>

        {/* bottom detail strip */}
        <div className="grid grid-cols-2 gap-6 border-t border-stone-950/10 py-6 text-xs uppercase tracking-[0.2em] text-stone-500 sm:grid-cols-4">
          <div>
            <span className="block text-stone-950">Origin</span>
            Mount Elgon, Uganda
          </div>
          <div>
            <span className="block text-stone-950">Process</span>
            Washed
          </div>
          <div className="hidden sm:block">
            <span className="block text-stone-950">Notes</span>
            Dark chocolate, caramel
          </div>
          <div className="hidden sm:block">
            <span className="block text-stone-950">Roast</span>
            Medium
          </div>
        </div>
      </div>
    </section>
  );
}
