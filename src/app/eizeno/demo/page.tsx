import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { DemoVideo } from "@/components/demo/demo-player";
import { EXHIBITION_2026, exhibitionHeadline } from "@/lib/news";

const MEDIA = "/eizeno/demo";
const DESCRIPTION = "SaaSのURLから、実際の操作画面を使った紹介動画を制作するEizeno。産業交流展2026に向けた、日本語・英語の作例と3つの映像テイストをご覧いただけます。";

export const metadata: Metadata = {
  title: "Eizeno 展示デモ・作例集",
  description: DESCRIPTION,
  alternates: { canonical: MEDIA },
  openGraph: {
    title: "Eizeno 展示デモ・作例集 | ZenLab",
    description: DESCRIPTION,
    url: MEDIA,
    images: [{ url: `${MEDIA}/kumoita-slide-ja.webp`, width: 1280, height: 720 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eizeno 展示デモ・作例集 | ZenLab",
    description: DESCRIPTION,
    images: [`${MEDIA}/kumoita-slide-ja.webp`],
  },
};

const EXAMPLES = [
  { id: "kumoita-slide-ja", title: "Kumoita — タスク管理", look: "スライド", language: "日本語", duration: "1:23", sound: "ナレーション・字幕・BGM", body: "タスク管理の画面を、見出しとナレーションで順に紹介します。" },
  { id: "kumoita-tempo-ja", title: "Kumoita — タスク管理", look: "テンポ", language: "日本語", duration: "0:56", sound: "ナレーション・字幕・BGM", body: "同じサービスを、文字のカードとテンポのある切り替えで紹介します。" },
  { id: "kumoita-cinema-ja", title: "Kumoita — タスク管理", look: "シネマ", language: "日本語", duration: "1:08", sound: "BGM・音声ナレーションなし", body: "実際の画面を大きく見せ、音楽とゆったりした動きで紹介します。" },
  { id: "fudacho-tempo-en", title: "Fudacho — 請求書", look: "テンポ", language: "英語", duration: "0:46", sound: "ナレーション・字幕・BGM", body: "請求書を扱うサービスの操作画面を使った、英語の紹介動画です。" },
  { id: "komado-cinema-en", title: "Komado — サロンの予約", look: "シネマ", language: "英語", duration: "1:09", sound: "BGM・音声ナレーションなし", body: "予約サービスの画面を中心に、英語の見出しと音楽で紹介します。" },
  { id: "kumoita-slide-en", title: "Kumoita — タスク管理", look: "スライド", language: "英語", duration: "1:15", sound: "ナレーション・字幕・BGM", body: "タスク管理サービスを、英語のナレーションと字幕で紹介します。" },
];

const STEPS = [
  ["01", "SaaSのURLを渡す", "紹介したいサービスのURLと、見せたい内容を伝えます。AIがブラウザで実際の画面を操作し、録画します。"],
  ["02", "テイストを選ぶ", "提案された3案から選ぶか、希望を文章で伝えます。映像の置き方、文字、動き、音声などを組み立てます。"],
  ["03", "動画を確認して、会話で直す", "ナレーション・BGM・字幕を組み合わせたMP4を確認。見せ方や言い回しの変更を会話で依頼できます。"],
];

export default function EizenoDemoPage() {
  const held = EXHIBITION_2026.status === "held";
  return (
    <div className="relative">
      <SiteHeader />
      <main>
        <section className="pt-28 pb-12 md:pt-36 md:pb-16">
          <div className="container mx-auto max-w-5xl">
            <p className="inline-flex flex-wrap items-center gap-2 text-xs font-medium text-accent">
              <span className="rounded-full border border-accent/20 bg-accent/[0.04] px-3 py-1.5">{exhibitionHeadline()}</span>
              <span className="text-muted-foreground">{EXHIBITION_2026.period}</span>
            </p>
            <h1 className="mt-5 text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-tight tracking-tight text-foreground">Eizeno 展示デモ・作例集</h1>
            <p className="mt-5 max-w-3xl text-base leading-loose text-foreground/80">
              SaaSのURLから、伝わる紹介動画へ。Eizenoは、AIが実際のサービス画面を操作・録画し、ナレーション・BGM・字幕を組み合わせた動画に仕上げるサービスです。
              {held ? "展示した" : "展示に向けた"}作例を、ログインせずにご覧いただけます。
            </p>
            {(EXHIBITION_2026.venue || EXHIBITION_2026.booth) && <p className="mt-3 text-sm text-muted-foreground">{[EXHIBITION_2026.venue, EXHIBITION_2026.booth && `小間番号 ${EXHIBITION_2026.booth}`].filter(Boolean).join("・")}</p>}
            {held && EXHIBITION_2026.report && <p className="mt-4 text-sm leading-relaxed text-foreground/80">{EXHIBITION_2026.report}</p>}
            <nav aria-label="このページの内容" className="mt-8 flex flex-wrap gap-3 text-sm text-accent">
              <a href="#showreel" className="underline underline-offset-4">まず1本見る</a>
              <a href="#pieces" className="underline underline-offset-4">6つの作例</a>
              <a href="#guide" className="underline underline-offset-4">動画ができるまで</a>
            </nav>
          </div>
        </section>

        <section id="showreel" className="scroll-mt-20 border-t border-border py-14 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs font-medium text-accent">日本語のナレーション付き作例</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">実際の操作画面が、紹介動画になる。</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-loose text-foreground/80">架空のタスク管理サービス「Kumoita」の紹介動画です。サービス画面と説明の文字を並べた「スライド」のテイストで、操作と特徴を伝えます。</p>
            <div className="mt-8"><DemoVideo id="feature" src={`${MEDIA}/kumoita-slide-ja.mp4`} poster={`${MEDIA}/kumoita-slide-ja.webp`} title="Kumoita — タスク管理（スライド・日本語）" duration="1:23" hasAudio priority /></div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">再生ボタンで音声付きの動画が始まります。動画下のボタンから音声を切り替えられます。</p>
          </div>
        </section>

        <section id="pieces" className="scroll-mt-20 border-t border-border bg-muted/40 py-14 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold text-foreground">3つのテイスト、日本語と英語の作例</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-loose text-foreground/80">文字と画面を並べる「スライド」、画面を大きく見せる「シネマ」、切り替えにリズムをつける「テンポ」。同じサービスでも、伝えたい印象に合わせて見せ方を選べます。</p>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              {EXAMPLES.map((example) => <article key={example.id} id={example.id} className="scroll-mt-20">
                <DemoVideo id={example.id} src={`${MEDIA}/${example.id}.mp4`} poster={`${MEDIA}/${example.id}.webp`} title={`${example.title}（${example.look}・${example.language}）`} duration={example.duration} hasAudio />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{example.title}</h3>
                <p className="mt-2 text-xs font-medium text-accent">{example.look} · {example.language} · {example.sound}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{example.body}</p>
              </article>)}
            </div>
            <p className="mt-8 text-xs leading-relaxed text-muted-foreground">Kumoita・Fudacho・Komadoは、動画の見本のためにZenLabが作った架空のサービスです。登場する店・人物・データも架空で、お客様の事例ではありません。</p>
          </div>
        </section>

        <section id="guide" className="scroll-mt-20 border-t border-border py-14 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold text-foreground">動画ができるまで</h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-3">{STEPS.map(([number, title, body]) => <li key={number} className="rounded-2xl border border-border bg-white p-6">
              <p className="font-mono text-sm text-accent">{number}</p><h3 className="mt-3 text-lg font-semibold text-foreground">{title}</h3><p className="mt-3 text-sm leading-loose text-foreground/80">{body}</p>
            </li>)}</ol>
            <p className="mt-6 text-sm leading-loose text-muted-foreground">このページの作例は、現在のEizenoの映像テンプレートを使って制作しています。実際の画面をブラウザの枠で見せ、操作したところに寄る構成です。</p>
            <p className="mt-3 text-sm leading-loose text-muted-foreground">ご自身が利用する権限を持つサービスをお使いください。ログインが必要な場合は利用者ご自身でログインし、デモ用のデータを使ってください。利用条件・対応範囲はEizenoのマニュアルでご確認いただけます。</p>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className="container mx-auto max-w-5xl"><div className="rounded-3xl border border-accent/20 bg-accent/[0.03] p-8 sm:p-12">
            <h2 className="text-2xl font-semibold text-foreground">あなたのSaaSを、動画で伝えませんか。</h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-loose text-foreground/80">サービス紹介、営業での説明、使い方の案内に。現在の機能・料金はEizenoのサイトでご確認ください。</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="lg"><a href="https://eizeno.com/">Eizenoを使ってみる<ArrowRight aria-hidden="true" className="h-4 w-4" /></a></Button>
              <Button asChild variant="outline" size="lg"><a href="https://eizeno.com/manual">使い方を見る</a></Button>
              <Button asChild variant="outline" size="lg"><Link href="/#contact">お問い合わせ</Link></Button>
            </div>
          </div></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
