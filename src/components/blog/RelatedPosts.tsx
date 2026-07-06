import { Post } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export function RelatedPosts({
  posts,
  locale,
  title,
}: {
  posts: Post[];
  locale: string;
  title: string;
}) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-12 border-t border-navy-900/10 pt-10">
      <h2 className="text-lg font-semibold text-navy-950">{title}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} locale={locale} />
        ))}
      </div>
    </div>
  );
}
