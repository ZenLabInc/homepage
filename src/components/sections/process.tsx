"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  ScanSearch,
  FlaskConical,
  Repeat,
  GraduationCap,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    no: "01",
    icon: Headphones,
    title: "ヒアリング",
    duration: "30〜60分・無料",
    body: "業務フロー・既存システム・実現したいゴールを共有いただきます。「AIで効くポイント」と「効かないポイント」をその場で切り分けます。",
    deliverables: ["課題マップ", "AI適用ポイント仮置き"],
  },
  {
    no: "02",
    icon: ScanSearch,
    title: "業務分析",
    duration: "1〜2週間",
    body: "業務フロー / データ / 既存ツールを観察し、「まず何を自動化するか」を提案。確実に価値が出る一点に絞ります。",
    deliverables: ["業務フロー図", "自動化候補リスト"],
  },
  {
    no: "03",
    icon: FlaskConical,
    title: "プロトタイプ",
    duration: "1週間〜1ヶ月",
    body: "動くものを最短で構築。社内で実際に触って判断できる状態にし、システムと一緒に技術・設計ドキュメントを納品します。",
    deliverables: ["動くプロトタイプ", "設計ドキュメント"],
  },
  {
    no: "04",
    icon: Repeat,
    title: "反復改善",
    duration: "短サイクルで継続",
    body: "プロトタイプに対して、現場のフィードバックをもとに改善を何度も重ねます。「使えるかどうか」をデータで確認しながら磨きます。",
    deliverables: ["改善ログ", "評価レポート"],
  },
  {
    no: "05",
    icon: GraduationCap,
    title: "本実装 → 引き継ぎ",
    duration: "1〜3ヶ月+",
    body: "プロダクション化、運用、改善を継続。ご希望に応じて、ドキュメント納品と勉強会で内製化まで支援します。",
    deliverables: ["プロダクション実装", "運用手順書 / 勉強会"],
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 border-t border-border"
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
          description="“良さそう”で進めません。各ステップで判断材料を揃え、必要なら止まれる進め方を取ります。スピードと反復改善で「使えるかどうか」を早く確認できる構成です。"
        />

        <div className="mt-14 relative">
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
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] z-10">
                  <s.icon className="h-[16px] w-[16px] text-foreground" />
                  <span className="absolute -bottom-1.5 -right-1.5 rounded-md bg-foreground text-background text-[10px] font-mono font-medium px-1.5 py-0.5">
                    {s.no}
                  </span>
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-white p-5 h-full shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-[15px] font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <span className="text-[10.5px] font-mono text-muted-foreground shrink-0">
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
