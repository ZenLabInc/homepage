import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
        }}
      >
        <svg viewBox="0 0 32 32" width={26} height={26} fill="none">
          <defs>
            <linearGradient
              id="g"
              x1="6"
              y1="6"
              x2="26"
              y2="26"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#4f46e5" />
              <stop offset="1" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <path
            d="M16 4.5 A11.5 11.5 0 1 1 6.5 21.6"
            stroke="url(#g)"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.95"
            fill="none"
          />
          <path
            d="M11 11.5 H21 L11 20.5 H21"
            stroke="#0f172a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="22.5" cy="20.5" r="1.6" fill="#4f46e5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
