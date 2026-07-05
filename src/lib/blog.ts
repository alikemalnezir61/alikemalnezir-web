import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  coverImage?: string;
  draft?: boolean;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
  readingTimeText: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function getPostsDir(locale: string) {
  return path.join(BLOG_DIR, locale);
}

export function getAllPosts(locale: string): Post[] {
  const dir = getPostsDir(locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
      ...(data as PostFrontmatter),
      slug,
      content,
      readingTimeText: `${Math.max(1, Math.ceil(stats.minutes))} dk`,
    };
  });

  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(locale: string, slug: string): Post | null {
  const posts = getAllPosts(locale);
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getPostsByCategory(locale: string, categorySlug: string): Post[] {
  return getAllPosts(locale).filter((post) => post.category === categorySlug);
}

export function getFeaturedPosts(locale: string, count = 3): Post[] {
  return getAllPosts(locale).slice(0, count);
}
