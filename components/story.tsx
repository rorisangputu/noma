export default function OurStory() {
  return (
    <section
      id="our-story"
      className="w-full bg-[#3b2a1e] px-6 py-28 text-amber-50 lg:px-10 lg:py-36"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">
          {/* left: label + oversized pull line */}
          <div className="lg:col-span-5">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-amber-300">
              Our Story
            </span>

            <p className="mt-8 text-4xl font-light leading-[1.15] tracking-tight text-amber-50 sm:text-5xl">
              What started as suitcases of green beans became a quiet obsession.
            </p>

            <div className="mt-10 h-px w-12 bg-amber-300/60" />

            <p className="mt-10 text-sm font-medium uppercase tracking-[0.28em] text-amber-300">
              Woman-led
              <br />
              African-founded
            </p>
          </div>

          {/* right: narrative body, offset down on desktop */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-0">
            <p className="text-base leading-8 text-amber-50/80">
              NŌLU started with the Putu family carrying coffee home from small
              farms and cooperatives across Rwanda, Burundi, Kenya and Uganda,
              to share with friends in Johannesburg.
            </p>

            <p className="mt-6 text-base leading-8 text-amber-50/80">
              What began as visits to friends across the continent became
              something more deliberate: a search for the growers producing
              coffee worth traveling for, and a commitment to bring it home
              properly.
            </p>

            <p className="mt-6 text-base leading-8 text-amber-50/80">
              Today NŌLU is woman-led, working directly with those same growers
              and roasting in small batches. Bright, fruited lots from Kenya.
              Syrupy, tea-like cups from Rwanda&apos;s hills. Each origin
              roasted to show what it actually is.
            </p>

            <p className="mt-6 text-base leading-8 text-amber-50/80">
              African coffee deserves to be named the way coffee from anywhere
              else is named: by farm, by region, by the hands that grew it.
              Every bag is an introduction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
