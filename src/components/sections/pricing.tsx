"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Wallet, Layers, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const items = [
  {
    no: "01",
    icon: Wallet,
    title: "工数のみで請求、準委任のみ",
    points: [
      "開発にかかったエンジニアの工数のみを請求します",
      "営業マージンを上乗せしません",
      "契約形態は準委任のみです",
    ],
  },
  {
    no: "02",
    icon: Layers,
    title: "段階契約、初回ヒアリングは無料",
    points: [
      "初回ヒアリングは30〜60分で無料",
      "プロトタイプ作成まで / 本実装まで / 運用・改善・引き継ぎサポートまで、それぞれを段階的に契約できます",
      "各フェーズの結果を見て、次に進むかを判断していただけます",
    ],
  },
  {
    no: "03",
    icon: BookOpen,
    title: "ドキュメント納品 + 勉強会対応",
    points: [
      "使用した技術・設計・マニュアルをドキュメント化し、プロトタイプ作成時と本実装時にシステムと一緒に納品します(工数分が請求に含まれます)",
      "使い方の勉強会も対応可能です(工数分と交通費分が請求に含まれます)",
    ],
  },
];

const roles = [
  {
    role: "AI プロジェクトリード",
    desc: "要件定義 / 設計 / マネジメント",
    rate: "150万円",
  },
  {
    role: "AI ミドルエンジニア",
    desc: "AI実装経験あり・実装主担当",
    rate: "110万円",
  },
  {
    role: "ジュニアエンジニア",
    desc: "Web実装経験 + AI構築を習得中",
    rate: "80万円",
  },
];

const teams = [
  { name: "1人体制", composition: "リード単独", rate: "150万円" },
  {
    name: "1.5人体制",
    composition: "リード(0.5)+ ミドル(1.0)",
    rate: "185万円",
  },
  {
    name: "2人体制",
    composition: "リード(1.0)+ ミドル(1.0)",
    rate: "260万円",
  },
];

const facts = [
  { label: "契約形態", value: "準委任のみ" },
  { label: "請求", value: "エンジニア工数 + 必要経費 のみ" },
  { label: "初回ヒアリング", value: "30〜60分 / 無料" },
  { label: "引き継ぎ", value: "ドキュメント納品 + 勉強会(任意)" },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 border-t border-border"
    >
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="料金と契約"
          title={
            <>
              <span className="accent-gradient">工数のみ</span>で請求、
              <br className="hidden sm:inline" />
              準委任契約のみです。
            </>
          }
          description="営業マージンを上乗せしません。「決めきれない不安」を、段階契約と透明な請求で構造的に解消します。"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.no}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative rounded-2xl border border-border bg-white p-7 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                  <item.icon className="h-[18px] w-[18px]" />
                </div>
                <span className="text-xs font-mono text-muted-foreground/80">
                  {item.no}
                </span>
              </div>

              <h3 className="mt-6 text-[16.5px] font-semibold tracking-tight leading-snug text-foreground text-balance">
                {item.title}
              </h3>

              <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/85"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="mt-[5px] shrink-0 text-accent"
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
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Monthly rate examples */}
        <div className="mt-14">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-[18px] font-semibold tracking-tight text-foreground"
          >
            月額目安(税抜)
          </motion.h3>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {/* 役割別の人月単価 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border bg-white shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] overflow-hidden"
            >
              <div className="px-6 py-3.5 border-b border-border bg-muted/40">
                <div className="text-[12px] font-medium text-muted-foreground">
                  役割別の人月単価
                </div>
              </div>
              <ul className="divide-y divide-border">
                {roles.map((r) => (
                  <li
                    key={r.role}
                    className="grid grid-cols-[1fr_auto] items-center gap-4 px-6 py-4"
                  >
                    <div className="min-w-0">
                      <div className="text-[13.5px] font-medium text-foreground">
                        {r.role}
                      </div>
                      <div className="text-[11.5px] text-muted-foreground mt-0.5 leading-relaxed">
                        {r.desc}
                      </div>
                    </div>
                    <div className="text-[15px] font-semibold tracking-tight text-foreground tabular-nums shrink-0">
                      {r.rate}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 標準的なチーム構成 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-2xl border border-border bg-white shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] overflow-hidden"
            >
              <div className="px-6 py-3.5 border-b border-border bg-muted/40">
                <div className="text-[12px] font-medium text-muted-foreground">
                  標準的なチーム構成
                </div>
              </div>
              <ul className="divide-y divide-border">
                {teams.map((t) => (
                  <li
                    key={t.name}
                    className="grid grid-cols-[1fr_auto] items-center gap-4 px-6 py-4"
                  >
                    <div className="min-w-0">
                      <div className="text-[13.5px] font-medium text-foreground">
                        {t.name}
                      </div>
                      <div className="text-[11.5px] text-muted-foreground mt-0.5 leading-relaxed">
                        {t.composition}
                      </div>
                    </div>
                    <div className="text-[15px] font-semibold tracking-tight text-foreground tabular-nums shrink-0">
                      {t.rate}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <p className="mt-4 text-[11.5px] text-muted-foreground leading-relaxed">
            ※ 0.5人月 = 週20時間相当(リードは複数案件を並行で持てる前提)。最終的な単価は案件規模・難易度・期間に応じてご相談ください。
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
        >
          {facts.map((f) => (
            <div key={f.label} className="bg-white px-6 py-5">
              <div className="text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/80">
                {f.label}
              </div>
              <div className="mt-1.5 text-[13.5px] font-medium text-foreground">
                {f.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
