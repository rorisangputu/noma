import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/nolu-hero.png";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* announcement bar */}
      {/* <div className="flex items-center justify-center gap-2 bg-[#f5efe6] py-3 text-sm font-medium text-stone-800">
        Shipping all over Ireland
        <span aria-hidden>→</span>
      </div> */}

      {/* full-bleed image */}
      <div className="relative h-[80vh] min-h-[560px] w-full sm:h-[85vh]">
        <Image
          src={heroImage}
          alt="NŌLU coffee, Rwanda 001"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />

        {/* dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />

        {/* overlaid content */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-14 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <h1 className="max-w-2xl text-5xl font-medium leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Exceptional Coffee
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
              Single-origin beans, ground coffee, and tea sourced across Africa
              — a seasonally curated selection for filter and espresso.
            </p>

            <Link
              href="/shop/beans"
              className="mt-8 inline-flex items-center rounded-full border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-stone-950"
            >
              Shop Coffee
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
