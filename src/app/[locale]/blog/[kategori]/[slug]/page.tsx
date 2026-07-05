import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { getCategoryLabel } from "@/lib/categories";
import { siteConfig } from "@/content/site";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  const locales = ["tr", "en"];
  return locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => ({
      locale,
      kategori: post.category,
      slug: post.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; kategori: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);
  if (!post) return {};

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    alternates: { canonical: `/blog/${post.category}/${post.slug}` },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; kategori: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const tCommon = await getTranslations("common");
  const post = getPostBySlug(locale, slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    url: `${siteConfig.url}/blog/${post.category}/${post.slug}`,
  };

  return (
    <Container className="py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-navy-900"
      >
        <ArrowLeft size={16} /> {tCommon("backToBlog")}
      </Link>

      <article className="mx-auto mt-8 max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent-500">
          {getCategoryLabel(post.category, locale)}
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(
              locale === "en" ? "en-US" : "tr-TR",
              { year: "numeric", month: "long", day: "numeric" }
            )}
          </time>
          <span>·</span>
          <span>{post.readingTimeText}</span>
        </div>

        <div className="prose-content mt-10">
          <MDXRemote source={post.content} />
        </div>

        {post.tags?.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-navy-900/10 pt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-navy-950/5 px-3 py-1 text-xs font-medium text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Container>
  );
}
