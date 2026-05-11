"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Compass, Target, Boxes } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const approaches = [
  {
    icon: Compass,
    title: "業務理解から始める",
    body:
      "ご要望と既存の業務フローをヒアリングし、「どこからAIで自動化できるか」を私たちから提案します。技術ありきで始めません。",
  },
  {
    icon: Target,
    title: "「まず何を自動化するか」を明確化",
    body:
      "「まず何を自動化／半自動化したいか」を端的に明確にすることで、「かっこいいけど良く分からない、使えないシステム」を回避します。確実に価値が出るシステム開発を、はじめのゴールにします。",
  },
  {
    icon: Boxes,
    title: "既存システム連携・紙の現場でも対応",
    body:
      "お客様の既存システムと連携するシステムを構築できるほか、デジタル化が進んでいない紙の現場のような場所でも使えるAIシステムを提案・構築します。",
  },
];

const stats = [
  { value: "30–60min", label: "初回ヒアリング(無料)" },
  { value: "1w–1mo", label: "動くプロトタイプまでの目安" },
  { value: "0%", label: "営業マージン(エンジニア工数のみを請求)" },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="relative py-24 md:py-32 border-t border-border"
    >
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Approach"
          title={
            <>
              <span className="accent-gradient">業務で確実に使えるAI</span>
              <br className="hidden sm:inline" />
              システムを、構造的に作る。
            </>
          }
          description="ZenLabの強みは、業務で確実に使えるAIシステムを構築できることです。「速さ × 何度もの改善」を組み合わせた開発アプローチで、現場で動くものを作ります。"
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid divide-y divide-border rounded-2xl border border-border bg-white shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map((s) => (
            <div key={s.label} className="p-7 text-center">
              <div className="text-[clamp(1.85rem,3.6vw,2.4rem)] font-semibold tracking-tight heading-gradient">
                {s.value}
              </div>
              <div className="mt-2 text-[12.5px] text-muted-foreground leading-relaxed">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {approaches.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-white p-7 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_18px_36px_-22px_rgb(15_23_42/0.18)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                <a.icon className="h-[18px] w-[18px]" />
              </div>
              <h3 className="mt-6 text-[16px] font-semibold tracking-tight leading-snug text-foreground text-balance">
                {a.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground text-pretty">
                {a.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
