"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Wallet, Layers, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const commitments = [
  {
    no: "01",
    icon: Wallet,
    title: "工数のみで請求、準委任のみ",
    body:
      "エンジニアが手を動かした工数を、そのままご請求します。営業マージンを上乗せしません。契約形態は準委任のみで、固定報酬で抱え込む形は取りません。",
    points: [
      "工数 × 単価のみ (営業マージンなし)",
      "準委任 — 結果保証ではなく報告と判断材料の提供",
      "追加が必要な場合は事前に明示してご相談",
    ],
  },
  {
    no: "02",
    icon: Layers,
    title: "段階契約で、決めきれない不安をなくす",
    body:
      "初回相談 30〜60分は無料。そこからプロトタイプ → 本実装 → 運用・改善・引き継ぎサポートまで、フェーズごとに別契約。先に大きな金額を決めません。",
    points: [
      "初回相談 30〜60分・無料",
      "プロトタイプ → 本実装 → 運用 を段階契約",
      "各フェーズの結果を見て次に進むかを判断",
    ],
  },
  {
    no: "03",
    icon: BookOpen,
    title: "ドキュメント・勉強会で、内製化まで支援",
    body:
      "使用した技術・設計・マニュアルをドキュメントにして、プロトタイプ時と本実装時にシステムと一緒に納品。使い方の勉強会も対応し、最終的に貴社単独で運用・改善できる状態を目指します。",
    points: [
      "設計書 / 運用手順書を必ず納品 (工数に含む)",
      "使い方の勉強会対応 (工数 + 交通費分のみ)",
      "引き継ぎ後の単発サポートも対応可",
    ],
  },
];

export function Commitments() {
  return (
    <section
      id="commitments"
      className="relative py-24 md:py-32 border-t border-border bg-muted/40"
    >
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Our Commitments"
          title={
            <>
              <span className="accent-gradient">3つの約束</span>で、
              <br className="hidden sm:inline" />
              「外注」の不安を構造で解消する。
            </>
          }
          description="AI開発はやってみないと分からない領域です。だからこそ、料金・契約・引き継ぎの不安を、こちら側の構造でなくします。"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {commitments.map((c, i) => (
            <motion.article
              key={c.no}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative rounded-2xl border border-border bg-white p-7 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/8 text-accent border border-accent/20">
                  <c.icon className="h-[18px] w-[18px]" />
                </div>
                <span className="text-xs font-mono text-muted-foreground/80">
                  {c.no}
                </span>
              </div>
              <h3 className="mt-6 text-[16.5px] font-semibold tracking-tight leading-snug text-foreground text-balance">
                {c.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground text-pretty">
                {c.body}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4">
                {c.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-[12.5px] text-foreground/85"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="mt-[3px] shrink-0 text-accent"
                      fill="none"
                    >
                      <path
                        d="M2.5 7.5 L5.5 10.5 L11.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Trust strip — practical contract terms */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
        >
          {[
            { label: "契約形態", value: "準委任のみ (固定報酬制ではありません)" },
            { label: "請求", value: "エンジニア工数 + 必要交通費 のみ" },
            { label: "初回相談", value: "30〜60分 / 無料・NDA可" },
            { label: "引き継ぎ", value: "ドキュメント納品 + 勉強会対応" },
          ].map((item) => (
            <div key={item.label} className="bg-white px-6 py-5">
              <div className="text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/80">
                {item.label}
              </div>
              <div className="mt-1.5 text-[13.5px] font-medium text-foreground">
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
