"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  MessagesSquare,
  Mail,
  Database,
  FileText,
  Cloud,
  Bot,
  Workflow,
  CheckCircle2,
  Slack,
  ChevronsRight,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export function FlowDiagram() {
  return (
    <section
      id="flow"
      className="relative py-24 md:py-32 border-t border-border/60"
    >
      <div className="absolute inset-0 -z-10 grid-bg-fine grid-mask-bottom opacity-40" />
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              業務に常駐するAI Agentが、
              <br className="hidden sm:inline" />
              <span className="accent-gradient">人を介さず</span>必要な処理を進める。
            </>
          }
          description="入力チャネル、ナレッジ・データソース、業務システムを横断して動作。意思決定が必要なところだけ、人間に判断を仰ぐ設計が原則です。"
        />

        <div className="mt-14">
          <FlowGraph />
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <Insight
            num="01"
            title="入力を選ばない"
            body="Slack・チャット・メール・音声・フォーム。どこから来ても、同じAgentが受け取って判断します。"
          />
          <Insight
            num="02"
            title="既存ツールをそのまま使う"
            body="Salesforce / Notion / Drive / 自社DB。新しいツールを増やすのではなく、今あるものを賢く動かします。"
          />
          <Insight
            num="03"
            title="最後の一歩は人間"
            body="重要な意思決定や送信前の最終確認は、必ず人間に。安心して業務に組み込める設計です。"
          />
        </div>
      </div>
    </section>
  );
}

function Insight({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]">
      <div className="text-xs font-mono text-muted-foreground">{num}</div>
      <h4 className="mt-3 text-[15px] font-semibold tracking-tight text-foreground">
        {title}
      </h4>
      <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
        {body}
      </p>
    </div>
  );
}

/* -------- Diagram ------------------------------------------------------- */

const inputs = [
  { icon: Slack, label: "Slack" },
  { icon: Mail, label: "Email" },
  { icon: MessagesSquare, label: "Chat/Form" },
];

const sources = [
  { icon: FileText, label: "Notion" },
  { icon: Cloud, label: "Drive" },
  { icon: Database, label: "DB / SaaS" },
];

const outputs = [
  { icon: Workflow, label: "ワークフロー実行" },
  { icon: CheckCircle2, label: "承認依頼" },
  { icon: FileText, label: "ドキュメント生成" },
];

function FlowGraph() {
  return (
    <div className="relative rounded-3xl border border-border bg-white p-6 sm:p-10 overflow-hidden shadow-[0_1px_0_0_hsl(220_13%_95%)_inset,0_1px_2px_0_rgb(15_23_42/0.04),0_24px_48px_-28px_rgb(15_23_42/0.18)]">
      <div className="absolute inset-0 grid-bg-fine opacity-30" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[540px] rounded-full bg-accent/[0.06] blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
        {/* Inputs */}
        <Column title="Input">
          {inputs.map((n) => (
            <Node key={n.label} icon={n.icon} label={n.label} />
          ))}
        </Column>

        <ArrowGutter />

        {/* Agent core */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto max-w-[280px] rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/[0.06] to-white p-5 text-center shadow-[0_8px_30px_-12px_hsl(var(--accent)/0.35)]"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-white">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-accent/90">
              ZenLab Agent
            </div>
            <div className="mt-1 text-[15px] font-semibold text-foreground">
              業務常駐の自律Agent
            </div>
            <div className="mt-3 text-[12px] text-muted-foreground leading-relaxed">
              ルーティング / RAG / ツール実行 / 検証
            </div>

            {/* Sources branch (knowledge) */}
            <div className="mt-5 border-t border-border pt-4">
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                Knowledge
              </div>
              <div className="flex flex-wrap justify-center gap-1.5">
                {sources.map((s) => (
                  <span
                    key={s.label}
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-white px-2 py-1 text-[11px] text-foreground"
                  >
                    <s.icon className="h-3 w-3 text-muted-foreground" />
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <ArrowGutter />

        {/* Outputs */}
        <Column title="Action">
          {outputs.map((n) => (
            <Node key={n.label} icon={n.icon} label={n.label} />
          ))}
        </Column>
      </div>

      {/* Mobile arrow rail */}
      <div className="lg:hidden mt-6 flex justify-center text-muted-foreground/60 text-xs">
        <ChevronsRight className="h-4 w-4 rotate-90" />
      </div>
    </div>
  );
}

function Column({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground/70 mb-3 lg:text-center">
        {title}
      </div>
      <div className="grid gap-2.5">{children}</div>
    </div>
  );
}

function Node({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted text-foreground">
        <Icon className="h-[15px] w-[15px]" />
      </div>
      <div className="text-sm font-medium text-foreground">{label}</div>
    </motion.div>
  );
}

function ArrowGutter() {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <svg width="80" height="22" viewBox="0 0 80 22" fill="none">
        <line
          x1="2"
          y1="11"
          x2="74"
          y2="11"
          stroke="hsl(var(--border))"
          strokeWidth="1.2"
        />
        <line
          x1="2"
          y1="11"
          x2="74"
          y2="11"
          className="flow-line"
          stroke="hsl(var(--accent))"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M70 6 L78 11 L70 16"
          stroke="hsl(var(--accent))"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
