"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Rule } from "@/components/section-heading";

/* トップ。左寄せの組版で、見出しの下に罫線と会社の要点を並べる。 */
const FACTS = [
  { label: "事業", value: "システムの受託開発・ディレクション\nフィジカル AI(ロボット)の開発" },
  { label: "拠点", value: "東京都新宿区" },
  { label: "設立", value: "2026年5月" },
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="container mx-auto max-w-5xl">
        <motion.p {...rise(0)} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-px w-8 bg-accent" />
          ZenLab Inc.
        </motion.p>

        <motion.h1
          {...rise(0.06)}
          className="mt-8 max-w-4xl text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.22] tracking-[-0.03em] text-foreground"
        >
          <span className="inline-block">
            <span className="text-accent">AI</span>を含む
          </span>
          <span className="inline-block">ソフトウェアから</span>
          <span className="inline-block">ハードウェアまで、</span>
          <br className="hidden md:inline" />
          <span className="inline-block">企画・開発・運用を</span>
          <span className="inline-block">一貫して行います。</span>
        </motion.h1>

        <div className="mt-14">
          <Rule delay={0.2} />
        </div>
        <motion.dl {...rise(0.3)} className="grid gap-6 pt-6 sm:grid-cols-[1.6fr_1fr_1fr]">
          {FACTS.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{f.label}</dt>
              <dd className="mt-2 whitespace-pre-line text-[14px] leading-relaxed text-foreground">{f.value}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.div {...rise(0.36)} className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <Link href="#contact">
              お問い合わせ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#services">事業内容を見る</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
