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
        <svg width="148" height="148" viewBox="0 0 48 48">
          <path d="M7 19C14 8 28 4 40 10" fill="none" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M8.5 12.5H21V29c0 5.8-3.6 9-9 9-3.5 0-6.3-1.7-7.7-4.5" fill="none" stroke="#ffffff" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 38V12.5h7.2c6 0 9.6 3.1 9.6 8s-3.6 8-9.6 8H25m7.5 0L42 38" fill="none" stroke="#ffffff" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    size,
  );
}
