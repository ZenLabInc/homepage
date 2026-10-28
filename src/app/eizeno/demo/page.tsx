import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { DemoVideo, YouTubeGuide } from "@/components/demo/demo-player";
import { EXHIBITION_2026, exhibitionHeadline } from "@/lib/news";

const MEDIA = "/eizeno/demo";
const EIZENO_TRY = "https://eizeno.com/chat?lang=ja&entry=model";
const EIZENO_SITE = "https://eizeno.com/";
const CONTACT = "/#contact";
const GUIDE_VIDEO_ID = "2i-p7tc0jyA";

export const metadata: Metadata = {
  title: "Eizeno 展示デモ・作例集",
  description:
    "3Dモデルから3Dアニメーションを制作するEizenoの作例と使い方解説。産業交流展2026で上映する展示用動画と、入力素材・完成映像の比較資料をログインなしでご覧いただけます。",
  alternates: { canonical: `${MEDIA}` },
  openGraph: {
    title: "Eizeno 展示デモ・作例集 | ZenLab",
    description: "産業交流展2026で上映するEizenoの作例・使い方解説・比較資料。",
    url: MEDIA,
    images: [{ url: `${MEDIA}/showreel-180s.jpg`, width: 1280, height: 720 }],
  },
};

const PIECES = [
  {
    id: "desk-light",
    title: "デスクライト",
    duration: "60秒",
    poster: `${MEDIA}/desk-light-60s.jpg`,
    src: `${MEDIA}/desk-light-60s.mp4`,
    finished: "20秒",
    body: "素材の添付、読み込んだ形の確認、動きの確認、保存までの制作画面と、完成映像20秒を収録。",
    note: "制作画面は公開済みの制作動画からの抜粋です。待ち時間を省略し、一部の速度を調整しています（画面内に表示）。",
  },
  {
    id: "earbuds",
    title: "イヤホン",
    duration: "60秒",
    poster: `${MEDIA}/earbuds-60s.jpg`,
    src: `${MEDIA}/earbuds-60s.mp4`,
    finished: "27秒",
    body: "金属の質感、ケースの開閉、左右のイヤホンを見せる完成映像27秒と、絵コンテ・仕上がりの確認画面を収録。",
    note: "確認画面は制作時の静止画です。粒子や光の表現は演出で、製品の性能を示すものではありません。",
  },
  {
    id: "smart-glasses",
    title: "スマートグラス",
    duration: "60秒",
    poster: `${MEDIA}/smart-glasses-60s.jpg`,
    src: `${MEDIA}/smart-glasses-60s.mp4`,
    finished: "24秒",
    body: "手元の3Dモデル（GLB）、読み込んだ形の確認画面、全体像・連携イメージ・部品を見せる完成映像24秒を収録。",
    note: "確認画面は制作時の静止画です。スマートフォンとの連携や光の表現は演出です。",
  },
];

const GUIDE_CHAPTERS = [
  { t: 0, label: "0:00 元の3Dモデルと今回作る動画" },
  { t: 21, label: "0:21 モデルを添付して指示する" },
  { t: 43, label: "0:43 モデルの形と見え方を確認する" },
  { t: 64, label: "1:04 気になる動きを言葉で修正する" },
  { t: 80, label: "1:20 場面を承認して動画を保存する" },
  { t: 100, label: "1:40 完成した40秒の映像" },
  { t: 140, label: "2:20 自分の商品データで試す" },
];

function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-medium tracking-wider text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-[clamp(1.5rem,2.8vw,2rem)] font-semibold tracking-tight text-foreground">{title}</h2>
      {children && <div className="mt-4 text-[15px] leading-loose text-foreground/80">{children}</div>}
    </div>
  );
}

function CallToAction() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button asChild variant="accent" size="lg" className="w-full sm:w-auto">
        <a href={EIZENO_TRY}>
          Eizenoを試す
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </Button>
      <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
        <Link href={CONTACT}>お問い合わせ</Link>
      </Button>
    </div>
  );
}

