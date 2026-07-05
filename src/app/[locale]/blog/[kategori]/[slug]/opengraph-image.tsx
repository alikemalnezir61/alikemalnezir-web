import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";
import { getCategoryLabel } from "@/lib/categories";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; kategori: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);
  const title = post?.title ?? "Blog";
  const category = post ? getCategoryLabel(post.category, locale) : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #05101f 0%, #0f2744 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: "#4f94ee", textTransform: "uppercase", letterSpacing: 2 }}>
          {category}
        </div>
        <div style={{ display: "flex", fontSize: 52, fontWeight: 700, marginTop: 24, maxWidth: 1000, lineHeight: 1.2 }}>
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8fbcf5", marginTop: 40 }}>
          Ali Kemal Nezir · Proje Yöneticisi
        </div>
      </div>
    ),
    { ...size }
  );
}
