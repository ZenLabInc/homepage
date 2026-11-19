"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rule } from "@/components/section-heading";
import { SITE } from "@/lib/site";

/* 代表紹介(会社概要の中に置く)。写真と名前を左に、想い・大切にしていること・経歴を右に並べる。
   経歴は会社名を出さない(代表の指示)。 */

const VALUES = [
  {
    title: "透明性",
    body: "進み具合や課題、まだ確かめられていないことも含めて、ありのままをお伝えします。",
  },
  {
    title: "速さ",
    body: "時間は最も貴重な資源です。早く形にしてお見せし、確かめながら進めます。",
  },
  {
    title: "使いやすさ",
    body: "技術は、使う人にとって使いやすくなって初めて役に立ちます。現場で使われ続けるところまで考えてつくります。",
  },
];

const CAREER = [
  { when: "2021", body: "茨城工業高等専門学校 電子情報工学科を卒業。求人情報サービス企業で、バックエンドの開発に従事" },
  { when: "2022", body: "位置情報デバイス開発会社で、Web アプリケーションの開発、営業・広報を担当" },
  { when: "2023", body: "大手総合人材サービス企業で、AI 議事録サービスを開発。その後、PM、課長を担当" },
  { when: "2026", body: "株式会社ZenLab を設立" },
];

function Block({ label, children, delay = 0 }: { label: string; children: React.ReactNode; delay?: number }) {
  return (
    <div>
      <Rule className="bg-border" delay={delay} />
      <div className="grid gap-3 py-6 sm:grid-cols-[120px_1fr] sm:gap-4">
        <h3 className="text-[12px] text-muted-foreground sm:pt-[3px]">{label}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
}

export function Founder() {
  return (
    <div id="founder" className="scroll-mt-24">
      <h3 className="text-[17px] font-semibold tracking-tight text-foreground">代表紹介</h3>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-5 rounded-xl border border-border bg-white p-7 sm:p-10"
        >
          <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-12">
            {/* 写真と名前 */}
            <div className="mx-auto w-full max-w-[240px] md:mx-0">
              <Image
                src="/team/hatada.webp"
                alt={`代表取締役 ${SITE.representative}`}
                width={1111}
                height={1415}
                quality={95}
                priority={false}
                sizes="(min-width: 768px) 220px, 240px"
                className="aspect-[4/5] w-full rounded-md border border-border object-cover object-top"
              />
              <p className="mt-5 text-[12px] text-muted-foreground">代表取締役</p>
              <p className="mt-1 text-[20px] font-semibold tracking-tight text-foreground">{SITE.representative}</p>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {SITE.representativeRomaji}
              </p>
            </div>

            {/* 想い・大切にしていること・経歴 */}
            <div>
              <div className="space-y-4 pb-8 text-[15px] leading-[1.95] text-foreground/85">
                <p>
                  人は道具をつくることで、本来できなかったことを可能にしてきました。私が高専で電子情報工学を学び、技術者の道を選んだのも、技術を使ってまだ世の中にないものをつくり、社会に貢献したかったからです。
                </p>
                <p>
                  これまで、大手人材サービス会社や、位置情報端末を開発する企業などで働き、ソフトウェアとハードウェアの両方に携わってきました。AI とロボットが、人ができることを大きく広げる段階に入ったと考え、ZenLab を設立しました。
                </p>
                <p>
                  幅広い現場で培ってきた技術を活かし、ご要望に沿った、使いやすい製品を開発してお届けできるよう、一つひとつのご依頼に誠実に向き合います。
                </p>
              </div>

              <Block label="大切にしていること">
                <ol className="space-y-4">
                  {VALUES.map((v) => (
                    <li key={v.title}>
                      <p className="text-[15px] font-semibold tracking-tight text-foreground">{v.title}</p>
                      <p className="mt-1 text-[14px] leading-relaxed text-foreground/80">{v.body}</p>
                    </li>
                  ))}
                </ol>
              </Block>

              <Block label="経歴" delay={0.05}>
                <ol className="space-y-2.5">
                  {CAREER.map((c) => (
                    <li key={c.when + c.body} className="grid grid-cols-[48px_1fr] gap-3">
                      <span className="font-mono text-[12.5px] text-muted-foreground pt-[2px]">{c.when}</span>
                      <span className="text-[14px] leading-relaxed text-foreground/85">{c.body}</span>
                    </li>
                  ))}
                </ol>
              </Block>
            </div>
          </div>
        </motion.div>
    </div>
  );
}