export default function EizenoDemoPage() {
  const held = EXHIBITION_2026.status === "held";
  return (
    <div className="relative">
      <SiteHeader />
      <main>
        {/* 導入 */}
        <section className="pt-28 pb-12 md:pt-36 md:pb-16">
          <div className="container mx-auto max-w-5xl">
            <p className="inline-flex flex-wrap items-center gap-2 text-xs font-medium text-accent">
              <span className="rounded-full border border-accent/20 bg-accent/[0.04] px-3 py-1.5">{exhibitionHeadline()}</span>
              <span className="text-muted-foreground">{EXHIBITION_2026.period}</span>
            </p>
            <h1 className="mt-5 text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground text-balance">
              Eizeno 展示デモ・作例集
            </h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-loose text-foreground/80 sm:text-base">
              Eizenoは、3Dモデルや言葉を渡してAIエージェントと会話すると、3Dアニメーションを制作するサービスです。
              {held ? "産業交流展2026で上映した" : "産業交流展2026で上映する"}
              動画と、入力素材・完成映像の比較資料をまとめました。ログインせずにご覧いただけます。
            </p>
            {(EXHIBITION_2026.venue || EXHIBITION_2026.booth) && (
              <p className="mt-3 text-sm text-muted-foreground">
                {[EXHIBITION_2026.venue, EXHIBITION_2026.booth && `小間番号 ${EXHIBITION_2026.booth}`].filter(Boolean).join("・")}
              </p>
            )}
            {held && EXHIBITION_2026.report && (
              <p className="mt-4 max-w-3xl rounded-xl border border-border bg-muted/60 p-4 text-sm leading-relaxed text-foreground/80">{EXHIBITION_2026.report}</p>
            )}
            <nav aria-label="このページの内容" className="mt-8 flex flex-wrap gap-2 text-sm">
              {[
                ["#showreel", "作品集 180秒"],
                ["#pieces", "作品別 60秒"],
                ["#assembly", "3Dプリンター 40秒"],
                ["#guide", "使い方解説"],
                ["#comparison", "比較資料"],
                ["#production", "制作方法"],
              ].map(([href, label]) => (
                <a key={href} href={href} className="rounded-full border border-border bg-white px-3.5 py-2 text-foreground/80 hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* 180秒 */}
        <section id="showreel" className="scroll-mt-20 border-t border-border py-14 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <SectionTitle eyebrow="展示ループ" title="3作品の作品集｜180秒">
              <p>デスクライト、イヤホン、スマートグラスの60秒版を順につないだ、会場のモニターで流す映像です。</p>
            </SectionTitle>
            <div className="mt-8">
              <DemoVideo
                id="showreel"
                src={`${MEDIA}/showreel-180s.mp4`}
                poster={`${MEDIA}/showreel-180s.jpg`}
                title="3作品の作品集"
                duration="3:00"
                hasAudio={false}
                autoPlayWhenVisible
                priority
              />
            </div>
          </div>
        </section>

        {/* 60秒 × 3 */}
        <section id="pieces" className="scroll-mt-20 border-t border-border bg-muted/40 py-14 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <SectionTitle eyebrow="作品別" title="デスクライト・イヤホン・スマートグラス｜各60秒">
              <p>Eizenoで制作した完成映像に、制作時の画面と見出しを加えて、ZenLabが展示用に編集した版です。いずれも架空の製品です。</p>
            </SectionTitle>
            <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {PIECES.map((p) => (
                <article key={p.id} id={p.id} className="scroll-mt-20">
                  <DemoVideo id={p.id} src={p.src} poster={p.poster} title={`${p.title}｜${p.duration}`} duration="1:00" hasAudio={false} />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {p.title}
                    <span className="ml-2 text-sm font-normal text-muted-foreground">{p.duration}・完成映像{p.finished}を収録</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.body}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3Dプリンター 40秒 */}
        <section id="assembly" className="scroll-mt-20 border-t border-border py-14 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <SectionTitle eyebrow="組立構造の説明" title="3Dプリンターの組立構造｜40秒">
              <p>
                公開されている3Dプリンターの設計データをもとに、完成形→フレーム→駆動部→ツールヘッド・ベッド→外装→完成形の順で、部品の関係を見せる映像です。
                Eizenoで制作した完成動画を、編集せずに掲載しています。
              </p>
            </SectionTitle>
            <div className="mt-8">
              <DemoVideo
                id="assembly"
                src={`${MEDIA}/3d-printer-40s.mp4`}
                poster={`${MEDIA}/3d-printer-40s.jpg`}
                title="3Dプリンターの組立構造"
                duration="0:40"
                hasAudio
              />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              部品の関係を見せる概念映像です。実機の組立手順書や、機械的な精度・安全性を保証するものではありません。設計元の公認動画や顧客事例ではありません。設計データの出典は
              <a href="#credits" className="text-accent underline-offset-2 hover:underline">ページ末尾</a>に記載しています。
            </p>
          </div>
        </section>

        {/* ボウの使い方解説 */}
        <section id="guide" className="scroll-mt-20 border-t border-border bg-muted/40 py-14 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <SectionTitle eyebrow="使い方解説" title="ボウが解説する、Eizenoの使い方｜2分49秒">
              <p>
                上の3DプリンターのモデルをEizenoに添付し、見せたい順番を伝え、点検・動きの修正・承認・保存まで進めた実例を、ZenLabのキャラクター「ボウ」が音声で解説します。
              </p>
            </SectionTitle>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
              <YouTubeGuide
                id="guide"
                videoId={GUIDE_VIDEO_ID}
                thumbnail={`${MEDIA}/bou-guide-thumbnail.jpg`}
                title="3Dデータから組立説明動画へ｜Eizenoの使い方"
                duration="2:49"
              />
              <div>
                <h3 className="text-sm font-semibold text-foreground">チャプター</h3>
                <ol className="mt-3 space-y-1.5 text-sm">
                  {GUIDE_CHAPTERS.map((c) => (
                    <li key={c.t}>
                      <a
                        href={`https://www.youtube.com/watch?v=${GUIDE_VIDEO_ID}&t=${c.t}s`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-accent hover:underline underline-offset-2"
                      >
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  再生ボタンを押すとYouTubeの動画を読み込み、音声付きで再生します。日本語字幕はプレーヤーの字幕ボタンで表示できます。
                </p>
                <a
                  href={`https://youtu.be/${GUIDE_VIDEO_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-2"
                >
                  YouTubeで見る
                  <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 比較資料 */}
        <section id="comparison" className="scroll-mt-20 border-t border-border py-14 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <SectionTitle eyebrow="比較資料" title="入力素材と完成映像の比較">
              <p>
                スマートグラスの作例で、用意した3Dモデル、伝えた要望、完成した24秒の映像を1枚で比べられる資料です。
                まず用意するのは、商品の3Dモデルと、見せたい特徴・動き・用途です。
              </p>
            </SectionTitle>
            <figure className="mt-8">
              <Image
                src={`${MEDIA}/comparison-smart-glasses.jpg`}
                width={1600}
                height={900}
                sizes="(min-width: 1024px) 960px, 100vw"
                alt="比較資料。左から、用意した素材（スマートグラスの3Dモデル GLB）、伝えた要望（形・色・透明レンズを保つ、粒子・波・光の演出を加える、花とスマートフォンの小道具を使う、確認用の動画を見てから本番へ）、完成した映像（24秒の商品紹介映像、1920×1080・30fps）。"
                className="h-auto w-full rounded-xl border border-border"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
                架空の製品の制作例。要望は制作時の会話・記録の要約です。連携や光の表現は演出です。
              </figcaption>
            </figure>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <a href={`${MEDIA}/comparison-smart-glasses.pdf`} target="_blank" rel="noopener">
                  <Download aria-hidden="true" className="h-4 w-4" />
                  比較資料PDF（2.0MB）
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href="#smart-glasses">
                  スマートグラスの60秒版を見る
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 制作方法 */}
        <section id="production" className="scroll-mt-20 border-t border-border bg-muted/40 py-14 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <SectionTitle eyebrow="制作方法" title="どこまでをEizenoで作ったか">
              <p>展示用の動画には、Eizenoが出力した映像と、ZenLabがEizenoの外で編集した部分があります。</p>
            </SectionTitle>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white">
              <dl className="divide-y divide-border text-sm">
                {[
                  ["3Dプリンターの組立構造 40秒", "Eizenoで制作した完成動画そのもの。設計データはEizenoに添付する前に、ZenLabがGLB形式へ変換しました。"],
                  ["各作品の完成映像（デスクライト20秒・イヤホン27秒・スマートグラス24秒）", "Eizenoで制作した完成映像。60秒版の中でそのまま再生しています。"],
                  ["作品別の60秒版・180秒の作品集", "上の完成映像に、制作画面・見出し・案内を加えて、ZenLabが展示用に編集したもの。この編集はEizenoの機能で行ったものではありません。"],
                  ["ボウの使い方解説", "Eizenoの操作録画と完成後の実画面に、ボウの解説音声・画面編集をZenLabがEizenoの外で加えたもの。待ち時間は省略し、途中でエラーへの対応と再開を挟んでいます。"],
                ].map(([k, v]) => (
                  <div key={k} className="grid gap-1 p-5 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-6">
                    <dt className="font-semibold text-foreground">{k}</dt>
                    <dd className="leading-relaxed text-foreground/80">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              いずれもZenLabが用意したモデル・素材（3Dプリンターは公開設計データ）で制作した例で、お客様の制作事例ではありません。制作時間や費用は、内容・修正回数によって変わります。
            </p>
          </div>
        </section>

        {/* 導線 */}
        <section className="border-t border-border py-16 md:py-24">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-3xl border border-accent/20 bg-accent/[0.03] p-8 sm:p-12">
              <h2 className="text-[clamp(1.5rem,2.8vw,2rem)] font-semibold tracking-tight text-foreground">お持ちの3Dデータで、試してみませんか。</h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-loose text-foreground/80">
                Eizenoはブラウザで使えます。料金・対応形式・データの扱いは
                <a href={EIZENO_SITE} className="text-accent underline-offset-2 hover:underline">Eizenoのサイト</a>
                でご確認ください。導入や制作のご相談はお問い合わせから受け付けています。
              </p>
              <div className="mt-8">
                <CallToAction />
              </div>
            </div>

            <div id="credits" className="mt-12 scroll-mt-20 text-xs leading-relaxed text-muted-foreground">
              <h2 className="text-sm font-semibold text-foreground/80">出典・ライセンス</h2>
              <p className="mt-2">
                3Dプリンターの映像は、公開されている設計データ（GPL-3.0）をGLB形式に変換して制作しました。モデル本体はこのページで再配布していません。
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="https://github.com/VoronDesign/Voron-2/tree/Voron2.4/CAD" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">
                    元の設計データ（GitHub）
                  </a>
                </li>
                <li>
                  <a href="https://github.com/VoronDesign/Voron-2/blob/Voron2.4/LICENSE" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">
                    ライセンス（GPL-3.0）
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
