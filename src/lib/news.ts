/**
 * お知らせと展示会の情報。
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

export type NewsItem = {
  date: string; // YYYY-MM-DD
  category: string;
  title: string;
  body?: string;
  href?: string;
};

export const NEWS: NewsItem[] = [
  {
    date: "2026-11-14",
    category: "展示会",
    title: `${exhibitionHeadline()}。言葉で指示して作業を覚えるロボットアームを展示しました`,
    body:
      "オープンソースのロボットアーム SO-101 に手先カメラを付け、「撮る → 見る → 考える → 動く」を繰り返すエージェントループで動かすデモを展示しました。" +
      "来場された製造業のみなさまから、多種類・小ロットの現場で何が自動化できていないのかを伺えたことが、いちばんの収穫でした。",
  },
];

export function formatNewsDate(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return `${y}.${String(m).padStart(2, "0")}.${String(d).padStart(2, "0")}`;
}
