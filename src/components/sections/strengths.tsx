"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Target,
  Repeat,
  Boxes,
  Brain,
  Layers,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const strengths = [
  {
    icon: Compass,
    title: "業務理解から始める",
    body:
      "ヒアリングで業務フローと既存システムを把握し、「どこからAIで自動化できるか」を私たちから提案します。技術ありきで始めません。",
  },
  {
    icon: Target,
    title: "「まず何を自動化するか」を明確化",
    body:
      "プロトタイプの最初のゴールを「確実に価値が出る一点」に絞ります。「かっこいいけど使えないシステム」を構造的に回避するアプローチです。",
  },
  {
    icon: Repeat,
    title: "速さ × 何度もの改善",
    body:
      "1週間〜1ヶ月でプロトタイプを構築し、社内で触って判断できる状態に。動くものに対して、改善を短サイクルで何度も重ねます。",
  },
  {
    icon: Boxes,
    title: "既存システム連携・紙の現場でも対応",
    body:
      "Salesforce / Notion / 自社DB との連携はもちろん、デジタル化が遅れたアナログ業務にも、実用的に「効く」アプローチを設計します。",
  },
  {
    icon: Brain,
    title: "AI前提の開発体制",
    body:
      "調査・コーディング・ドキュメント生成に最新のAIを徹底活用。受託開発の生産性を構造的に底上げしているため、速度と費用を両立できます。",
  },
  {
    icon: Layers,
    title: "モダンスタックと内製化設計",
    body:
      "Next.js / TypeScript / AWS / LangGraph / Vercel AI SDK など、現場で確かに動く構成。引き継ぎと卒業を見据えた設計を最初から行います。",
  },
];

const stats = [
  { value: "1w–1mo", unit: "", label: "動くプロトタイプが完成するまでの目安" },
  { value: "0%", unit: "", label: "営業マージン(エンジニア工数のみを請求)" },
  { value: "100%", unit: "", label: "代表自身が要件定義〜実装まで関与" },
];

export function Strengths() {
  return (
    <section
      id="strengths"
      className="relative py-24 md:py-32 border-t border-border"
    >
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Why ZenLab"
          title={
            <>
              <span className="accent-gradient">「使えるAI」</span>だけを、
              <br className="hidden sm:inline" />
              構造的に作る。
            </>
          }
          description="業務理解からはじめ、「まず何を自動化するか」を明確にすることで、「かっこいいけど使えないシステム」を構造的に回避します。動くものを最短で作り、改善を何度も重ねる開発リズムが、ZenLabの強みです。"
        />

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid divide-y divide-border rounded-2xl border border-border bg-white shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map((s) => (
            <div key={s.label} className="p-7 text-center">
              <div className="text-[clamp(2rem,4vw,2.6rem)] font-semibold tracking-tight heading-gradient">
                {s.value}
                {s.unit && (
                  <span className="ml-1 text-base font-medium text-muted-foreground">
                    {s.unit}
                  </span>
                )}
              </div>
              <div className="mt-2 text-[12.5px] text-muted-foreground leading-relaxed">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_18px_36px_-22px_rgb(15_23_42/0.18)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted">
                  <s.icon className="h-[15px] w-[15px] text-foreground" />
                </div>
                <h3 className="text-[15px] font-semibold tracking-tight">
                  {s.title}
                </h3>
              </div>
              <p className="mt-4 text-[13.5px] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        <ComparisonTable />
      </div>
    </section>
  );
}

const compare = [
  {
    label: "立ち上がり速度",
    typical: "1〜3ヶ月の要件定義",
    zenlab: "1週間〜1ヶ月で動くプロトタイプ",
  },
  {
    label: "最初のゴール",
    typical: "決まった要件をそのまま実装",
    zenlab: "「まず何を自動化するか」から提案",
  },
  {
    label: "料金体系",
    typical: "営業マージンを含む見積",
    zenlab: "工数のみ・準委任 (マージンゼロ)",
  },
  {
    label: "納品後の関係",
    typical: "保守費用で抱え込み",
    zenlab: "ドキュメント納品 + 勉強会で内製化",
  },
];

function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="mt-14 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]"
    >
      <div className="grid grid-cols-[1.1fr_1fr_1fr] text-xs uppercase tracking-[0.14em] text-muted-foreground border-b border-border bg-muted/50">
        <div className="px-6 py-4"> </div>
        <div className="px-6 py-4 border-l border-border">一般的な受託開発</div>
        <div className="px-6 py-4 border-l border-border text-foreground bg-accent/[0.06]">
          ZenLab
        </div>
      </div>
      {compare.map((row, i) => (
        <div
          key={row.label}
          className={`grid grid-cols-[1.1fr_1fr_1fr] text-sm ${
            i !== compare.length - 1 ? "border-b border-border" : ""
          }`}
        >
          <div className="px-6 py-5 font-medium text-foreground">
            {row.label}
          </div>
          <div className="px-6 py-5 border-l border-border text-muted-foreground">
            {row.typical}
          </div>
          <div className="px-6 py-5 border-l border-border text-foreground bg-accent/[0.04]">
            {row.zenlab}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
