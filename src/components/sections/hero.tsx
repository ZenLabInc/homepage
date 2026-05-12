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
            <span className="accent-gradient">考える道具</span>を、
            <br className="hidden sm:inline" />
            つくる。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-7 text-[15.5px] sm:text-[17px] leading-[1.85] text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            注意経済が思考を削り、自動化が手を奪っていく。
            <br className="hidden sm:inline" />
            私たちはそれに抵抗する道具をつくる。
            <br />
            AIは、<span className="text-foreground font-medium">あなたの代わりに作るためのものではない</span>。
            <br className="hidden sm:inline" />
            あなたが作る力を、増幅するためのものだ。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg">
              <Link href="#approach">
                考えを読む
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
            一人の作り手から、始まっています。
          </motion.p>
        </div>
      </div>
    </section>
  );
}
