"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Target,
  Boxes,
  Gauge,
  Headphones,
  FlaskConical,
  Hammer,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

type Capability = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const capabilities: Capability[] = [
  {
    icon: Boxes,
    title: "既存システムとの連携",
    body: "社内DB、CRM、基幹システムなど、すでに動いているシステムと連携するAIシステムを構築します。デジタル化が進んでいない紙の現場にも対応します。",
  },
  {
    icon: Target,
    title: "業務フローに合わせたカスタムAIエージェント設計",
    body: "「まず何を自動化／半自動化したいか」を端的に明確にすることで、業務に確実に組み込めるAIエージェントを設計します。技術ありきでは始めません。",
  },
  {
    icon: Compass,
    title: "業務理解から始める要件定義",
    body: "ご要望と既存の業務フローをヒアリングし、「どこからAIで自動化できるか」を私たちから提案します。確実に価値が出るところから順に着手します。",
  },
  {
    icon: Gauge,
    title: "評価・モニタリング基盤の構築",
    body: "AI出力の品質、コスト、ハルシネーションを継続的に監視できる基盤を一緒に構築します。本番投入してからも改善し続けられる状態をつくります。",
  },
];

type Role = {
  role: string;
  desc: string;
  rate: string;
};

const roles: Role[] = [
  {
    role: "AI プロジェクトリード",
    desc: "要件定義 / 設計 / マネジメント",
    rate: "150万円〜",
  },
  {
    role: "AI ミドルエンジニア",
    desc: "AI実装経験あり・実装主担当",
    rate: "110万円〜",
  },
  {
    role: "ジュニアエンジニア",
    desc: "Web実装経験 + AI構築を習得中",
    rate: "80万円〜",
  },
];

type Team = {
  name: string;
  composition: string;
  rate: string;
};

const teams: Team[] = [
  { name: "1人体制", composition: "リード単独", rate: "150万円〜" },
  {
    name: "1.5人体制",
    composition: "リード(0.5)+ ミドル(1.0)",
    rate: "185万円〜",
  },
  {
    name: "2人体制",
    composition: "リード(1.0)+ ミドル(1.0)",
    rate: "260万円〜",
  },
];

type Step = {
  no: string;
  icon: LucideIcon;
  title: string;
  duration: string;
  body: string;
};

const steps: Step[] = [
  {
    no: "01",
    icon: Headphones,
    title: "ヒアリング",
    duration: "30〜60分・無料",
    body: "ご要望と既存の業務フローをお聞きし、「どこからAIで自動化できるか」を私たちからご提案します。",
  },
  {
    no: "02",
    icon: FlaskConical,
    title: "要件定義・見積もり",
    duration: "段階契約",
    body: "ご提案内容をもとに要件を整理し、プロトタイプ / 本実装 / 運用支援を段階的に契約できる見積もりをお出しします。",
  },
  {
    no: "03",
    icon: Hammer,
    title: "開発・検証",
    duration: "短サイクルで反復",
    body: "1週間〜1ヶ月でプロトタイプを構築し、実際に触って判断していただける状態にします。「速さ × 何度もの改善」で本実装まで進めます。",
  },
  {
    no: "04",
    icon: GraduationCap,
    title: "納品・運用支援",
    duration: "ご希望に応じて",
    body: "技術・設計・マニュアルをドキュメント化してシステムと一緒に納品します。保守の継続も、勉強会を通じた内製化サポートも可能です。",
  },
];

const contractFacts = [
  { label: "契約形態", value: "準委任のみ" },
  { label: "請求", value: "エンジニア工数 + 必要経費 のみ" },
  { label: "初回ヒアリング", value: "30〜60分 / 無料" },
  { label: "引き継ぎ", value: "ドキュメント納品 + 勉強会(任意)" },
];

export function CustomDevelopment() {
  return (
    <section
      id="custom-development"
      className="relative py-24 md:py-32 border-t border-border bg-muted/40"
    >
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="受託開発"
          title={
            <>
              あなたの会社専用のAIシステムを、
              <br className="hidden sm:inline" />
              <span className="accent-gradient">ゼロから設計します。</span>
            </>
          }
          description="提供サービスでは対応しきれない、業務固有のフローや既存システムとの深い連携が必要な場合は、ゼロからのカスタム開発で承ります。営業マージンを上乗せせず、エンジニア工数のみで請求する透明な契約形態です。"
        />

        {/* 1. 受託開発で対応できること */}
        <div className="mt-14">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-[18px] font-semibold tracking-tight text-foreground"
          >
            受託開発で対応できること
          </motion.h3>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {capabilities.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-white p-7 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_18px_36px_-22px_rgb(15_23_42/0.18)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                  <c.icon className="h-[18px] w-[18px]" />
                </div>
                <h4 className="mt-6 text-[16px] font-semibold tracking-tight leading-snug text-foreground text-balance">
                  {c.title}
                </h4>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground text-pretty">
                  {c.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* 2. 料金例 */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-[18px] font-semibold tracking-tight text-foreground"
          >
            料金例(月額目安・税抜)
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.04 }}
            className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground max-w-2xl text-pretty"
          >
            営業マージンを上乗せせず、エンジニア工数のみで請求します。下記はあくまで目安であり、明確な見積もりは個別相談で算出します。
          </motion.p>

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
            ※ 0.5人月 = 週20時間相当(リードは複数案件を並行で持てる前提)。最終的な単価は案件規模・難易度・期間に応じてご相談ください。明確な見積もりは個別相談でお出しします。
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
          >
            {contractFacts.map((f) => (
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

        {/* 3. 進め方の流れ */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-[18px] font-semibold tracking-tight text-foreground"
          >
            進め方の流れ
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.04 }}
            className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground max-w-2xl text-pretty"
          >
            プロトタイプ作成まで / 本実装まで / 運用・改善・引き継ぎサポートまで、それぞれを段階的に契約できます。各フェーズの結果を見て、次に進むかを判断していただける構成です。
          </motion.p>

          <div className="mt-6 relative">
            <div className="hidden lg:block absolute left-0 right-0 top-[58px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <ol className="grid gap-6 lg:grid-cols-4 lg:gap-4">
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
                      <h4 className="text-[15px] font-semibold tracking-tight">
                        {s.title}
                      </h4>
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-2xl border border-border bg-white p-7 md:p-9 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-xl">
            <h3 className="text-[18px] font-semibold tracking-tight text-foreground">
              まずは無料相談から
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground text-pretty">
              30〜60分のヒアリングで、お客様の業務に対する具体的な提案をその場でお出しします。営業・勧誘は一切ありません。
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="#contact">
              無料相談を申し込む
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
