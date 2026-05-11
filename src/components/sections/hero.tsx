"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Loader2,
  Inbox,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stack = [
  "OpenAI",
  "Anthropic",
  "LangGraph",
  "Vercel AI SDK",
  "Pinecone",
  "Supabase",
  "Next.js",
  "AWS Bedrock",
  "Slack",
  "Notion",
  "Salesforce",
  "Google Workspace",
];

export function Hero() {
  return (
    <section className="relative pt-36 pb-28 md:pt-44 md:pb-36 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg-fine grid-mask-radial opacity-50" />
      <div className="absolute inset-0 -z-10 hero-glow" />

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Badge dot>
              <Sparkles className="h-3 w-3 text-accent" />
              <span>AI Engineering Studio · Tokyo / Remote</span>
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-7 text-[clamp(2.4rem,5.6vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.02em] heading-gradient text-balance"
          >
            業務に溶け込む、
            <br className="hidden sm:inline" />
            <span className="accent-gradient">自律するAI</span>を。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-7 text-[15.5px] sm:text-[17px] leading-[1.85] text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            RAG・AI Agent・業務自動化まで。<br className="hidden sm:inline" />
            業務理解から実装・運用まで一気通貫で支援する、AIエンジニアリングスタジオです。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg">
              <Link href="#contact">
                無料相談する
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#services">サービスを見る</Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 text-xs text-muted-foreground/80"
          >
            初回相談 60分 · 課題ヒアリング無料 · NDA対応
          </motion.p>
        </div>

        {/* Hero panel — business operations preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <OperationsPanel />
        </motion.div>

        {/* Stack marquee */}
        <div className="mt-20 relative">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mb-6">
            実プロダクションで採用している技術スタックの一例
          </p>
          <div className="relative overflow-hidden mask-fade-x">
            <div className="flex w-max animate-marquee gap-12 pr-12">
              {[...stack, ...stack].map((s, i) => (
                <div
                  key={`${s}-${i}`}
                  className="text-sm text-muted-foreground font-medium whitespace-nowrap"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-fade-x {
          mask-image: linear-gradient(
            to right,
            transparent,
            #000 12%,
            #000 88%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            #000 12%,
            #000 88%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}

/**
 * Business operations panel — surfaces a calm, "always-running" AI agent
 * the way an executive would see it: status of recurring work, integrations,
 * and a monthly contribution metric. No CLI, no logs.
 */
function OperationsPanel() {
  return (
    <div className="relative">
      {/* soft outer glow */}
      <div className="absolute -inset-x-10 -top-6 -bottom-6 rounded-[28px] bg-accent/[0.05] blur-2xl -z-10" />

      <div className="rounded-[20px] border border-border bg-white shadow-[0_1px_0_0_hsl(220_13%_95%)_inset,0_1px_2px_0_rgb(15_23_42/0.04),0_30px_60px_-30px_rgb(15_23_42/0.18)] overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/40">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-white">
              <span className="text-[10px] font-mono font-semibold text-foreground">
                Z
              </span>
            </div>
            <div className="text-[13px] font-medium text-foreground">
              ZenLab Agent
            </div>
            <div className="text-[12px] text-muted-foreground hidden sm:inline">
              · 業務常駐中
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11.5px] text-muted-foreground">稼働中</span>
          </div>
        </div>

        <div className="grid md:grid-cols-[1.4fr_1fr] divide-y md:divide-y-0 md:divide-x divide-border">
          {/* Left: recurring tasks */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground/80">
                今日の業務
              </div>
              <div className="text-[11px] text-muted-foreground/80">
                2026/05/11 09:32
              </div>
            </div>
            <ul className="space-y-2.5">
              <TaskRow
                title="毎週の問い合わせサマリ"
                meta="今朝 09:32 完了 · 312件処理 · Slackに通知済"
                state="done"
              />
              <TaskRow
                title="請求書チェック"
                meta="進行中 98 / 120 件 · 異常 2件は担当者にエスカレーション済"
                state="running"
              />
              <TaskRow
                title="提案書ドラフト生成"
                meta="下書き完了 · 承認待ち 3件"
                state="pending"
              />
              <TaskRow
                title="顧客リスト更新"
                meta="昨日 19:00 完了 · Salesforceに反映済"
                state="done"
              />
            </ul>
          </div>

          {/* Right: integrations + impact */}
          <div className="p-6 space-y-5 bg-muted/20">
            <div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground/80 mb-3">
                連携している業務システム
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  "Slack",
                  "Salesforce",
                  "Notion",
                  "Google Drive",
                  "Gmail",
                  "Postgres",
                ].map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2 rounded-md border border-border bg-white px-2.5 py-1.5 text-[12px] text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground/80">
                    今月の貢献
                  </div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-2xl font-semibold tracking-tight text-foreground">
                      132
                    </span>
                    <span className="text-sm text-muted-foreground">時間</span>
                  </div>
                  <div className="mt-0.5 text-[11.5px] text-muted-foreground">
                    手作業から自動処理に置き換え
                  </div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <TrendingUp className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskRow({
  title,
  meta,
  state,
}: {
  title: string;
  meta: string;
  state: "done" | "running" | "pending";
}) {
  const stateUI = {
    done: {
      icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />,
      label: "完了",
      labelClass:
        "text-emerald-700 bg-emerald-50 border-emerald-200/80",
    },
    running: {
      icon: <Loader2 className="h-4 w-4 text-accent animate-spin" />,
      label: "進行中",
      labelClass: "text-accent bg-accent/10 border-accent/30",
    },
    pending: {
      icon: <Inbox className="h-4 w-4 text-amber-600" />,
      label: "承認待ち",
      labelClass: "text-amber-700 bg-amber-50 border-amber-200/80",
    },
  }[state];

  return (
    <li className="flex items-start gap-3 rounded-xl border border-border bg-white px-4 py-3 transition-colors hover:bg-muted/30">
      <div className="mt-0.5">{stateUI.icon}</div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[13.5px] font-medium text-foreground truncate">
            {title}
          </p>
          <span
            className={`shrink-0 text-[10.5px] font-medium px-2 py-0.5 rounded-full border ${stateUI.labelClass}`}
          >
            {stateUI.label}
          </span>
        </div>
        <p className="mt-1 text-[12px] text-muted-foreground leading-relaxed">
          {meta}
        </p>
      </div>
    </li>
  );
}
