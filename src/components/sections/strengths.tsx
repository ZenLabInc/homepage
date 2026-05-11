"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Brain,
  Lightbulb,
  Compass,
  Users,
  Layers,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const strengths = [
  {
    icon: Zap,
    title: "少人数・高速開発",
    body: "マネジメントレイヤーを最小化。ヒアリングから1〜2週間で動くPoCをお見せします。",
  },
  {
    icon: Brain,
    title: "AI前提の開発体制",
    body: "コーディング・調査・ドキュメント生成にAIを徹底活用。受託開発の生産性を構造的に変えています。",
  },
  {
    icon: Compass,
    title: "業務理解からはじめる",
    body: "技術ありきではなく、まず現場に座って業務を観る。ROIに直結するユースケースを共に見つけます。",
  },
  {
    icon: Lightbulb,
    title: "要件定義から伴走",
    body: "「何を作るか決まっていない」フェーズが得意。仮説立案・PoC・本実装まで切れ目なく支援します。",
  },
  {
    icon: Users,
    title: "内製化を前提に設計",
    body: "ロックインしない。引き継ぎドキュメント・コードレビュー・社内勉強会まで含めた“卒業設計”を行います。",
  },
  {
    icon: Layers,
    title: "モダンな技術スタック",
    body: "Next.js / TypeScript / AWS / LangGraph / Vercel AI SDK / Pinecone / Supabase など、現場で確かに動く構成。",
  },
];

const stats = [
  { value: "1–2", unit: "weeks", label: "PoC着手から動くデモまでの目安" },
  { value: "60%+", unit: "", label: "AIツール活用による開発速度の改善" },
  { value: "100%", unit: "", label: "代表が要件定義〜実装まで関与" },
];

export function Strengths() {
  return (
    <section
      id="strengths"
      className="relative py-24 md:py-32 border-t border-border/60"
    >
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Why ZenLab"
          title={
            <>
              受託でも、内製チームのように。
              <br className="hidden sm:inline" />
              <span className="accent-gradient">速く・近く・残る</span>。
            </>
          }
          description="ZenLabは少人数のエンジニア集団です。一般的な受託開発とは異なる、3つの構造的な強みがあります。"
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
    zenlab: "1〜2週間で動くPoC",
  },
  {
    label: "意思決定",
    typical: "営業 → PM → エンジニアと多段",
    zenlab: "代表が要件から実装まで一貫",
  },
  {
    label: "AI活用",
    typical: "ツールとして単発利用",
    zenlab: "開発プロセス全体にAIを組込",
  },
  {
    label: "納品後の関係",
    typical: "保守費用で抱え込み",
    zenlab: "内製化・卒業まで設計",
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
