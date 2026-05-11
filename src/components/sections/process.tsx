"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  ScanSearch,
  FlaskConical,
  Hammer,
  Repeat,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    no: "01",
    icon: Headphones,
    title: "ヒアリング",
    duration: "Day 1–3",
    body: "現場の課題・期待する成果・制約を整理。技術ありきではなく、業務の解像度を上げます。",
    deliverables: ["課題マップ", "成功指標 (KPI) 案"],
  },
  {
    no: "02",
    icon: ScanSearch,
    title: "業務分析",
    duration: "1–2週間",
    body: "業務フロー / データ / 既存ツールを観察し、AIが効くポイントとそうでないポイントを切り分けます。",
    deliverables: ["業務フロー図", "ユースケース優先順位"],
  },
  {
    no: "03",
    icon: FlaskConical,
    title: "PoC",
    duration: "2–4週間",
    body: "1つの確かなユースケースで動くPoCを構築。社内で実際に触って判断できる状態を作ります。",
    deliverables: ["動作するPoC", "効果検証レポート"],
  },
  {
    no: "04",
    icon: Hammer,
    title: "実装",
    duration: "1–3ヶ月",
    body: "本番運用を前提に、セキュリティ・監視・コスト・拡張性を踏まえた本実装を行います。",
    deliverables: ["プロダクション実装", "運用手順書"],
  },
  {
    no: "05",
    icon: Repeat,
    title: "運用改善",
    duration: "継続",
    body: "ログと評価指標を見ながら、品質・コスト・運用負荷を継続的に最適化。卒業も視野に支援します。",
    deliverables: ["評価ダッシュボード", "月次改善レポート"],
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 border-t border-border/60"
    >
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              5つのステップで、
              <br className="hidden sm:inline" />
              曖昧さをそのままにしない。
            </>
          }
          description="“良さそう”で進めません。各ステップで判断材料を揃え、必要なら止まれる進め方を取ります。"
        />

        <div className="mt-14 relative">
          {/* timeline rail */}
          <div className="hidden lg:block absolute left-0 right-0 top-[58px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <ol className="grid gap-6 lg:grid-cols-5 lg:gap-4">
            {steps.map((s, i) => (
              <motion.li
                key={s.no}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative"
              >
                {/* node */}
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] z-10">
                  <s.icon className="h-[16px] w-[16px] text-foreground" />
                  <span className="absolute -bottom-1.5 -right-1.5 rounded-md bg-foreground text-background text-[10px] font-mono font-medium px-1.5 py-0.5">
                    {s.no}
                  </span>
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-white p-5 h-full shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-[15px] font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <span className="text-[10.5px] font-mono text-muted-foreground">
                      {s.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="text-[12px] text-foreground/80 flex items-center gap-2"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent/80" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
