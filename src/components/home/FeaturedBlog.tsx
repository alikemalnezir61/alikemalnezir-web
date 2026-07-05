import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedPosts } from "@/lib/blog";

export function FeaturedBlog({ locale }: { locale: string }) {
  const t = useTranslations("home.featuredBlog");
  const tCommon = useTranslations("common");
  const posts = getFeaturedPosts(locale, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
          <Button href="/blog" variant="ghost">
            {tCommon("viewAll")}
          </Button>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
