import { Link } from "@/i18n/navigation";
import { Post } from "@/lib/blog";
import { getCategoryLabel } from "@/lib/categories";
import { FileText } from "lucide-react";

export function BlogCard({ post, locale }: { post: Post; locale: string }) {
  return (
    <Link
      href={`/blog/${post.category}/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white transition-shadow hover:shadow-lg hover:shadow-navy-900/5"
    >
      <div className="flex h-36 items-center justify-center bg-gradient-to-br from-navy-900 to-navy-600">
        <FileText className="h-10 w-10 text-white/70" strokeWidth={1.5} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-accent-500">
          {getCategoryLabel(post.category, locale)}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-navy-950 group-hover:text-accent-500">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 line-clamp-3">
          {post.description}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(
              locale === "en" ? "en-US" : "tr-TR",
              { year: "numeric", month: "long", day: "numeric" }
            )}
          </time>
          <span>·</span>
          <span>{post.readingTimeText}</span>
        </div>
      </div>
    </Link>
  );
}
