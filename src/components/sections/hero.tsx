"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-36 pb-32 md:pt-48 md:pb-44 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg-fine grid-mask-radial opacity-50" />
      <div className="absolute inset-0 -z-10 hero-glow" />

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            株式会社ZenLab
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mt-5 text-[clamp(1.9rem,4.4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] heading-gradient text-balance"
          >
            <span className="accent-gradient">AI</span>
            <span className="inline-block">×ロボットアームで、</span>
            <br className="hidden sm:inline" />
            <span className="inline-block">中小企業の手作業を</span>
            <span className="inline-block">自動化する。</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-7 mx-auto max-w-2xl text-[15px] sm:text-base leading-loose text-muted-foreground text-balance"
          >
            品目がよく変わる、数が少ない。だから自動化できずに人がやっている作業があります。
            <br className="hidden sm:inline" />
            人に教えるのと同じ手間で作業を覚える、軽くて安いロボットアームをつくっています。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-10 flex items-center justify-center"
          >
            <Button asChild size="lg">
              <Link href="#contact">
                お問い合わせ
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
