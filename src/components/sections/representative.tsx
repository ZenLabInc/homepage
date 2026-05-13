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
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-foreground/30" />
            代表から
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-tight text-foreground"
        >
          なぜ、この会社を始めたか。
        </motion.h2>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-border bg-white p-7 md:p-10 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:gap-7 lg:gap-9">
            <div className="relative mx-auto sm:mx-0 w-full max-w-[220px] sm:max-w-none sm:w-[180px] lg:w-[200px] aspect-[3/4] shrink-0 overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]">
              <Image
                src="/founder.jpg"
                alt={SITE.representative}
                fill
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 180px, 220px"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex-1 min-w-0 mt-6 sm:mt-0">
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
              <p className="mt-3 text-[12.5px] text-muted-foreground leading-relaxed">
                バックエンドエンジニアから、PM・PMO・課長を経て、2026年にZenLabを創業。
              </p>
            </div>
          </div>

          <div className="mt-10 pt-9 border-t border-border space-y-5 text-[14.5px] leading-[1.95] text-foreground/90 text-pretty">
            <p>
              ある日、気づきました。スマホを開けば短い動画が流れ、AIに頼めば文章が返ってくる。手を動かさないことが、いつのまにか「自然」になっていた。
            </p>
            <p>
              便利です。だが何かが減っている。考える時間。組み立てる楽しさ。「自分の手で作った」と言える瞬間。
            </p>
            <p>
              エンジニアとして働く中で、私はAIで業務の手間を減らす仕事に多く関わってきました。それは確かに、人を助ける仕事だった。だが同時に、便利さと引き換えに、その人から考える機会が一つずつ消えていく構図にも、気づくようになりました。
            </p>
            <p>
              「人間の代わりに作る」AIが増えていく今、私は逆を選びたい。人間がもう一度、作り手として立てる道具を。craft の手応えごと、取り戻せる道具を。
            </p>
            <p className="text-foreground font-medium">
              ZenLab は、その始まりです。一人から始めて、同じ違和感を持つ人たちと、少しずつかたちにしていきます。
            </p>
          </div>

          <div className="mt-10 pt-9 border-t border-border">
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
        </motion.article>
      </div>
    </section>
  );
}
