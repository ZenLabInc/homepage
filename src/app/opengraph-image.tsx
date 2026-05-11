import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ZenLab — Quiet AI for real work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#08080a",
          color: "#fafafa",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          position: "relative",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            display: "flex",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -260,
            left: 200,
            width: 900,
            height: 900,
            background:
              "radial-gradient(circle, rgba(155,135,255,0.22) 0%, transparent 60%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            right: -120,
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)",
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
              background: "#0e0e12",
              border: "1px solid rgba(255,255,255,0.1)",
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
                  <stop offset="0" stopColor="#cbd5ff" />
                  <stop offset="1" stopColor="#9b87ff" />
                </linearGradient>
              </defs>
              <path
                d="M16 4.5 A11.5 11.5 0 1 1 6.5 21.6"
                stroke="url(#ogg)"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
                opacity="0.85"
              />
              <path
                d="M11 11.5 H21 L11 20.5 H21"
                stroke="url(#ogg)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="22.5" cy="20.5" r="1.6" fill="#cbd5ff" />
            </svg>
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: -0.5,
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
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
              backgroundImage:
                "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex" }}>Quiet AI</div>
            <div style={{ display: "flex" }}>for real work.</div>
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 400,
              color: "#a1a1aa",
              marginTop: 28,
              display: "flex",
              gap: 14,
              alignItems: "center",
            }}
          >
            <span>AI Engineering Studio</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>RAG / AI Agent / Workflow Automation</span>
          </div>
        </div>

        {/* bottom-right URL */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 80,
            fontSize: 20,
            color: "#a1a1aa",
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
