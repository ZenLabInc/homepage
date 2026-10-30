/**
 * お知らせと展示会の情報。
 *
 * 産業交流展2026は開催前のため status: "upcoming"(「出展します」)。
 * 会期後、実際に出展したことを確認してから status: "held" にし、
 * report に開催報告の本文を入れる(「出展しました」に切り替わる)。
 * 会場・小間番号は公式の出展者情報で確認できたものだけを入れる。未確認なら null のまま(表示しない)。
 */
export type ExhibitionStatus = "upcoming" | "held";

export const EXHIBITION_2026 = {
  name: "産業交流展2026",
  period: "2026年11月11日（水）〜13日（金）",
  status: "upcoming" as ExhibitionStatus,
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
  href: string;
};

export const NEWS: NewsItem[] = [
  {
    date: "2026-10-30",
    category: "展示会",
    title:
      EXHIBITION_2026.status === "held"
        ? `${exhibitionHeadline()}。展示したEizenoのSaaS紹介動画デモをご覧いただけます`
        : `${exhibitionHeadline()}（${EXHIBITION_2026.period}）。展示するEizenoのSaaS紹介動画デモを公開しました`,
    href: EXHIBITION_2026.demoPath,
  },
];

export function formatNewsDate(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return `${y}.${String(m).padStart(2, "0")}.${String(d).padStart(2, "0")}`;
}
