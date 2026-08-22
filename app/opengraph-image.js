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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: "0.02em" }}>Jeremy Rivera</div>
            <div style={{ marginTop: 5, color: "#b8c2d3", fontSize: 24 }}>Product Designer</div>
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

