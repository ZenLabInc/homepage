"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Item = {
  kind: string;
  title: string;
  body: string;
  status?: string;
  cta?: boolean;
  href?: string;
};

const items: Item[] = [
  {
    kind: "Product",
    title: "非接触の設備モニタリング",
    status: "開発中",
    body: "イベントカメラ——生物の目に着想を得た、明るさの変化だけを捉えるセンサー——で、回転機械の振動を離れた場所から計測する端末を開発しています。センサーを貼らず、配線もせず、カメラ1台で複数の設備を見守る。故障の予兆を捉え、現場が次に何をすべきかまで示すことを目指しています。",
  },
  {
    kind: "Product",
    title: "仕分けくん",
    status: "提供中",
    href: "/shiwakekun",
    body: "税理士事務所向けの請求書受信サービス。顧問先ごとの専用アドレスに請求書を送るだけで、AIが読み取り、整った名前で保存し、freee・マネーフォワードへ自動で届けます。届いていない請求書は月初に自動で督促。事務所の「集める・名前を付ける・上げる・催促する」を無くします。",
  },
  {
    kind: "Service",
    title: "業務のAI化支援",
    cta: true,
    body: "既存の業務プロセスをAIに置き換える設計・開発を受託します。現場の業務を解きほぐし、人手で回していた仕事をAIが担う形へ。自社プロダクト開発で培った知見を、そのまま顧客の現場に。",
  },
];

function goToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function Services() {
  return (
    <section
      id="services"
      className="section-edge py-24 md:py-32 border-t border-border"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-tight text-foreground"
        >
          事業内容
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-5 text-[15px] leading-relaxed text-muted-foreground max-w-2xl"
        >
          ハードウェアとソフトウェアを一気通貫でつくり、現場で確実に動くものを届ける。
          自社プロダクトの開発で得た知見は、そのまま顧客の現場にも活かしています。
        </motion.p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const clickable = Boolean(item.cta || item.href);
            const go = item.href ? () => { window.location.href = item.href as string; } : goToContact;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                onClick={clickable ? go : undefined}
                role={clickable ? "button" : undefined}
                tabIndex={clickable ? 0 : undefined}
                onKeyDown={
                  clickable
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          go();
                        }
                      }
                    : undefined
                }
                className={
                  "rounded-2xl border border-border bg-white p-8 sm:p-9 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] transition-all" +
                  (clickable
                    ? " cursor-pointer hover:border-foreground/20 hover:shadow-[0_8px_24px_-16px_rgb(15_23_42/0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                    : "")
                }
              >
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {item.kind}
                  {item.status && (
                    <span className="inline-flex items-center rounded-full border border-border bg-muted/60 px-2 py-0.5 text-[10px] font-medium normal-case tracking-normal text-muted-foreground">
                      {item.status}
                    </span>
                  )}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">
                  {item.body}
                </p>
                {item.href && (
                  <Link href={item.href} className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent" onClick={(e) => e.stopPropagation()}>
                    サービスの詳細へ
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
                {item.cta && (
                  <p className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent">
                    お問い合わせへ
                    <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
