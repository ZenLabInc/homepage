"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

const CAREER = [
  { year: "2021", body: "dip株式会社で、アルバイト求人サービスのバックエンドを開発" },
  { year: "2022", body: "位置情報デバイスの開発会社で、Webアプリの開発・営業・広報を担当" },
  { year: "2023", body: "株式会社マイナビで、AI議事録サービスなどを開発。エンジニアからPM・PMO、課長を経験" },
  { year: "2026", body: "株式会社ZenLabを創業" },
];

export function Representative() {
  return (
    <section id="representative" className="scroll-mt-16 section-edge py-24 md:py-28 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-tight text-foreground"
        >
          代表紹介
        </motion.h2>

        <div className="mt-10 grid gap-10 md:grid-cols-[180px_1fr] md:gap-10 items-start">
          <div className="mx-auto w-48 md:w-full">
            <Image
              src="/representative-portrait.jpg"
              alt={`代表取締役 ${SITE.representative}`}
              width={600}
              height={800}
              className="aspect-[3/4] w-full rounded-2xl border border-border object-cover"
              sizes="(min-width: 768px) 180px, 192px"
            />
            <p className="mt-4 text-center md:text-left text-sm text-muted-foreground">代表取締役</p>
            <p className="text-center md:text-left text-lg font-semibold text-foreground">
              {SITE.representative}
              <span className="ml-2 text-sm font-normal text-muted-foreground">{SITE.representativeKana}</span>
            </p>
          </div>

          <div>
            <div className="space-y-5 text-base leading-loose text-foreground/85">
              <p>
                人は道具をつくることで、ひとりではできなかったことを可能にしてきました。AIやロボットは、その歴史を大きく進める技術です。
                しかし今、その恩恵を受けているのは、導入に十分な資金を持つ大企業や、AIを提供する側の企業が中心です。
              </p>
              <p>
                私は、テクノロジーを、個人や小さなチームも含めたすべての人が使えるものとして届け、一人ひとりができることを広げたいと考えています。
              </p>
            </div>

            <dl className="mt-10 divide-y divide-border rounded-2xl border border-border bg-white">
              {CAREER.map((c) => (
                <div key={c.year} className="grid grid-cols-[64px_1fr] gap-4 px-6 py-4">
                  <dt className="font-mono text-sm text-muted-foreground pt-[2px]">{c.year}</dt>
                  <dd className="text-[14.5px] leading-relaxed text-foreground">{c.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
