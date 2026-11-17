/**
 * 展示会の情報(/eizeno/demo で使う)。トップのお知らせ枠は 2026-11-17 に廃止し、最新の状況は SNS へ案内している。
 *
 * 産業交流展2026(2026-11-11〜13)は会期終了。実際に出展したことを確認したので status: "held"。
 * 会場・小間番号は公式の出展者情報で確認できたものだけを入れる。未確認なら null のまま(表示しない)。
 */
export type ExhibitionStatus = "upcoming" | "held";

export const EXHIBITION_2026 = {
  name: "産業交流展2026",
  period: "2026年11月11日（水）〜13日（金）",
  status: "held" as ExhibitionStatus,
  venue: null as string | null,
  booth: null as string | null,
  report: null as string | null,
  demoPath: "/eizeno/demo",
};

export function exhibitionHeadline(e = EXHIBITION_2026) {
  return e.status === "held"
    ? `${e.name}に出展しました`
    : `${e.name}に出展します`;
}
