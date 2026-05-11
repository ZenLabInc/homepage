"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  FlaskConical,
  Repeat,
  Hammer,
  GraduationCap,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    no: "01",
    icon: Headphones,
    title: "無料ヒアリング",
    duration: "30〜60分・無料",
    body:
      "ご要望と既存の業務フローをお聞きし、「どこからAIで自動化できるか」を私たちからご提案します。",
  },
  {
    no: "02",
    icon: FlaskConical,
    title: "プロトタイプ作成",
    duration: "1週間〜1ヶ月",
    body:
      "ご提案内容をもとに、1週間〜1ヶ月でプロトタイプを構築します。実際に触って判断していただける状態にします。",
  },
  {
    no: "03",
    icon: Repeat,
    title: "反復改善",
    duration: "短サイクルで継続",
    body:
      "プロトタイプを元に、改善を何度も繰り返します。「速さ × 何度もの改善」を組み合わせた開発アプローチです。",
  },
  {
    no: "04",
    icon: Hammer,
    title: "本実装",
    duration: "別契約で開始",
    body:
      "プロトタイプから本実装に進みます。使用した技術・設計・マニュアルのドキュメントを、システムと一緒に納品します。",
  },
  {
    no: "05",
    icon: GraduationCap,
    title: "運用・改善・引き継ぎ",
    duration: "ご希望に応じて",
    body:
      "保守料金にてZenLabが保守を担当することも、ドキュメントと勉強会(任意)でお客様自身が保守できるようサポートすることも可能です。",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 border-t border-border bg-muted/40"
    >
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="進め方"
          title={
            <>
              5つのステップで、
              <br className="hidden sm:inline" />
              段階的に進められます。
            </>
          }
          description="プロトタイプ作成まで / 本実装まで / 運用・改善・引き継ぎサポートまで、それぞれを段階的に契約できます。各フェーズの結果を見て、次に進むかを判断していただける構成です。"
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
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
