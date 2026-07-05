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
import { AdBanner } from "@/components/ads/AdBanner";
import { InlineAd } from "@/components/ads/InlineAd";
import { SidebarAd } from "@/components/ads/SidebarAd";
import { NewsletterCard } from "@/components/newsletter/NewsletterCard";
import { ShareButtons } from "@/components/share/ShareButtons";
import { splitContentInHalf } from "@/lib/split-content";
import { TrackView } from "@/components/analytics/TrackView";
import { breadcrumbSchema } from "@/lib/schema";

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

  const postUrl = `${siteConfig.url}/blog/${post.category}/${post.slug}`;
  const [firstHalf, secondHalf] = splitContentInHalf(post.content);

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
    url: postUrl,
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Ana Sayfa", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: getCategoryLabel(post.category, locale), url: `${siteConfig.url}/blog/${post.category}` },
    { name: post.title, url: postUrl },
  ]);

  return (
    <Container className="py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <TrackView eventName="blog_view" params={{ slug: post.slug, category: post.category }} />

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-navy-900"
      >
        <ArrowLeft size={16} /> {tCommon("backToBlog")}
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-3">
        <article className="lg:col-span-2">
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

          <AdBanner label="Reklam Alanı" className="mt-8" />

          <div className="prose-content mt-10">
            <MDXRemote source={firstHalf} />
          </div>

          {secondHalf && (
            <>
              <InlineAd />
              <div className="prose-content">
                <MDXRemote source={secondHalf} />
              </div>
            </>
          )}

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

          <div className="mt-8 border-t border-navy-900/10 pt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {tCommon("share")}
            </p>
            <ShareButtons url={postUrl} title={post.title} trackEventName="blog_share" />
          </div>

          <AdBanner label="Reklam Alanı" className="mt-10" />
        </article>

        <aside className="space-y-8 lg:col-span-1">
          <SidebarAd />
          <NewsletterCard />
        </aside>
      </div>
    </Container>
  );
}
