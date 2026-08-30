import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

export default function Shop() {
  return (
    <section className="w-full bg-[#f5efe6] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-end justify-between border-b border-stone-950/10 pb-6">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
              Shop
            </span>
            <h2 className="mt-3 text-4xl font-light tracking-tight text-stone-950 sm:text-5xl">
              The Range
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.slug} className="flex flex-col">
              <div className="relative aspect-[4/5] w-full bg-stone-200/50">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-fill object-bottom"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.2em] text-stone-400">
                    Image coming soon
                  </div>
                )}
              </div>

              <h3 className="mt-6 text-lg font-medium text-stone-950">
                {product.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">
                {product.origin}
              </p>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {product.notes}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-stone-400">
                {product.format}
              </p>

              <Link
                href={`/order?product=${product.slug}`}
                className="group mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-950"
              >
                Order Now
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-950 transition group-hover:bg-stone-950 group-hover:text-white">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
