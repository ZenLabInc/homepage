import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { LOGO_LOWER_PATH, LOGO_UPPER_PATH } from "@/lib/brand";

/* リンクを共有したときに出る画像。トップの見出し(hero.tsx)と同じ言葉にする。
   フォントは使う文字だけを抜いた Noto Sans JP(assets/og/)。文言を変えたら抜き直す。 */
export const alt = "ZenLab — AIを含むソフトウェアからハードウェアまで、企画・開発・運用を一貫して行います。";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INDIGO = "#4f46e5";
const SLATE = "#0f172a";

export default async function OG() {
  const dir = join(process.cwd(), "assets/og");
  const [regular, bold] = await Promise.all([
    readFile(join(dir, "NotoSansJP-400.ttf")),
    readFile(join(dir, "NotoSansJP-700.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: SLATE,
          display: "flex",
          flexDirection: "column",
          padding: "72px 88px",
          position: "relative",
          fontFamily: "Noto Sans JP",
        }}
      >
        {/* 細かい方眼(サイトの背景と同じ) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            display: "flex",
          }}
        />

        {/* ロゴと社名 */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg viewBox="0 0 112 112" width={44} height={44}>
            <path fill={SLATE} d={LOGO_LOWER_PATH} />
            <path fill={INDIGO} d={LOGO_UPPER_PATH} />
          </svg>
          <div style={{ fontSize: 30, fontWeight: 700, display: "flex" }}>ZenLab</div>
        </div>

        {/* 見出し */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.36,
              letterSpacing: -1.5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex" }}>
              <span style={{ color: INDIGO }}>AI</span>
              <span>を含むソフトウェアから</span>
            </div>
            <div style={{ display: "flex" }}>ハードウェアまで、</div>
            <div style={{ display: "flex" }}>企画・開発・運用を一貫して行います。</div>
          </div>

          <div style={{ width: 72, height: 4, background: INDIGO, marginTop: 36, display: "flex" }} />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: 22,
              fontSize: 24,
              fontWeight: 400,
              color: "#475569",
            }}
          >
            <div style={{ display: "flex" }}>
              AIを含むシステムの受託開発 / フィジカルAI(ロボット)の開発
            </div>
            <div style={{ display: "flex", fontSize: 22, color: "#64748b" }}>zenlab.co.jp</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Noto Sans JP", data: regular, weight: 400, style: "normal" },
        { name: "Noto Sans JP", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
