"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
} as const;

/* ---------- 受託開発・ディレクション ---------- */
const SCOPE = [
  { step: "要件定義", body: "業務を聞き、何を AI に任せ、何を人に残すかを決める" },
  { step: "設計", body: "画面・API・データ・AI の使いどころを設計する" },
  { step: "実装", body: "フロントエンドからバックエンド、AI の組み込みまで" },
  { step: "テスト・リリース", body: "本番の環境を用意し、現場に出す" },
  { step: "運用・保守", body: "使われ方を見て直し、動き続けるように保つ" },
];

const MAKES = [
  "AI エージェントによる業務の自動化(メール・表計算・チャットをまたぐ定型業務など)",
  "生成 AI を組み込んだ Web サービス(議事録・文書の生成など)",
  "Web アプリケーションのフルスタック開発(フロントエンド・バックエンド・インフラ)",
  "開発チームのディレクション・プロジェクトの推進(準委任での参加も可)",
];

/* 代表の実績(会社名は出さない。言い回しは事実を淡々と書く) */
const CAREER = [
  {
    when: "2026 ─",
    where: "大手人材系企業",
    what: "社内業務の自動化。依頼の受付・転記・承認などの定型業務を、AI エージェントで処理する仕組みを開発",
  },
  {
    when: "2023 ─ 2026",
    where: "大手総合人材サービス企業",
    what: "AI 議事録サービスの開発(フルスタック)。その後、新規プロジェクトの PM と課長を担当",
  },
  {
    when: "2022",
    where: "位置情報デバイス開発会社",
    what: "RTK 測位端末と連携するクラウドサービス、3D 表示アプリ、太陽光発電所の予測システム(受託)の開発。展示会・営業・広報も担当",
  },
  {
    when: "2021",
    where: "求人情報サービス企業",
    what: "バイト求人掲載サービスのバックエンド API の開発(Go・AWS)",
  },
];

/* ---------- アーム開発 ---------- */
const LOOP = [
  { step: "聞く", body: "「赤いのを右の箱へ」と、言葉で頼む" },
  { step: "見る", body: "手先のカメラで机を見渡し、物に寄って確かめる" },
  { step: "考える", body: "Claude が、どの物をどこへ運ぶかを決める" },
  { step: "動かす", body: "関節の角度は計算で求め、掴んで運ぶ" },
  { step: "確かめる", body: "置けたかをカメラで見て、だめなら直すか人を呼ぶ" },
];

const DONE = [
  "言葉で指定した物を掴んで運ぶデモを、産業交流展 2026 で公開(SO-101+手先カメラ)",
  "SO-101 の実機で、ブロックやペンを掴んで運び、置く往復",
  "シミュレーターで、教える → 繰り返す → 失敗を人に知らせる、までの一連",
];

const DESIGNS = [
  { src: "/hero/so101-detail.webp", name: "SO-101", note: "6軸アーム。実機で稼働中", w: 999, h: 719 },
  { src: "/hero/amazinghand-detail.webp", name: "AmazingHand", note: "8サーボの手。組み立て中", w: 631, h: 1000 },
  { src: "/hero/zarm-detail.webp", name: "zarm V1", note: "カメラとライトの腕。設計中", w: 701, h: 1000 },
];

function Label({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <p className={`text-xs font-medium tracking-wider ${accent ? "text-accent" : "text-muted-foreground"}`}>
      {children}
    </p>
  );
}

