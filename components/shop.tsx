import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function Shop() {
  return (
    <section
      id="shop"
      className="w-full bg-[#f5efe6] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-4xl font-light tracking-tight text-stone-950 sm:text-5xl">
          Our Latest Releases
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.slug} className="flex flex-col">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-900">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-stone-900" />
                )}
              </div>

              <Link
                href={`/order?product=${product.slug}`}
                className="mt-5 text-base font-medium text-stone-950 underline decoration-stone-950/30 underline-offset-4 transition hover:decoration-stone-950"
              >
                {product.sku} – {product.name}, {product.format}
              </Link>

              <p className="mt-1.5 text-base text-stone-950">{product.price}</p>

              <Link
                href={`/order?product=${product.slug}`}
                className="mt-4 flex w-full items-center justify-center rounded-full border border-stone-950 px-5 py-2.5 text-sm font-medium text-stone-950 transition hover:bg-stone-950 hover:text-white"
              >
                Order
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
