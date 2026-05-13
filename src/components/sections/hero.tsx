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
            株式会社
            <span className="accent-gradient">ZenLab</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mt-6 text-[clamp(1.1rem,2.2vw,1.45rem)] font-medium tracking-tight text-foreground text-balance"
          >
            とにかく使いやすいAIシステムを、あなたの会社へ。
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-7 text-[15.5px] sm:text-[17px] leading-[1.85] text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            ZenLab(ゼンラボ)は「とにかく使いやすいAIシステムを構築する」ことに特化した会社です。
            <br className="hidden sm:inline" />
            お客様の既存のシステムと連携したAIシステムをカスタムで開発することもできますし、
            <br className="hidden sm:inline" />
            私たちが提供しているサービスの中からお客様に合うものを選んでご使用いただくこともできます。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg">
              <Link href="#services">
                サービスを見る
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#custom-development">
                受託開発の相談をする
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
