"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SITE } from "@/lib/site";

const companyFacts: { label: string; value: React.ReactNode }[] = [
  {
    label: "社名",
    value: (
      <>
        {SITE.nameJa} <span className="text-muted-foreground">({SITE.legalName})</span>
      </>
    ),
  },
  { label: "代表", value: SITE.representative },
  { label: "事業内容", value: SITE.businessDescription },
  { label: "設立", value: SITE.founded },
  { label: "所在地", value: SITE.address },
];

const career = [
  {
    year: "2021",
    company: "dip 株式会社",
    role: "バイト求人掲載サービスのバックエンド開発",
  },
  {
    year: "2022",
    company: "位置情報デバイス開発会社",
    role: "Webアプリケーション開発 / 営業 / 広報",
  },
  {
    year: "2023",
    company: "株式会社マイナビ",
    role:
      "AI議事録サービス開発 / ダイレクトリクルーティング開発 (エンジニア → PM → PMO → 課長)",
  },
  {
    year: "2026",
    company: "株式会社ゼンラボ",
    role: "創業 / 代表取締役",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 border-t border-border"
    >
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              誰が、どんな経歴で、
              <br className="hidden sm:inline" />
              手を動かすのか。
            </>
          }
          description="少人数のスタートアップだからこそ、誰が要件定義から実装まで動くのかを明示します。属人化に見えるかもしれませんが、これは「同じ人間が一気通貫で見る」という設計です。"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.15fr]">
          {/* Company facts */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-white p-7 md:p-8 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                <Building2 className="h-[18px] w-[18px]" />
              </div>
              <h3 className="text-[15px] font-semibold tracking-tight">
                会社情報
              </h3>
            </div>

            <dl className="mt-6 divide-y divide-border">
              {companyFacts.map((f) => (
                <div
                  key={f.label}
                  className="grid grid-cols-[88px_1fr] gap-5 py-3.5"
                >
                  <dt className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground pt-[3px]">
                    {f.label}
                  </dt>
                  <dd className="text-[13.5px] text-foreground leading-relaxed">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.article>

          {/* Representative profile */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-border bg-white p-7 md:p-8 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]"
          >
            <div className="flex items-start gap-4">
              <div
                aria-hidden
                className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-semibold text-accent tracking-tight text-[15px]"
              >
                Y.H.
              </div>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Representative Director
                </div>
                <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                  <span className="text-[20px] font-semibold tracking-tight text-foreground">
                    {SITE.representative}
                  </span>
                  <span className="text-[12.5px] text-muted-foreground">
                    {SITE.representativeKana} · {SITE.representativeRomaji}
                  </span>
                </div>
              </div>
            </div>

            <ol className="mt-7 relative">
              {career.map((c, i) => (
                <li
                  key={`${c.year}-${c.company}`}
                  className="relative flex gap-5 pb-6 last:pb-0"
                >
                  {i !== career.length - 1 && (
                    <span className="absolute top-3 left-[5px] h-[calc(100%-8px)] w-px bg-border" />
                  )}

                  <div className="relative shrink-0 w-[78px] flex items-start gap-3">
                    <span className="relative z-10 mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full border-2 border-accent bg-white" />
                    <span className="text-[12px] font-mono font-medium text-foreground pt-[1px]">
                      {c.year}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-[14px] font-medium text-foreground">
                      {c.company}
                    </div>
                    <div className="text-[12.5px] text-muted-foreground leading-relaxed mt-0.5">
                      {c.role}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
