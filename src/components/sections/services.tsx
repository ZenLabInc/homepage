"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading, Rule } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

/* 事業内容。2つの事業を同じ型(左に概要、右に項目の表)で並べる。 */

type Row = { label: string; body: React.ReactNode };
type Business = {
  no: string;
  status: string;
  title: string;
  lead: string;
  cta: string;
  rows: Row[];
};

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[14px] text-foreground">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          {s}
          {i < steps.length - 1 && <span aria-hidden className="text-accent">→</span>}
        </li>
      ))}
    </ol>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 text-[14px] leading-relaxed text-foreground/85">
      {items.map((t) => (
        <li key={t} className="flex gap-2.5">
          <span aria-hidden className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-accent" />
          {t}
        </li>
      ))}
    </ul>
  );
}

/* 代表の実績(会社名は出さない。言い回しは事実を淡々と書く) */
const CAREER = [
  { when: "2026 ─", where: "大手人材系企業", what: "社内の定型業務を AI エージェントで処理する仕組みの開発" },
  { when: "2023 ─ 2026", where: "大手総合人材サービス企業", what: "AI 議事録サービスの開発(フルスタック)、新規プロジェクトの PM、課長" },
  { when: "2022", where: "位置情報デバイス開発会社", what: "RTK 測位端末と連携するクラウドサービスほかの開発、展示会・営業・広報" },
  { when: "2021", where: "求人情報サービス企業", what: "バイト求人掲載サービスのバックエンド API の開発(Go・AWS)" },
];

const DESIGNS = [
  { src: "/hero/so101-detail.webp", name: "SO-101", note: "実機で稼働中", w: 999, h: 719 },
  { src: "/hero/amazinghand-detail.webp", name: "AmazingHand", note: "組み立て中", w: 631, h: 1000 },
  { src: "/hero/zarm-detail.webp", name: "zarm V1", note: "設計中", w: 701, h: 1000 },
];

const BUSINESSES: Business[] = [
  {
    no: "A",
    status: "提供中",
    title: "AI を含むシステムの受託開発、ディレクション",
    lead: "AI を含むソフトウェアを、上流の要件定義から運用・保守まで一貫して担います。開発そのものに加えて、チームの進め方を整えるディレクションも引き受けます。",
    cta: "システム開発を相談する",
    rows: [
      { label: "対応範囲", body: <Flow steps={["要件定義", "設計", "実装", "テスト・リリース", "運用・保守"]} /> },
      {
        label: "つくれるもの",
        body: (
          <List
            items={[
              "AI エージェントによる業務の自動化",
              "生成 AI を組み込んだ Web サービス",
              "Web アプリケーションのフルスタック開発",
              "開発チームのディレクション(準委任での参加も可)",
            ]}
          />
        ),
      },
      {
        label: "代表の実績",
        body: (
          <ol className="space-y-3">
            {CAREER.map((c) => (
              <li key={c.where} className="grid gap-0.5 sm:grid-cols-[92px_1fr] sm:gap-3">
                <span className="font-mono text-[12.5px] text-muted-foreground sm:pt-[2px]">{c.when}</span>
                <span className="text-[14px] leading-relaxed text-foreground/85">
                  <span className="font-medium text-foreground">{c.where}</span>
                  <span className="text-muted-foreground"> ─ </span>
                  {c.what}
                </span>
              </li>
            ))}
          </ol>
        ),
      },
      {
        label: "主な技術",
        body: <p className="text-[14px] text-foreground/85">Claude / OpenAI API、MCP、TypeScript(Next.js)、Python、Go、AWS</p>,
      },
    ],
  },
  {
    no: "B",
    status: "開発中",
    title: "フィジカル AI(ロボット)の開発",
    lead: "作業ごとに動きを学習させるのではなく、Claude のエージェントがカメラで見て考え、腕を動かします。AI が決めるのは「何をどこへ」まで。関節の角度は計算で求めるので、動きは毎回同じ規則に従います。",
    cta: "ロボット開発を相談する",
    rows: [
      { label: "仕組み", body: <Flow steps={["言葉で頼む", "見る", "考える", "動かす", "確かめる"]} /> },
      {
        label: "できていること",
        body: (
          <List
            items={[
              "言葉で指定した物を掴んで運ぶデモを、産業交流展 2026 で公開",
              "SO-101 の実機で、物を掴んで運び、置く往復",
              "シミュレーターで、教える → 繰り返す → 失敗を人に知らせる、までの一連",
            ]}
          />
        ),
      },
      {
        label: "開発中のAIロボット",
        body: (
          <ul className="grid grid-cols-3 gap-3">
            {DESIGNS.map((d) => (
              <li key={d.name}>
                <div className="relative aspect-square overflow-hidden rounded-md border border-border bg-white grid-bg-fine">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.src}
                    alt={`${d.name} の設計データを線画にしたもの`}
                    width={d.w}
                    height={d.h}
                    loading="lazy"
                    className="absolute inset-0 m-auto h-[84%] w-[84%] object-contain"
                  />
                </div>
                <p className="mt-2 text-[12.5px] font-medium text-foreground">{d.name}</p>
                <p className="text-[11.5px] text-muted-foreground">{d.note}</p>
              </li>
            ))}
          </ul>
        ),
      },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="事業内容" en="Services" />
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-foreground/80">
          電子情報工学をバックグラウンドに、AI を含むソフトウェアとハードウェアを統合して開発しています。
        </p>

        <div className="mt-12 space-y-6">
          {BUSINESSES.map((b) => (
            <motion.article
              key={b.no}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-border bg-white p-7 sm:p-10"
            >
              <div className="grid gap-10 md:grid-cols-[0.85fr_1.6fr] md:gap-12">
                {/* 左:概要 */}
                <div>
                  <p className="text-[12px] text-muted-foreground">{b.status}</p>
                  <h3 className="mt-2 text-[20px] font-semibold leading-snug tracking-tight text-foreground text-balance [word-break:auto-phrase]">{b.title}</h3>
                  <p className="mt-4 text-[14.5px] leading-[1.85] text-foreground/80">{b.lead}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <Button asChild>
                      <Link href="#contact">
                        {b.cta}
                        <ArrowRight aria-hidden="true" className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Link
                      href="#process"
                      className="text-[13.5px] font-medium text-foreground/70 underline-offset-4 hover:text-accent hover:underline"
                    >
                      ご依頼の流れを見る
                    </Link>
                  </div>
                </div>

                {/* 右:項目の表 */}
                <dl>
                  {b.rows.map((r, i) => (
                    <div key={r.label}>
                      {i > 0 && <Rule className="bg-border" delay={0.05 * i} />}
                      <div className={`grid gap-2 sm:grid-cols-[120px_1fr] sm:gap-4 ${i === 0 ? "pb-5" : "py-5"}`}>
                        <dt className="text-[12px] text-muted-foreground sm:pt-[2px]">
                          {r.label}
                        </dt>
                        <dd>{r.body}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
