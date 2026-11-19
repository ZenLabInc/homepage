"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const POINTS = [
  { title: "自分で動いて見る", body: "エージェントが見たい所へカメラを動かす。部品の陰や横、ピンの番号まで寄って確かめる。" },
  { title: "照らして撮る", body: "先端のライトで照らす。部屋の明るさに左右されずに撮れる。" },
  { title: "つなぐだけで使える", body: "PC と USB-C 1本でつなぎ、MCP で Claude Code や Codex に追加する。" },
  { title: "手に届く道具に", body: "手に入りやすい部品と 3D プリントでつくり、学生や個人でも手が届く値段を目指す。" },
];

const TARGETS = [
  "Claude Code や Codex と、電子工作・ロボット・IoT など画面の外で動く物をつくっている人",
  "配線や LED の様子を、エージェントに言葉で説明している人",
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
          新しく何かをつくる人の、机の上の相棒になるロボットを開発しています。
        </p>

        <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-accent/20 bg-accent/[0.03] p-8 sm:p-12">
          <p className="text-xs font-medium tracking-wider text-accent">開発中 ─ zarm</p>
          <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Claude Code や Codex に、机の上を見せる腕。
          </h3>
          <p className="mt-5 max-w-3xl text-[15px] leading-loose text-foreground/80">
            AI エージェントと電子工作やロボットをつくるとき、配線や LED の様子は、いまも人が見て言葉で伝えています。
            zarm は、先端にカメラとライトを付けた小さな腕です。エージェントが自分で見たい所へ動かし、照らし、撮って確かめます。
            つくる人が、エージェントのために机の上を確かめなくて済むようにします。
          </p>

          <ul aria-label="zarm でできること" className="mt-9 grid gap-4 sm:grid-cols-2">
            {POINTS.map((c) => (
              <li key={c.title} className="rounded-2xl border border-border bg-white p-5">
                <p className="text-[15px] font-semibold tracking-tight text-foreground">{c.title}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{c.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-9 rounded-2xl border border-border bg-white p-6 sm:p-7">
            <p className="text-xs font-medium tracking-wider text-muted-foreground">使ってほしい人</p>
            <ul className="mt-3 space-y-2">
              {TARGETS.map((t) => (
                <li key={t} className="flex gap-2.5 text-[14px] leading-relaxed text-foreground/85">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
              現在は設計段階です。エージェントに机の上を見せたかった場面があれば、お知らせください。
              見るだけでなく、持つ・渡すまで広げていく予定です。
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
