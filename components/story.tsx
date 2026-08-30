export default function OurStory() {
  return (
    <section
      id="our-story"
      className="w-full bg-[#3b2a1e] px-6 py-28 text-amber-50 lg:px-10 lg:py-40"
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
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-24">
            <p className="text-base leading-8 text-amber-50/80">
              NOMA began with the Putu family, bringing coffee home from small
              farming communities across Rwanda, Burundi, Kenya and Uganda to
              share with friends in Johannesburg.
            </p>

            <p className="mt-6 text-base leading-8 text-amber-50/80">
              Visits to family and friends across the continent turned into a
              search for the small farms and cooperatives producing exceptional
              coffee — and a mission to give that coffee a home in South Africa.
            </p>

            <p className="mt-6 text-base leading-8 text-amber-50/80">
              Today, NOMA continues this tradition as a woman-led company,
              working directly with growers across the region and roasting in
              small batches to bring out the character of each origin — from the
              bright, fruited lots of Kenya to the syrupy, tea-like cups of
              Rwanda&apos;s hills.
            </p>

            <p className="mt-6 text-base leading-8 text-amber-50/80">
              We believe African coffee deserves to be spoken of the way the
              world speaks of coffee from anywhere else — by name, by farm, by
              the hands that grew it. Every bag we roast is one more
              introduction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
