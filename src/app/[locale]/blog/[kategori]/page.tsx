import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/blog/BlogCard";
import { getPostsByCategory } from "@/lib/blog";
import { categories, getCategoryLabel } from "@/lib/categories";
import type { Metadata } from "next";

export function generateStaticParams() {
  return categories.map((c) => ({ kategori: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; kategori: string }>;
}): Promise<Metadata> {
  const { locale, kategori } = await params;
  const label = getCategoryLabel(kategori, locale);
  return { title: label };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; kategori: string }>;
}) {
  const { locale, kategori } = await params;
  const t = await getTranslations("blog");

  if (!categories.find((c) => c.slug === kategori)) {
    notFound();
  }

  const posts = getPostsByCategory(locale, kategori);
  const label = getCategoryLabel(kategori, locale);

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading eyebrow={t("categoryTitle")} title={label} />

      {posts.length === 0 ? (
        <p className="mt-10 text-slate-500">{t("empty")}</p>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      )}
    </Container>
  );
}
