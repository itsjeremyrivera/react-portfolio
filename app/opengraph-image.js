import { ImageResponse } from "next/og";

export const alt = "Jeremy Rivera — Product Designer portfolio";
export const size = { width: 1200, height: 630 };
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
          color: "#f7f9fc",
          background: "linear-gradient(135deg, #0b1220 0%, #111a2b 58%, #17233a 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            right: -160,
            top: -210,
            borderRadius: 999,
            background: "rgba(125, 176, 255, 0.16)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            right: 40,
            bottom: -310,
            borderRadius: 999,
            border: "2px solid rgba(125, 176, 255, 0.25)",
            display: "flex",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <svg width="104" height="104" viewBox="0 0 48 48">
              <rect x="1" y="1" width="46" height="46" rx="14" fill="#7db0ff" />
              <path d="M7 19C14 8 28 4 40 10" fill="none" stroke="#07111f" strokeOpacity="0.32" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M8.5 12.5H21V29c0 5.8-3.6 9-9 9-3.5 0-6.3-1.7-7.7-4.5" fill="none" stroke="#07111f" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M25 38V12.5h7.2c6 0 9.6 3.1 9.6 8s-3.6 8-9.6 8H25m7.5 0L42 38" fill="none" stroke="#07111f" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: "0.02em" }}>Jeremy Rivera</div>
              <div style={{ marginTop: 5, color: "#b8c2d3", fontSize: 24 }}>Product Designer</div>
            </div>
          </div>

          <div style={{ display: "flex", maxWidth: 920, fontSize: 66, fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.045em" }}>
            I make complex products easier to build, use, and scale.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#b8c2d3", fontSize: 22 }}>
            <span style={{ width: 42, height: 2, display: "flex", background: "#7db0ff" }} />
            jeremyrivera.design
          </div>
        </div>
      </div>
    ),
    size,
  );
}