function CTA({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="#contact"
      className="mt-7 inline-flex items-center gap-1.5 rounded text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 {...fade} className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-tight text-foreground">
          事業内容
        </motion.h2>
        <motion.p {...fade} className="mt-5 max-w-3xl text-[15px] leading-relaxed text-foreground/80">
          電子情報工学をバックグラウンドに、AI を含むソフトウェアとハードウェアを統合して開発しています。
        </motion.p>

        {/* 受託開発・ディレクション */}
        <motion.article {...fade} className="mt-10 rounded-2xl border border-border bg-white p-8 sm:p-9">
          <Label>提供中のサービス</Label>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
            AI を含むシステムの受託開発、ディレクション
          </h3>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-foreground/80">
            AI を含むソフトウェアを、上流の要件定義から運用・保守まで一貫して担います。
            開発そのものに加えて、チームの進め方を整えるディレクションも引き受けます。
          </p>

          {/* 対応範囲 */}
          <div className="mt-8">
            <p className="text-[13px] font-medium text-muted-foreground">対応範囲(上流 → 保守)</p>
            <ol className="mt-3 grid gap-2 sm:grid-cols-5">
              {SCOPE.map((sc, i) => (
                <li key={sc.step} className="relative rounded-xl border border-border bg-[hsl(var(--accent-soft))]/40 p-4">
                  <p className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-1 text-[14.5px] font-semibold tracking-tight text-foreground">{sc.step}</p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-foreground/70">{sc.body}</p>
                  {i < SCOPE.length - 1 && (
                    <span aria-hidden className="absolute -right-[9px] top-1/2 z-10 hidden -translate-y-1/2 text-accent/60 sm:block">
                      ›
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* つくれるもの */}
          <div className="mt-8">
            <p className="text-[13px] font-medium text-muted-foreground">つくれるもの</p>
            <ul className="mt-3 space-y-2">
              {MAKES.map((m) => (
                <li key={m} className="flex gap-2.5 text-[14px] leading-relaxed text-foreground/85">
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* 実績 */}
          <div className="mt-8">
            <p className="text-[13px] font-medium text-muted-foreground">代表の実績</p>
            <ol className="mt-3 divide-y divide-border overflow-hidden rounded-xl border border-border">
              {CAREER.map((c) => (
                <li key={c.where} className="grid gap-1 px-5 py-4 sm:grid-cols-[110px_200px_1fr] sm:gap-4">
                  <p className="font-mono text-[12.5px] text-muted-foreground sm:pt-[1px]">{c.when}</p>
                  <p className="text-[14px] font-semibold tracking-tight text-foreground">{c.where}</p>
                  <p className="text-[13.5px] leading-relaxed text-foreground/80">{c.what}</p>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-[13px] text-muted-foreground">
              主な技術:Claude / OpenAI API、MCP、TypeScript(Next.js)、Python、Go、AWS
            </p>
          </div>

          <CTA>AI 活用・システム開発について相談する</CTA>
        </motion.article>

        {/* アーム開発 */}
        <motion.article {...fade} className="mt-6 rounded-2xl border border-border bg-white p-8 sm:p-9">
          <Label accent>開発中 ─ ロボットアーム</Label>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
            フィジカル AI(ロボット)の開発
          </h3>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-foreground/80">
            作業ごとに動きを学習させるのではなく、Claude のエージェントがカメラで見て考え、腕を動かします。
            AI が決めるのは「何をどこへ」まで。関節の角度は計算で求めるので、動きは毎回同じ規則に従います。
          </p>

          {/* エージェントループ */}
          <div className="mt-8">
            <p className="text-[13px] font-medium text-muted-foreground">エージェントループ</p>
            <ol className="mt-3 grid gap-2 sm:grid-cols-5">
              {LOOP.map((l, i) => (
                <li key={l.step} className="relative rounded-xl border border-border bg-[hsl(var(--accent-soft))]/40 p-4">
                  <p className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-1 text-[15px] font-semibold tracking-tight text-foreground">{l.step}</p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-foreground/70">{l.body}</p>
                  {i < LOOP.length - 1 && (
                    <span aria-hidden className="absolute -right-[9px] top-1/2 z-10 hidden -translate-y-1/2 text-accent/60 sm:block">
                      ›
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-2.5 text-[12.5px] text-muted-foreground">
              ↺ 「見る」から「確かめる」を、頼まれた作業が終わるまで繰り返します。
            </p>
          </div>

          {/* できていること */}
          <div className="mt-8">
            <p className="text-[13px] font-medium text-muted-foreground">いまできていること</p>
            <ul className="mt-3 space-y-2">
              {DONE.map((d) => (
                <li key={d} className="flex gap-2.5 text-[14px] leading-relaxed text-foreground/85">
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* 設計データ */}
          <div className="mt-8">
            <p className="text-[13px] font-medium text-muted-foreground">設計データ</p>
            <ul className="mt-3 grid gap-3 sm:grid-cols-3">
              {DESIGNS.map((d) => (
                <li key={d.name} className="flex flex-col rounded-xl border border-border bg-white p-3 sm:p-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg grid-bg-fine">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={d.src}
                      alt={`${d.name} の設計データを線画にしたもの`}
                      width={d.w}
                      height={d.h}
                      loading="lazy"
                      className="absolute inset-0 m-auto h-[86%] w-[86%] object-contain"
                    />
                  </div>
                  <p className="mt-3 text-[13.5px] font-semibold tracking-tight text-foreground">{d.name}</p>
                  <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground">{d.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 max-w-3xl text-[14px] leading-relaxed text-foreground/80">
            次に出すのは、先端にカメラとライトを付けた小さな腕「zarm」です。Claude Code や Codex が自分で見たい所へ動かし、
            照らして撮り、机の上の配線や部品を確かめます。エージェントに机の上を見せたかった場面があれば、お知らせください。
          </p>

          <CTA>ハードウェアを含むロボット開発について相談する</CTA>
        </motion.article>
      </div>
    </section>
  );
}
