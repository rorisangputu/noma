"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "../public/nolu-hero.png";
import { articles } from "@/lib/articles";

type Slide = {
  image: StaticImageData;
  alt: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

const currentCampaign = articles[0];

const slides: Slide[] = [
  ...(currentCampaign
    ? [
        {
          image: currentCampaign.coverImage as StaticImageData,
          alt: currentCampaign.title,
          heading: currentCampaign.title,
          description: currentCampaign.dek,
          ctaLabel: "View Campaign",
          ctaHref: `/campaigns/${currentCampaign.slug}`,
        },
      ]
    : []),
  {
    image: heroImage,
    alt: "NŌLU coffee",
    heading: "Exceptional Coffee",
    description:
      "Single-origin beans, ground coffee, and tea sourced across Africa, a seasonally curated selection for filter and espresso.",
    ctaLabel: "Shop Coffee",
    ctaHref: "#shop",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  function goPrev() {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  }

  function goNext() {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  }

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
          src={slide.image}
          alt={slide.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom-right"
        />

        {/* dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />

        {/* overlaid content */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-14 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <h1 className="max-w-2xl text-5xl font-medium leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {slide.heading}
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
              {slide.description}
            </p>

            <div className="mt-8 flex items-center gap-8">
              <Link
                href={slide.ctaHref}
                className="inline-flex items-center rounded-full border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-stone-950"
              >
                {slide.ctaLabel}
              </Link>

              {slides.length > 1 && (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous slide"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <div className="flex items-center gap-1.5">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                          i === index ? "w-6 bg-white" : "w-1.5 bg-white/40"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next slide"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
