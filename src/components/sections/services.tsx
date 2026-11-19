"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    label: "提供中のサービス",
    title: "システム受託開発",
    body: [
      "AIを活用したソフトウェア・システムの開発を受託しています。",
      "準委任契約で開発チームに加わり、設計・実装からプロジェクトの推進まで支援します。",
    ],
    link: "受託開発について相談する",
  },
  {
    label: "開発中 ─ zarm",
    title: "Claude Code や Codex に、机の上を見せる腕。",
    body: [
      "AI エージェントと電子工作やロボットをつくるとき、配線や LED の様子は、いまも人が見て言葉で伝えています。",
      "zarm は、先端にカメラとライトを付けた小さな腕です。エージェントが自分で見たい所へ動かし、照らし、撮って確かめます。",
      "現在は設計段階です。エージェントに机の上を見せたかった場面があれば、お知らせください。",
    ],
    link: "使い道を相談する",
  },
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

        {SERVICES.map((s, i) => (
          <motion.article key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className={`${i === 0 ? "mt-10" : "mt-6"} rounded-2xl border border-border bg-white p-8 sm:p-9`}>
            <p className={`text-xs font-medium tracking-wider ${i === 0 ? "text-muted-foreground" : "text-accent"}`}>{s.label}</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">{s.title}</h3>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-foreground/80">
              {s.body.map((line) => <span key={line} className="block">{line}</span>)}
            </p>
            <Link href="#contact" className="mt-5 inline-flex items-center gap-1.5 rounded text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              {s.link}<ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
