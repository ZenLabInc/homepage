import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InterestForm } from "@/components/zarm/interest-form";

/* zarm-v3 の紹介と、「この値段で買いたい」人のメール登録。
   開発中の製品なので、決まっていないこと(届ける時期、2 本目の腕の値段)は「未定」と書く。
   性能の数字は、実機で測るまで載せない。 */

const TITLE = "zarm-v3 — コーディングエージェントの目と手になる、机の上の腕";
const DESCRIPTION =
  "zarm-v3 は、Claude Code などのコーディングエージェントにつないで使う、机の上の小さなロボットアームです(開発中)。ライト・カメラ・細い爪先で、基板を見て、照らして、押して確かめます。片腕 約 5 万円(予定)。";

export const metadata: Metadata = {
  title: "zarm-v3(開発中)",
  description: DESCRIPTION,
  alternates: { canonical: "/zarm" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/zarm", images: ["/zarm/zarm-v3-concept-poster.jpg"] },
};

const PARTS = [
  { name: "ライト", body: "手先から机の上を照らします。暗い机でも、基板の文字や LED を読み取れるようにします。" },
  { name: "カメラ", body: "手先のカメラで、見たい所に寄って撮ります。エージェントはその写真を見て、次の動きを決めます。" },
  { name: "細い爪先", body: "細い 2 本の指で、基板の小さなボタンを押し、小さな部品をつまみます。" },
];

const STEPS = [
  { no: "1", title: "PC につなぐ", body: "PC とは USB-C ケーブル 1 本でつなぎます(電源の取り方は設計中です)。" },
  { no: "2", title: "エージェントから呼び出す", body: "Claude Code・Codex など、お使いのコーディングエージェントから腕を使えるようにします。" },
  { no: "3", title: "言葉で頼む", body: "「基板のボタンを押して、LED が点くか確かめて」のように頼むと、腕が動いて確かめます。" },
];

const ONE_ARM = ["机の上の物を撮影する・照らす", "基板や機器のボタン・スイッチを押す", "スマホやタブレットの画面をタップ・スワイプする", "電源を入れ直す、リセットボタンを押す", "小さな部品(抵抗・LED・ねじ)をつまんで並べる"];
const TWO_ARMS = ["USB・ケーブルを挿す・抜く", "ブレッドボードにジャンパー線や部品を挿す", "コネクターを挿す・抜く"];

function Dots({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-[14.5px] leading-relaxed text-foreground/85">
      {items.map((t) => (
        <li key={t} className="flex gap-2.5">
          <span aria-hidden className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-accent" />
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function ZarmPage() {
  return (
    <div className="relative">
      <SiteHeader />
      <main>
        {/* 冒頭:何か・いくらか・動画 */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="container mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <div>
              <Badge dot>開発中</Badge>
              <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground">zarm-v3</p>
              <h1 className="mt-3 text-[clamp(1.6rem,3.8vw,2.9rem)] font-semibold leading-[1.28] tracking-[-0.02em] text-foreground">
                <span className="inline-block">コーディングエージェントの</span>
                <span className="inline-block">
                  <span className="text-accent">目と手</span>になる、
                </span>
                <span className="inline-block">机の上の小さな腕。</span>
              </h1>
              <p className="mt-6 max-w-xl text-[15.5px] leading-[1.9] text-foreground/80">
                Claude Code などのコーディングエージェントにつなぐと、エージェントが机の上の基板を見て、照らして、押して、確かめます。作った物を確かめるために、人が机に戻らなくて済むようにする道具です。
              </p>
              <dl className="mt-8 grid max-w-xl grid-cols-2 gap-6 border-t border-border pt-6">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">値段(予定)</dt>
                  <dd className="mt-2 text-[15px] text-foreground">
                    片腕 <strong className="text-[1.35rem] font-semibold">約 5 万円</strong>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">届ける時期</dt>
                  <dd className="mt-2 text-[15px] text-foreground">未定(設計中)</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="#register">
                    この値段で買いたい
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <span className="text-[13px] text-muted-foreground">メールアドレスの登録だけです。お金はいただきません。</span>
              </div>
            </div>

            <figure className="mx-auto w-full max-w-[320px]">
              <video
                className="aspect-[9/16] w-full rounded-2xl border border-border bg-muted object-cover"
                src="/zarm/zarm-v3-concept.mp4"
                poster="/zarm/zarm-v3-concept-poster.jpg"
                controls
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
              />
              <figcaption className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground">
                AI で生成したコンセプト映像です。実機ではありません。形と動きは、開発の中で変わります。
              </figcaption>
            </figure>
          </div>
        </section>

        {/* 手先にあるもの */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <SectionHeading title="手先にあるもの" en="Light / Camera / Fingers" />
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {PARTS.map((p, i) => (
                <div key={p.name} className="border-t border-border pt-5">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-accent">0{i + 1}</p>
                  <h3 className="mt-2 text-[18px] font-semibold tracking-tight text-foreground">{p.name}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.85] text-foreground/80">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 使い方 */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <SectionHeading title="使い方は、つなぐだけ" en="How to use" />
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {STEPS.map((s) => (
                <li key={s.no} className="border-t border-border pt-5">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-accent">STEP {s.no}</p>
                  <h3 className="mt-2 text-[18px] font-semibold tracking-tight text-foreground">{s.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.85] text-foreground/80">{s.body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 rounded-xl bg-foreground px-6 py-5 font-mono text-[13.5px] leading-[1.9] text-white">
              <span className="text-white/50">&gt; </span>基板のボタンを押して、LED が点くか確かめて
            </div>
          </div>
        </section>

        {/* できること */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <SectionHeading title="できるようにすること" en="Tasks" />
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-[16px] font-semibold text-foreground">片腕で</h3>
                <div className="mt-4"><Dots items={ONE_ARM} /></div>
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-foreground">2 本目の腕を足すと</h3>
                <div className="mt-4"><Dots items={TWO_ARMS} /></div>
                <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
                  片方の腕で物を押さえ、もう片方で作業します。2 本目の腕は、あとから買い足せるようにします(値段は未定)。
                </p>
              </div>
            </div>
            <p className="mt-10 rounded-xl border border-border bg-muted px-5 py-4 text-[13.5px] leading-[1.85] text-foreground/80">
              上の一覧は開発の目標です。実機での成功率や速さは、まだ測っていません。測った結果は、開発の記録として公開します。
            </p>
          </div>
        </section>

        {/* いまの状況 */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <SectionHeading title="いまの状況" en="Status" />
            <div className="mt-8 max-w-3xl space-y-4 text-[15px] leading-[1.9] text-foreground/85">
              <p>
                zarm-v3 は設計中で、実機はまだありません。いまは市販のロボットアーム(SO-101)にカメラを付け、エージェントが机の上を見て、物を押すところまでを試しています。
              </p>
              <p>
                進み具合は、うまくいかなかったことも含めて
                <Link href="/#updates" className="text-accent underline-offset-2 hover:underline">最新の状況</Link>
                と SNS にそのまま載せています。
              </p>
            </div>
          </div>
        </section>

        {/* 登録 */}
        <section id="register" className="scroll-mt-24 py-16 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <SectionHeading title="この値段で買いたい方へ" en="Register" />
            <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              <div>
                <h3 className="text-[clamp(1.3rem,2.2vw,1.7rem)] font-semibold leading-[1.4] tracking-tight text-foreground">
                  片腕 約 5 万円なら買いたい、
                  <br className="hidden sm:inline" />
                  という方は登録してください。
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-[1.9] text-muted-foreground">
                  登録の数を見て、この製品を作り進めるかどうかを決めます。予約の受付を始めるときに、登録いただいた方へ先にお知らせします。
                </p>
                <Dots items={["登録は無料です。お金はいただきません", "登録しても、買う義務はありません", "値段と仕様は、開発の中で変わることがあります"]} />
              </div>
              <InterestForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
