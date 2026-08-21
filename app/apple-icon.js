import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #7db0ff 0%, #174ea6 100%)",
        }}
      >
        <svg width="160" height="118" viewBox="0 0 88 64">
          <g fill="none" stroke="#ffffff" strokeWidth="3.8" strokeLinecap="square" strokeLinejoin="bevel">
            <path d="M8 9h29l5 5v27L31 54H13l-6-6V37h13v6h7l4-4V18H8Z" />
            <path d="M43 54V9h25l11 11v11l-8 8h-6l14 15H67L54 40v14Z" />
            <path d="M54 18v12h12l4-4v-4l-4-4Z" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
