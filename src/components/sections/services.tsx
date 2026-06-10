"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Megaphone,
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
    summary:
      "AI組織運営のノウハウを蓄積・参照するための社内ナレッジ管理AI。ZenLabが自社の運営知見を溜め続けるための基盤として実際に使っています。",
    uses: [
      "AI組織の運営ノウハウ・意思決定ログを横断して管理",
      "「どこに何があるか・誰が何を言ったか」を出典付きで即答",
      "社内ナレッジの属人化を解消し、組織の記憶を維持",
    ],
    audience: "AI組織の運用知見を資産として蓄積・活用したい組織",
  },
  {
    slug: "zenmedia",
    name: "ZenMedia",
    kana: "ゼンメディア",
    icon: Megaphone,
    summary:
      "AI組織運営のノウハウを発信し、顧客への導線を作るメディア運営AI。ZenLabが自社の集客フライホイールを回すために実際に動かしています。",
    uses: [
      "AI組織運営をテーマにしたコンテンツ企画・制作・投稿",
      "YouTube・SNS・ブログを横断した継続発信の運用",
      "反応分析をもとにした発信テーマの改善サイクル",
    ],
    audience: "AI組織運営のノウハウで見込み客への導線を作りたい組織",
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
          eyebrow="自社AI組織"
          title={
            <>
              AI組織で実際に動かしている、
              <br className="hidden sm:inline" />
              <span className="accent-gradient">2つのサービス</span>。
            </>
          }
          description="ZenLab が自社のAI組織運営フライホイールを回すために実際に使っているサービスです。「AI組織をうまく運営している」ことの証明であり、顧客へのノウハウ提供の源泉でもあります。"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {products.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
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
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link
                    href="/#contact"
                    aria-label={`${p.name}を相談する`}
                  >
                    相談する
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
