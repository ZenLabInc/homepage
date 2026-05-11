"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Eye, Layers, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const commitments = [
  {
    no: "01",
    icon: Eye,
    title: "進捗とコストの、完全な透明性",
    body:
      "毎週、進捗レポートと工数の内訳を共有します。判断材料が揃った状態で、毎月「続ける／止める／方向転換」を選んでいただける契約形態が基本です。",
    points: [
      "週次レポート + 月次定例",
      "工数の内訳を時間単位で開示",
      "中断時の引き継ぎを契約に明記",
    ],
  },
  {
    no: "02",
    icon: Layers,
    title: "段階契約で、決めきれない不安をなくす",
    body:
      "PoC・本実装・運用は別契約。先に大きな金額を決めません。各フェーズの成果を見て次に進むかを判断していただけるため、「やってみたら違った」という事故を構造的に防ぎます。",
    points: [
      "PoC：固定見積 / 短期",
      "本実装：PoC結果を受けて再見積",
      "運用：月額 or スポット選択可",
    ],
  },
  {
    no: "03",
    icon: GraduationCap,
    title: "内製化を前提に設計、卒業まで支援",
    body:
      "ロックインしません。設計書・引き継ぎドキュメント・社内勉強会・ペアプロまで、お客様の社内チームに技術が残る形で進めます。最終的にZenLabが不要になることが理想です。",
    points: [
      "設計書 / 運用手順書を必ず納品",
      "社内勉強会・ペアプロ対応",
      "採用・チーム立ち上げ相談も可",
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
          description="AI開発はやってみないと分からない領域です。だからこそ、「決めきれない不安」を当事者の判断で減らせる契約・進行体制を取っています。"
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
            { label: "契約形態", value: "準委任 / 請負 切替可" },
            { label: "請求", value: "月次締め · 翌月末払い" },
            { label: "NDA", value: "ご希望に応じて先行締結" },
            { label: "情報の取扱い", value: "国内サーバーで完結する構成にも対応" },
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
