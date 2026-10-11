"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Services() {
  return (
    <section id="services" className="section-edge py-24 md:py-32 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-tight text-foreground">
          事業内容
        </motion.h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          個人の「つくりたい」を、かたちにする。<br />
          ZenLabは、創造を手助けする道具づくりに取り組んでいます。
        </p>
        <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-accent/20 bg-accent/[0.03] p-8 sm:p-12">
          <p className="text-xs font-medium tracking-wider text-accent">動画制作サービス</p>
          <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Eizeno
          </h3>
          <p className="mt-5 max-w-2xl text-[15px] leading-loose text-foreground/80">
            商品の写真やサービスの画面をもとに、AIと会話しながら紹介動画をつくれるサービスです。
            構成や素材を確認しながら、映像・ナレーション・音楽を組み合わせた一本に仕上げます。
          </p>
          <Button asChild className="mt-7">
            <a href="https://eizeno.com/">
              Eizenoを見る<ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </Button>
        </motion.article>
        <motion.article initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-6 rounded-2xl border border-border bg-white p-8 sm:p-9">
          <p className="text-xs font-medium tracking-wider text-muted-foreground">提供中のサービス</p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">業務のAI化支援</h3>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
            企業の業務に合わせたAI・ソフトウェアの設計・開発を行っています。
            現場の課題を整理し、業務プロセスの自動化や、実際に使える仕組みづくりを支援します。
          </p>
          <Link href="#contact" className="mt-5 inline-flex items-center gap-1.5 rounded text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            AI化支援について相談する<ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </motion.article>
      </div>
    </section>
  );
}
