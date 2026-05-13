"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sprout, Pencil, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const principles = [
  {
    icon: Sprout,
    title: "「拡張」を選ぶ、「置き換え」ではなく",
    body:
      "AIで人間の手を消すのは簡単だ。だが消したあとに残るのは、考えなくなった人と、誰のものでもない成果物だ。私たちはあなたを置き換える道具ではなく、あなたを拡張する道具をつくる。",
  },
  {
    icon: Pencil,
    title: "使った瞬間から「考える」が始まる",
    body:
      "良い道具は、ボタン一つで完成を吐き出さない。使い手に問いを返し、選択を要求し、craft する余白を残す。手を動かすことを、面倒さではなく、価値として設計する。",
  },
  {
    icon: Users,
    title: "AIは、あなたのスタッフ",
    body:
      "主役は最後まで、あなただ。AIは監督ではない。あなたが描いた像を理解し、技術的な手間を引き受け、あなたが思考に集中できる状態をつくる、優秀なスタッフであるべきだ。",
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="relative py-24 md:py-32 border-t border-border"
    >
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="立場"
          title={
            <>
              道具は、
              <br className="hidden sm:inline" />
              <span className="accent-gradient">考えるためにある。</span>
            </>
          }
          description="SNS、ショート動画、生成AI。便利さの裏で、深い思考と作る喜びが少しずつ削られている。私たちはそれを取り戻すための道具をつくる。良い道具とは、人間を受動的にしないものだ。"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {principles.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-white p-7 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_18px_36px_-22px_rgb(15_23_42/0.18)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                <p.icon className="h-[18px] w-[18px]" />
              </div>
              <h3 className="mt-6 text-[16px] font-semibold tracking-tight leading-snug text-foreground text-balance">
                {p.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground text-pretty">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-2xl border border-border bg-muted/40 p-7 md:p-9"
        >
          <div className="text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground/80">
            いま、つくっているもの
          </div>
          <p className="mt-3 text-[14.5px] leading-[1.95] text-foreground/90 max-w-2xl text-pretty">
            まずは、映像と3Dアニメーションの craft を増幅する道具から始めています。AIが動画を「生成する」のではなく、人間が監督として作る力を、AIで増幅する方向で。詳しいことは、形になってから。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
