import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ZenLab — 考える道具を、つくる。";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: "#0f172a",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          position: "relative",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            display: "flex",
          }}
        />
        {/* Soft indigo glow */}
        <div
          style={{
            position: "absolute",
            top: -260,
            left: 200,
            width: 900,
            height: 900,
            background:
              "radial-gradient(circle, rgba(79,70,229,0.10) 0%, transparent 60%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -280,
            right: -120,
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)",
            display: "flex",
          }}
        />

        {/* Top row: brand mark + name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              boxShadow: "0 1px 2px rgba(15,23,42,0.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg viewBox="0 0 32 32" width={32} height={32}>
              <defs>
                <linearGradient
                  id="ogg"
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
                stroke="url(#ogg)"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
                opacity="0.95"
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
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: -0.5,
              color: "#0f172a",
              display: "flex",
            }}
          >
            ZenLab
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 86,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
              color: "#0f172a",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex" }}>Tools that</div>
            <div style={{ display: "flex" }}>extend the human.</div>
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: "#475569",
              marginTop: 26,
              display: "flex",
              gap: 14,
              alignItems: "center",
            }}
          >
            <span>Tools Studio</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Augmenting Human Craft</span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 80,
            fontSize: 20,
            color: "#64748b",
            display: "flex",
            zIndex: 1,
          }}
        >
          zenlab.co.jp
        </div>
      </div>
    ),
    { ...size }
  );
}
