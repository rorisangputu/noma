import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import heroImage from "../public/noma-hero.png";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5efe6]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:gap-8 lg:py-36">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-6xl font-light tracking-[0.3em] text-stone-950 sm:text-7xl">
            NOMA
          </h1>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.28em] text-stone-500">
            Exceptional coffee.
            <br />
            Grown in Africa.
          </p>

          <div className="mt-7 h-px w-12 bg-amber-700" />

          <p className="mt-8 max-w-sm text-base leading-7 text-stone-600">
            Single-origin coffee sourced across the continent, roasted with care
            and shared with the world — starting with Uganda 001, grown on the
            slopes of Mount Elgon.
          </p>

          <Link
            href="/shop"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950 transition hover:text-amber-800"
          >
            Shop Uganda 001
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="absolute -right-6 top-8 h-72 w-72 rounded-full bg-stone-300/40" />
          <Image
            src={heroImage}
            alt="NOMA Uganda 001 coffee bag with scattered coffee beans"
            fill
            priority
            className="relative z-10 object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
