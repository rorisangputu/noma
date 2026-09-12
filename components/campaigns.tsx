import Image from "next/image";
import Link from "next/link";
import campaignImage from "../public/campaign-fashion-week.jpg";

export default function Campaigns() {
  return (
    <section
      id="campaigns"
      className="w-full bg-[#f5efe6] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
              Campaigns
            </span>

            <h2 className="mt-6 text-4xl font-light leading-[1.05] tracking-tight text-stone-950 sm:text-5xl">
              Dublin Fashion Week
            </h2>

            <p className="mt-6 max-w-sm text-base leading-7 text-stone-600">
              Our current campaign pairs single-origin coffee with the textures,
              tones, and pace of fashion week. A limited collaboration for as
              long as the season runs.
            </p>

            <Link
              href="/campaigns/dublin-fashion-week-debut"
              className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950"
            >
              View Campaign
              <span className="h-px w-8 bg-stone-950 transition group-hover:w-12" />
            </Link>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden">
              <Image
                src={campaignImage}
                alt="Fashion Week campaign"
                fill
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
