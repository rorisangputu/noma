import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import OrderForm from "@/components/orderForm";

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product: slug } = await searchParams;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="w-full bg-[#f5efe6] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/#shop"
          className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500 transition hover:text-stone-950"
        >
          ← Back to Shop
        </Link>

        <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/5] w-full bg-stone-200/50">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain object-bottom"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.2em] text-stone-400">
                Image coming soon
              </div>
            )}
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
              {product.origin}
            </span>
            <h1 className="mt-3 text-4xl font-light tracking-tight text-stone-950 sm:text-5xl">
              {product.name}
            </h1>

            {product.price && (
              <p className="mt-4 text-lg text-stone-700">{product.price}</p>
            )}

            <p className="mt-6 text-base leading-7 text-stone-600">
              {product.description}
            </p>

            <div className="mt-6 flex flex-col gap-1 border-t border-stone-950/10 pt-6 text-xs uppercase tracking-[0.18em] text-stone-500">
              <span>{product.format}</span>
              <span>Tasting notes: {product.notes}</span>
            </div>

            <OrderForm product={product} />

            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-stone-400">
              Roasted and fulfilled in Dublin, Ireland
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({ product: product.slug }));
}
