"use client";

import { motion } from "framer-motion";

/* 罫線。画面に入ったとき、左から一度だけ引かれる。 */
export function Rule({ className = "bg-foreground", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`h-px w-full origin-left ${className}`}
    />
  );
}

/* 各セクションの見出し。上に濃い罫線、右に英字の小見出しを置く。 */
export function SectionHeading({
  title,
  en,
}: {
  title: string;
  en: string;
}) {
  return (
    <div>
      <Rule />
      <div className="flex items-baseline gap-4 pt-5">
        <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          {en}
        </span>
      </div>
    </div>
  );
}
