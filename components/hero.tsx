import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import heroImage from "../public/noma-hero.png";

export default function Hero() {
  return (
    <section className="w-full overflow-x-hidden bg-[#f5efe6]">
      <div className="mx-auto w-full max-w-7xl px-6 pt-8 lg:px-10 lg:pt-10">
        {/* top meta row */}
        <div className="flex flex-col gap-2 border-b border-stone-950/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
            Est. South Africa
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
            Rwanda 001 · Gitega Hills
          </span>
        </div>

        {/* main content */}
        <div className="grid grid-cols-1 items-center gap-10 py-10 md:py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
          <div>
            <h1 className="text-6xl font-light leading-[0.95] tracking-normal text-stone-950 sm:text-7xl lg:text-8xl xl:text-9xl">
              NŌLU
            </h1>
            <p className="mt-4 text-sm font-medium uppercase leading-6 tracking-[0.24em] text-stone-500">
              Exceptional coffee. Grown in Africa.
            </p>

            <p className="mt-7 max-w-md text-base leading-7 text-stone-600">
              Single-origin coffee sourced across the continent, roasted with
              care and shared with the world — starting with a washed lot grown
              on the slopes of Mount Elgon.
            </p>

            <a
              href="#shop"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950"
            >
              Shop Rwanda 001
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-950 transition group-hover:bg-stone-950 group-hover:text-white">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          <div className="relative mx-auto aspect-[3/2] w-full max-w-[36rem] overflow-hidden sm:max-w-[40rem] lg:max-w-none">
            <Image
              src={heroImage}
              alt="NOMA Uganda 001 coffee bag with scattered coffee beans"
              fill
              preload
              sizes="(max-width: 1023px) calc(100vw - 3rem), 50vw"
              className="object-contain"
            />
          </div>
        </div>

        {/* bottom detail strip */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-stone-950/10 py-6 text-xs uppercase leading-5 tracking-[0.2em] text-stone-500 sm:grid-cols-4">
          <div>
            <span className="block text-stone-950">Origin</span>
            Gitega Hills, Rwanda
          </div>
          <div>
            <span className="block text-stone-950">Process</span>
            Washed
          </div>
          <div className="hidden sm:block">
            <span className="block text-stone-950">Notes</span>
            Black tea, plum
          </div>
          <div>
            <span className="block text-stone-950">Roast</span>
            Medium
          </div>
        </div>
      </div>
    </section>
  );
}
