"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONDITIONS = [
  { title: "正確に掴める", body: "狙った物を、狙った所で掴んで運び、置く。" },
  { title: "教えるのが簡単", body: "人にやり方を伝えるくらいの手間で覚える。プログラムや専門知識を要らなくする。" },
  { title: "軽くて、安い", body: "1人で持ち運べ、作業台に置ける。個人や小さな現場でも手が届くことを目指す。" },
  { title: "失敗を知らせる", body: "うまくいかなかったことを検知して、人に伝える。黙って失敗し続けない。" },
];

const TARGETS = [
  "ものづくり・試作で、手がもう1本ほしい作業",
];

export function Services() {
  return (
    <section id="services" className="section-edge py-24 md:py-32 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-tight text-foreground">
          事業内容
        </motion.h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          言葉で頼めば手を貸してくれる、ロボットアームを開発しています。
        </p>

        <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-accent/20 bg-accent/[0.03] p-8 sm:p-12">
          <p className="text-xs font-medium tracking-wider text-accent">開発中 ─ ロボットアーム</p>
          <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            言葉で頼める、作業台の相棒。
          </h3>
          <p className="mt-5 max-w-3xl text-[15px] leading-loose text-foreground/80">
            これまでロボットに作業をさせるには、プログラムや作業ごとの学習が必要で、個人や小さな現場が気軽に使える道具ではありませんでした。
            私たちがつくっているのは、カメラで見て、言葉で指示され、「いや、そうじゃない」と直されながら作業を覚えるアームです。
            頼み方を変えるだけで、いろいろな作業に使えることを目指しています。
          </p>

          <ul aria-label="開発中のアームが満たすべき条件" className="mt-9 grid gap-4 sm:grid-cols-2">
            {CONDITIONS.map((c) => (
              <li key={c.title} className="rounded-2xl border border-border bg-white p-5">
                <p className="text-[15px] font-semibold tracking-tight text-foreground">{c.title}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{c.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-9 rounded-2xl border border-border bg-white p-6 sm:p-7">
            <p className="text-xs font-medium tracking-wider text-muted-foreground">一緒に試したい作業</p>
            <ul className="mt-3 space-y-2">
              {TARGETS.map((t) => (
                <li key={t} className="flex gap-2.5 text-[14px] leading-relaxed text-foreground/85">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
              現在は開発段階です。試してみたい作業があれば、写真や動画を添えてお知らせください。
              できること・できないことを正直にお返しします。
            </p>
          </div>

          <Button asChild className="mt-7">
            <Link href="#contact">使い道を相談する<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
          </Button>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-6 rounded-2xl border border-border bg-white p-8 sm:p-9">
          <p className="text-xs font-medium tracking-wider text-muted-foreground">提供中のサービス</p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">AIを利用したソフトウェア・ロボットの研究開発</h3>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
            AIを利用したソフトウェアとロボットの研究開発を行っています。
            試作と検証を重ね、実際に使える道具や仕組みづくりに取り組んでいます。
          </p>
          <Link href="#contact" className="mt-5 inline-flex items-center gap-1.5 rounded text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            研究開発について相談する<ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </motion.article>
      </div>
    </section>
  );
}
