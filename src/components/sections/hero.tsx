"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-36 pb-32 md:pt-48 md:pb-44 overflow-hidden">

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
            className="mt-5 text-[clamp(1.6rem,3.4vw,2.75rem)] font-semibold leading-[1.3] tracking-[-0.02em] heading-gradient text-balance"
          >
            <span className="inline-block">
              <span className="accent-gradient">AI</span>を含む
            </span>
            <span className="inline-block">ソフトウェアから</span>
            <span className="inline-block">ハードウェアまで、</span>
            <br className="hidden sm:inline" />
            <span className="inline-block">企画・開発・運用を</span>
            <span className="inline-block">一貫して行います。</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-12 flex items-center justify-center"
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
