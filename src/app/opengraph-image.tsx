import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const alt = `${profile.name} — Software Engineer, Mobile & Frontend`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const facts = [
  ["Role", "Software Engineer"],
  ["Focus", "Mobile & Frontend"],
  ["Based", "Bengaluru, India"],
];

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#faf9f7",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #cbc8c2 1.5px, transparent 0)",
          backgroundSize: "28px 28px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "monospace",
              fontSize: 22,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#6a6a71",
            }}
          >
            <span style={{ color: "#b8431f" }}>Portfolio</span>
            <span style={{ margin: "0 12px", color: "#cbc8c2" }}>/</span>
            <span>Software Engineer</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 108,
              fontWeight: 600,
              letterSpacing: -3,
              color: "#0b0b0c",
              lineHeight: 1,
            }}
          >
            {profile.name}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 40,
              fontWeight: 500,
              color: "#0b0b0c",
            }}
          >
            Software Engineer
            <span style={{ margin: "0 16px", color: "#cbc8c2" }}>—</span>
            <span style={{ color: "#b8431f" }}>Mobile &amp; Frontend</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontFamily: "monospace",
              fontSize: 26,
              color: "#5f5f66",
            }}
          >
            {profile.primaryStack.join("   ·   ")}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #e3e1dd",
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", gap: 56 }}>
            {facts.map(([key, value]) => (
              <div key={key} style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    fontFamily: "monospace",
                    fontSize: 18,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "#6a6a71",
                  }}
                >
                  {key}
                </div>
                <div style={{ display: "flex", marginTop: 6, fontSize: 26, color: "#0b0b0c" }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "monospace",
              fontSize: 22,
              color: "#b8431f",
            }}
          >
            ishappa.github.io
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
