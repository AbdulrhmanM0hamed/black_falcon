import { ImageResponse } from "next/og";

import { siteSettings } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 18% 18%, rgba(255,162,64,0.35), transparent 32%), radial-gradient(circle at 82% 16%, rgba(255,255,255,0.08), transparent 24%), linear-gradient(180deg, #090909 0%, #060606 100%)",
          color: "#f6f1ea",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            borderRadius: 38,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 28,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#ffd3a0",
              }}
            >
              Black Falcon
            </div>
            <div
              style={{
                fontSize: 70,
                lineHeight: 1.05,
                maxWidth: 840,
                fontWeight: 700,
              }}
            >
              Premium software experiences that look as strong as they ship.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 26,
              color: "rgba(246,241,234,0.78)",
            }}
          >
            <div>{siteSettings.tagline.en}</div>
            <div style={{ color: "#ffa240" }}>Web · Mobile · UX · QA · DevOps</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
