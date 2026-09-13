import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="w-full bg-[#f5efe6] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/#campaigns"
          className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500 transition hover:text-stone-950"
        >
          ← Back to Campaigns
        </Link>

        <span className="mt-10 block text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
          {new Date(article.date).toLocaleDateString("en-IE", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>

        <h1 className="mt-4 text-4xl font-light leading-[1.05] tracking-tight text-stone-950 sm:text-5xl">
          {article.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-stone-600">{article.dek}</p>

        {article.coverImage && (
          <div className="relative mt-10 aspect-[4/4] w-full max-w-md overflow-hidden">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              sizes="(max-width: 767px) 100vw, 448px"
              className="object-cover"
            />
          </div>
        )}

        <div className="mt-12 flex flex-col gap-6">
          {article.body.map((block, i) =>
            block.type === "heading" ? (
              <h2
                key={i}
                className="mt-4 text-2xl font-light tracking-tight text-stone-950"
              >
                {block.text}
              </h2>
            ) : (
              <p key={i} className="text-base leading-7 text-stone-600">
                {block.text}
              </p>
            ),
          )}
        </div>

        {article.closingImage && (
          <div className="relative mx-auto mt-12 aspect-[2/3] w-full max-w-xs overflow-hidden">
            <Image
              src={article.closingImage}
              alt={`${article.title} — event photo`}
              fill
              sizes="(max-width: 500px) 65vw, 320px"
              className="object-cover"
            />
          </div>
        )}

        <div className="mt-14 border-t border-stone-950/10 pt-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            {article.featuredProduct.name}
          </p>
          <p className="mt-1 text-sm text-stone-600">
            {article.featuredProduct.origin}
          </p>
          <p className="mt-1 text-sm text-stone-600">
            {article.featuredProduct.notes}
          </p>
          <p className="mt-6 text-sm italic text-stone-500">
            Exceptional African coffee, by NŌLU.
          </p>
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}
