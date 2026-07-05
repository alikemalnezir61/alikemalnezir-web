import { ImageResponse } from "next/og";
import { getEventBySlug } from "@/lib/events";
import { getEventCategoryLabel } from "@/lib/event-categories";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const event = getEventBySlug(locale, slug);
  const title = event?.title ?? "Etkinlik";
  const category = event ? getEventCategoryLabel(event.category, locale) : "";

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
          {event?.date ? new Date(event.date).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" }) : ""}
          {event?.location ? ` · ${event.location}` : ""}
        </div>
      </div>
    ),
    { ...size }
  );
}
