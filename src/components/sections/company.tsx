"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

const facts: { label: string; value: React.ReactNode }[] = [
  {
    label: "社名",
    value: (
      <>
        {SITE.nameJa}{" "}
        <span className="text-muted-foreground">({SITE.legalName})</span>
      </>
    ),
  },
  { label: "代表", value: SITE.representative },
  { label: "事業内容", value: SITE.businessDescription },
  { label: "設立", value: SITE.founded },
  {
    label: "所在地",
    value: (
      <>
        〒{SITE.addressZip} {SITE.addressLine1}
        <br />
        {SITE.addressLine2}
      </>
    ),
  },
  {
    label: "電話",
    value: (
      <a
        href={`tel:${SITE.phone.replace(/-/g, "")}`}
        className="hover:text-foreground/70 transition-colors"
      >
        {SITE.phone}
      </a>
    ),
  },
  {
    label: "メール",
    value: (
      <a
        href={`mailto:${SITE.email}`}
        className="hover:text-foreground/70 transition-colors"
      >
        {SITE.email}
      </a>
    ),
  },
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

export function Company() {
  return (
    <section
      id="company"
      className="section-edge py-24 md:py-32 border-t border-border"
    >
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-tight text-foreground"
        >
          会社概要
        </motion.h2>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-10 divide-y divide-border rounded-2xl border border-border bg-white shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] overflow-hidden"
        >
          {facts.map((f) => (
            <div
              key={f.label}
              className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-4 px-6 py-4 sm:px-8 sm:py-5"
            >
              <dt className="text-[12.5px] text-muted-foreground pt-[3px]">
                {f.label}
              </dt>
              <dd className="text-[14px] text-foreground leading-relaxed">
                {f.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-[18px] font-semibold tracking-tight text-foreground"
        >
          代表紹介
        </motion.h3>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-6 rounded-2xl border border-border bg-white p-7 md:p-9 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]"
        >
          <div className="flex flex-col sm:flex-row sm:gap-8 lg:gap-10">
            <div className="relative mx-auto sm:mx-0 w-full max-w-[260px] sm:max-w-none sm:w-[220px] lg:w-[240px] aspect-[3/4] shrink-0 overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]">
              <Image
                src="/founder.jpg"
                alt={SITE.representative}
                fill
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 220px, 260px"
                className="object-cover"
              />
            </div>

            <div className="flex-1 min-w-0 mt-7 sm:mt-1">
              <div className="text-[11.5px] text-muted-foreground">
                代表取締役
              </div>
              <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                <span className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-foreground">
                  {SITE.representative}
                </span>
                <span className="text-[12.5px] text-muted-foreground">
                  {SITE.representativeKana}
                </span>
              </div>

              <div className="mt-5 space-y-3 text-[13.5px] leading-[1.85] text-foreground/90 text-pretty">
                <p>
                  「使いやすい」は、機能の数では決まりません。誰の、何のためのシステムかを最後まで考え抜いた人の手によってだけ、本当に現場で使われ続けるものは生まれる——そう思っています。
                </p>
                <p>
                  AIや自動化は、それを叶えるための道具のひとつ。便利な機能を載せて終わりではなく、使う人の手と頭の動きにそっと合うところまで作り込むことを、譲らずにやっています。
                </p>
              </div>

              <div className="mt-7 pt-6 border-t border-border">
                <h4 className="text-[12.5px] font-medium text-muted-foreground mb-5">
                  経歴
                </h4>
                <ol className="relative">
                  {career.map((c, i) => (
                    <li
                      key={`${c.year}-${c.company}`}
                      className="relative flex gap-5 pb-6 last:pb-0"
                    >
                      {i !== career.length - 1 && (
                        <span className="absolute top-3 left-[5px] h-[calc(100%-8px)] w-px bg-border" />
                      )}

                      <div className="relative shrink-0 w-[72px] flex items-start gap-3">
                        <span className="relative z-10 mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full border-2 border-accent bg-white" />
                        <span className="text-[12.5px] font-mono font-medium text-foreground pt-[1px]">
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
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
