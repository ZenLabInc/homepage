"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Mic,
  Headset,
  BarChart3,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

type Product = {
  slug: string;
  name: string;
  kana: string;
  icon: LucideIcon;
  summary: string;
  uses: string[];
  audience: string;
};

const products: Product[] = [
  {
    slug: "zenknowledge",
    name: "ZenKnowledge",
    kana: "ゼンナレッジ",
    icon: BookOpen,
    summary: "社内ドキュメントに何でも答える、社内専用AIアシスタント。",
    uses: [
      "社内規定・マニュアル・議事録に対するQ&A",
      "PDF・Word・Notion・Google Driveからの自動学習",
      "出典付き回答で安心して業務利用",
    ],
    audience: "社内問い合わせが多い人事・総務・情シス部門",
  },
  {
    slug: "zenagent",
    name: "ZenAgent",
    kana: "ゼンエージェント",
    icon: Bot,
    summary:
      "Slack・Gmail・スプレッドシートをつないで業務を自動で進めるAIエージェント。",
    uses: [
      "定型メールの起案・送信前確認フロー",
      "スプレッドシート更新と関係者への通知",
      "複数ツールをまたぐ業務の代行",
    ],
    audience: "反復業務に時間を取られているバックオフィス",
  },
  {
    slug: "zenmeeting",
    name: "ZenMeeting",
    kana: "ゼンミーティング",
    icon: Mic,
    summary: "会議音声から議事録・要点・タスクを自動生成。",
    uses: [
      "Zoom / Google Meet / 対面録音の文字起こし",
      "要点・決定事項・ToDoの自動抽出",
      "担当者ごとのタスク振り分けと自動配信",
    ],
    audience: "会議が多いマネジメント層・営業チーム",
  },
  {
    slug: "zensupport",
    name: "ZenSupport",
    kana: "ゼンサポート",
    icon: Headset,
    summary: "既存FAQと過去対応履歴から学ぶ顧客サポートAI。",
    uses: [
      "チャット・メール問い合わせの一次対応",
      "過去対応に基づく回答案の自動生成",
      "有人エスカレーションの自動判定",
    ],
    audience: "問い合わせ対応に追われるCS部門・ECサイト運営者",
  },
  {
    slug: "zeninsight",
    name: "ZenInsight",
    kana: "ゼンインサイト",
    icon: BarChart3,
    summary: "自分の会社のデータに、日本語で質問できる。",
    uses: [
      "売上・顧客データへの自然言語クエリ",
      "グラフ・ダッシュボードの自動生成",
      "既存DB(MySQL / PostgreSQL / BigQuery 等)に接続",
    ],
    audience: "SQLが書けない経営層・現場マネージャー",
  },
  {
    slug: "zeneval",
    name: "ZenEval",
    kana: "ゼンエバル",
    icon: Gauge,
    summary:
      "自社で使っているAIの品質・コスト・ハルシネーションを見える化。",
    uses: [
      "AI出力の品質モニタリングとアラート",
      "モデル別・プロンプト別のコスト分析",
      "失敗パターンの自動検出と改善提案",
    ],
    audience: "既にAIを本番運用しているIT部門・AI推進担当",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="section-edge py-24 md:py-32 border-t border-border"
    >
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="提供サービス"
          title={
            <>
              <span className="accent-gradient">今すぐ無料</span>で
              <br className="hidden sm:inline" />
              お試しいただけます。
            </>
          }
          description="ZenLabが自社で開発・運用しているAIプロダクトです。無料トライアルからお試しください。"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group relative flex flex-col rounded-2xl border border-border bg-white p-7 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_18px_36px_-22px_rgb(15_23_42/0.18)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                <p.icon className="h-[18px] w-[18px]" />
              </div>

              <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <h3 className="text-[18px] font-semibold tracking-tight text-foreground">
                  {p.name}
                </h3>
                <span className="text-[11.5px] text-muted-foreground">
                  {p.kana}
                </span>
              </div>

              <p className="mt-3 text-[13.5px] leading-relaxed text-foreground/85 text-pretty">
                {p.summary}
              </p>

              <div className="mt-5 pt-5 border-t border-border">
                <div className="text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/80">
                  主な用途
                </div>
                <ul className="mt-3 space-y-2">
                  {p.uses.map((u) => (
                    <li
                      key={u}
                      className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/85"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        className="mt-[5px] shrink-0 text-accent"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 7.5 L5.5 10.5 L11.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-5 text-[11.5px] text-muted-foreground leading-relaxed">
                想定顧客: {p.audience}
              </p>

              <div className="mt-7 pt-1">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  <Link
                    href={`/products/${p.slug}`}
                    aria-label={`${p.name}を無料で試す`}
                  >
                    無料で試す
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
