"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  MessagesSquare,
  FileSpreadsheet,
  Compass,
  Boxes,
  Library,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const items = [
  {
    icon: MessagesSquare,
    title: "問い合わせ対応が属人化している",
    body:
      "ベテランしか答えられない質問が多く、担当者が抜けると業務が止まる。ナレッジが個人のメモに眠っている。",
  },
  {
    icon: FileSpreadsheet,
    title: "Excelと手作業の積み重ねで時間が溶ける",
    body:
      "コピー＆ペースト、手動集計、定型のメール作成。本来やるべき業務に時間が回らない。",
  },
  {
    icon: Compass,
    title: "AIを導入したいが、進め方がわからない",
    body:
      "ベンダー比較も社内合意形成もできず、結果的に「ChatGPT を全社契約」で止まってしまう。",
  },
  {
    icon: Boxes,
    title: "SaaSが分断され、データが繋がらない",
    body:
      "Salesforce / Notion / Slack / スプレッドシートに情報が散在し、意思決定の解像度が上がらない。",
  },
  {
    icon: Library,
    title: "社内ナレッジが埋もれている",
    body:
      "過去資料・議事録・契約書・マニュアル。検索できないドキュメントは、存在しないのと同じ。",
  },
];

export function Problems() {
  return (
    <section id="problems" className="relative py-24 md:py-32">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Problems"
          title={
            <>
              現場で実際に起きている、
              <br className="hidden sm:inline" />
              地味だが深刻な5つの停滞。
            </>
          }
          description="派手さはないが、毎日確実に時間と利益を失わせている課題。ZenLabは、これらを“静かに自動で動く仕組み”で解消することを得意としています。"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <Card className="h-full p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted border border-border text-foreground">
                  <item.icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mt-5 text-[15.5px] font-semibold tracking-tight text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Card>
            </motion.div>
          ))}
          <ProblemsCTA />
        </div>
      </div>
    </section>
  );
}

function ProblemsCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: 0.3 }}
      className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/[0.06] via-white to-white p-7 flex flex-col justify-between min-h-[220px] shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]"
    >
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative">
        <div className="text-xs uppercase tracking-[0.18em] text-accent">
          Insight
        </div>
        <p className="mt-4 text-[15.5px] font-medium leading-snug text-foreground text-balance">
          多くの現場で必要なのは、最先端のモデルではなく、業務に静かに溶け込む「動く仕組み」です。
        </p>
      </div>
      <div className="relative mt-5 text-[12.5px] text-muted-foreground">
        — ZenLab Engineering Notes
      </div>
    </motion.div>
  );
}
