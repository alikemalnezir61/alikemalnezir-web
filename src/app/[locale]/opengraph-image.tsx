import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "#0a1a30",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          AKN
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, marginTop: 40, maxWidth: 900 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#8fbcf5", marginTop: 16 }}>
          {siteConfig.title}
        </div>
      </div>
    ),
    { ...size }
  );
}
