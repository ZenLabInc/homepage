"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  BookOpenCheck,
  Bot,
  Workflow,
  MessagesSquare,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    icon: Compass,
    title: "AI導入支援",
    desc:
      "業務フローの棚卸しからユースケース選定、ROI試算、社内合意形成まで。最初の一歩を確実なものにします。",
    impact: "失敗しないPoCの設計",
    deliverables: ["業務調査レポート", "AIロードマップ", "PoC設計"],
  },
  {
    icon: BookOpenCheck,
    title: "RAG構築",
    desc:
      "社内ドキュメント・契約書・議事録・SaaSデータをまとめて検索可能に。回答品質と更新性を両立する独自RAGを構築します。",
    impact: "ナレッジ検索 -70%",
    deliverables: ["データ取込基盤", "検索/評価パイプライン", "管理UI"],
  },
  {
    icon: Bot,
    title: "AI Agent開発",
    desc:
      "業務に常駐し、自律的に処理を進めるエージェント。Slack・Notion・Salesforce などの実ツールを操作させます。",
    impact: "属人タスクの自動化",
    deliverables: ["Agent定義", "ツール連携", "監視/評価ダッシュボード"],
  },
  {
    icon: Workflow,
    title: "業務自動化",
    desc:
      "ノーコード/コードを使い分け、メール・帳票・データ連携・申請業務を自動化。毎日数時間の手作業を消します。",
    impact: "月間 200h 以上の削減も",
    deliverables: ["ワークフロー設計", "実装", "運用引き継ぎ"],
  },
  {
    icon: MessagesSquare,
    title: "社内AIチャット",
    desc:
      "社内データに安全にアクセスできるチャット。SSO・権限管理・ログ管理・モデル切替に対応した自社ホスト構成も可能です。",
    impact: "全社員のAIリテラシー底上げ",
    deliverables: ["セキュア構成", "RAG接続", "管理コンソール"],
  },
  {
    icon: Code2,
    title: "業務システム開発",
    desc:
      "既存業務に最適化した社内ツールやWebシステムを、Next.js・TypeScript・AWSなどのモダン技術で内製レベルの品質で。",
    impact: "脱SaaS依存の選択肢",
    deliverables: ["要件定義", "設計/実装", "保守・改善"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              AIを“使いこなす”ではなく、
              <br className="hidden sm:inline" />
              業務に“組み込む”ところまで。
            </>
          }
          description="戦略立案・実装・運用までを一気通貫で提供します。単発のPoCで終わらせず、毎日の業務で動き続ける仕組みを設計します。"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative bg-white p-8 transition-colors hover:bg-muted/40"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
                  <s.icon className="h-[18px] w-[18px]" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/60 transition-all duration-300 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="mt-7 text-lg font-semibold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground text-pretty">
                {s.desc}
              </p>

              <div className="mt-6 pt-5 border-t border-border">
                <div className="text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/80">
                  Expected impact
                </div>
                <div className="mt-1 text-[13.5px] font-medium text-foreground">
                  {s.impact}
                </div>
              </div>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-[11px] px-2 py-0.5 rounded-md border border-border bg-muted text-muted-foreground"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
