"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
    <section className="relative pt-36 pb-32 md:pt-44 md:pb-40 overflow-hidden">
      {/* Backdrop layers */}
      <div className="absolute inset-0 -z-10 grid-bg grid-mask-radial opacity-70" />
      <div className="absolute inset-0 -z-10 hero-glow" />
      <div className="absolute inset-x-0 -top-24 -z-10 h-[480px] bg-gradient-to-b from-accent/[0.07] via-transparent to-transparent blur-3xl" />

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
            className="mt-7 text-[15.5px] sm:text-[17px] leading-[1.75] text-muted-foreground max-w-2xl mx-auto text-pretty"
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
            className="mt-7 text-xs text-muted-foreground/70"
          >
            初回相談 60分 · 課題ヒアリング無料 · NDA対応
          </motion.p>
        </div>

        {/* Hero "console" — visualizes a quiet autonomous run */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <HeroConsole />
        </motion.div>

        {/* Stack marquee */}
        <div className="mt-20 relative">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-6">
            Built with the stack we trust in production
          </p>
          <div className="relative overflow-hidden mask-fade-x">
            <div className="flex w-max animate-marquee gap-12 pr-12">
              {[...stack, ...stack].map((s, i) => (
                <div
                  key={`${s}-${i}`}
                  className="text-sm text-muted-foreground/80 font-medium whitespace-nowrap"
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
 * Mock-console window suggesting a quiet autonomous AI agent at work.
 */
function HeroConsole() {
  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-[20px] bg-gradient-to-b from-foreground/20 via-foreground/5 to-transparent opacity-60 blur-md" />
      <div className="relative glass-strong rounded-[20px] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-border/70">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          </div>
          <div className="text-[11px] font-mono text-muted-foreground/70">
            zenlab.agent · run #4291
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
            <span className="text-[11px] text-muted-foreground/80">running</span>
          </div>
        </div>

        <div className="grid md:grid-cols-[1.1fr_1fr] divide-y md:divide-y-0 md:divide-x divide-border/70">
          <div className="p-6 font-mono text-[12.5px] leading-7 text-foreground/90 space-y-1.5 min-h-[220px]">
            <ConsoleLine prompt="user">
              先月の問い合わせ傾向をまとめて、対応マニュアルを更新して
            </ConsoleLine>
            <ConsoleLine prompt="agent" muted>
              <span className="text-accent">→</span> Salesforceから対応履歴を取得 (1,284件)
            </ConsoleLine>
            <ConsoleLine prompt="agent" muted>
              <span className="text-accent">→</span> Notion の既存マニュアルを参照
            </ConsoleLine>
            <ConsoleLine prompt="agent" muted>
              <span className="text-accent">→</span> 増加カテゴリ 3件を抽出 · ドラフト生成
            </ConsoleLine>
            <ConsoleLine prompt="agent">
              <span className="text-emerald-400">✓</span> マニュアル v2.4 を Notion に下書き保存しました
            </ConsoleLine>
          </div>

          <div className="p-6 space-y-4 min-h-[220px]">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
              Active integrations
            </div>
            <div className="grid grid-cols-2 gap-2">
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
                  className="flex items-center gap-2 rounded-lg border border-border/70 bg-background/40 px-3 py-2 text-[12.5px] text-foreground/85"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
                  {s}
                </div>
              ))}
            </div>
            <div className="pt-2 grid grid-cols-3 gap-3 text-[11px]">
              <Stat label="平均応答" value="1.4s" />
              <Stat label="成功率" value="99.2%" />
              <Stat label="今月の処理" value="12.8k" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsoleLine({
  prompt,
  muted,
  children,
}: {
  prompt: "user" | "agent";
  muted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span
        className={
          prompt === "user"
            ? "text-muted-foreground/60 select-none"
            : "text-accent/80 select-none"
        }
      >
        {prompt === "user" ? "$" : "›"}
      </span>
      <span className={muted ? "text-foreground/70" : "text-foreground"}>
        {children}
      </span>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/70 bg-background/40 px-3 py-2.5">
      <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70">
        {label}
      </div>
      <div className="mt-0.5 text-base font-semibold tracking-tight">
        {value}
      </div>
    </div>
  );
}
