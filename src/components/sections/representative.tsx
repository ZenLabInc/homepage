"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

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

export function Representative() {
  return (
    <section
      id="representative"
      className="relative py-24 md:py-32 border-t border-border bg-muted/40"
    >
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-tight text-foreground"
        >
          代表紹介
        </motion.h2>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-10 rounded-2xl border border-border bg-white p-7 md:p-9 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]"
        >
          <div className="flex flex-col sm:flex-row sm:gap-8 lg:gap-10">
            <div className="relative mx-auto sm:mx-0 w-full max-w-[260px] sm:max-w-none sm:w-[220px] lg:w-[240px] aspect-[3/4] shrink-0 overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]">
              <Image
                src="/founder.jpg"
                alt={SITE.representative}
                fill
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 220px, 260px"
                className="object-cover"
                priority
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

              <p className="mt-5 text-[13.5px] leading-[1.85] text-foreground/90 text-pretty">
                自動化ツール、使いやすいシステムの開発が大好きです！いただいた仕事は全力で取り組みます！
              </p>

              <div className="mt-7 pt-6 border-t border-border">
                <h3 className="text-[12.5px] font-medium text-muted-foreground mb-5">
                  経歴
                </h3>
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
