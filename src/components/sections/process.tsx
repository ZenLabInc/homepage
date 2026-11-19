"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, Rule } from "@/components/section-heading";

/* ご依頼の流れと契約の形。左に流れ、右に契約の形を並べる。 */

const STEPS = [
  { title: "ご相談", body: "お問い合わせフォームからご連絡ください。オンラインでお話を伺います。" },
  { title: "お見積り・ご提案", body: "進め方、期間、費用をまとめてご提案します。" },
  { title: "ご契約", body: "内容に合わせて、請負契約または準委任契約を結びます。" },
  { title: "開発", body: "進み具合を定期的にご報告し、動くものを見ていただきながら進めます。" },
  { title: "納品・運用保守", body: "納品後も、運用と保守を続けてお引き受けできます。" },
];

const CONTRACTS = [
  {
    title: "請負契約",
    body: "つくるものと納期を決め、完成をお約束します。範囲がはっきりした開発に向いています。",
  },
  {
    title: "準委任契約",
    body: "期間と稼働量を決め、開発チームに加わって設計・開発・ディレクションを支援します。",
  },
  {
    title: "秘密保持契約(NDA)",
    body: "ご相談の段階から結べます。御社の書式にも対応します。",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-16 relative py-24 md:py-32">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="ご依頼の流れ" en="Process" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-xl border border-border bg-white p-7 sm:p-10"
        >
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14">
            {/* 流れ */}
            <ol>
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  {i > 0 && <Rule className="bg-border" delay={0.05 * i} />}
                  <div className={`grid grid-cols-[28px_1fr] gap-3 ${i === 0 ? "pb-5" : "py-5"}`}>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent font-mono text-[11px] text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold tracking-tight text-foreground">{s.title}</p>
                      <p className="mt-1 text-[14px] leading-relaxed text-foreground/80">{s.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            {/* 契約の形 */}
            <div>
              <h3 className="text-[12px] text-muted-foreground">契約の形</h3>
              <dl className="mt-4 space-y-4">
                {CONTRACTS.map((c) => (
                  <div key={c.title} className="rounded-md border border-border p-4">
                    <dt className="text-[14.5px] font-semibold tracking-tight text-foreground">{c.title}</dt>
                    <dd className="mt-1 text-[13.5px] leading-relaxed text-foreground/80">{c.body}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-[13.5px] leading-relaxed text-foreground/80">
                  まだ内容が固まっていない段階でも構いません。通常 2 営業日以内にご返信します。
                </p>
                <Button asChild className="mt-4">
                  <Link href="#contact">
                    まずは相談する
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
