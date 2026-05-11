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
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2.4rem,5.6vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.02em] heading-gradient text-balance"
          >
            業務に溶け込む、
            <br className="hidden sm:inline" />
            <span className="accent-gradient">自律するAI</span>を。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-7 text-[15.5px] sm:text-[17px] leading-[1.85] text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            株式会社ZenLabは、AI・ロボティクスを活用した
            <br className="hidden sm:inline" />
            <span className="text-foreground font-medium">業務自動化に特化</span>した受託開発スタジオです。
            <br />
            業務理解から実装まで一気通貫で支援し、現場で確実に使えるシステムを構築します。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg">
              <Link href="#contact">
                無料相談する
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-7 text-xs text-muted-foreground/80"
          >
            初回ヒアリング 30〜60分・無料 / 準委任契約のみ / NDA対応
          </motion.p>
        </div>
      </div>
    </section>
  );
}
