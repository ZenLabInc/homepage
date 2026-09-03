import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Inbox, ScanText, Send, BellRing, ShieldCheck, Clock } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { PRODUCT } from "./product";

export const metadata: Metadata = {
  title: `${PRODUCT.name} — ${PRODUCT.tagline}`,
  description: PRODUCT.description,
  alternates: { canonical: `${SITE.url}${PRODUCT.path}` },
  keywords: ["請求書 受取", "請求書 自動化", "税理士 顧問先 請求書", "経理 書類 収集", "freee 連携", "マネーフォワード 連携", "電子帳簿保存法", "領収書 自動読取", "仕分けくん"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: `${SITE.url}${PRODUCT.path}`,
    siteName: SITE.name,
    title: `${PRODUCT.name} — ${PRODUCT.tagline}`,
    description: PRODUCT.description,
  },
  twitter: { card: "summary_large_image", title: `${PRODUCT.name} — ${PRODUCT.tagline}`, description: PRODUCT.description },
};

const steps = [
  { icon: Inbox, title: "専用アドレスを発行", body: "顧問先ごとに請求書の届け先アドレスを1つ発行します。顧問先は、請求書メールをそこに転送するか、サービス側の請求先を変えるだけ。ログイン情報は一切お預かりしません。" },
  { icon: ScanText, title: "AIが読み取り、名前を付ける", body: "届いたPDF・写真をAIが読み取り、取引先・金額・発行日・番号を抽出。「取引先_内容_書類_金額_日付_番号.pdf」の名前で月別に保存し、台帳に載せます。同じ書類が2回届いても重複として除きます。" },
  { icon: Send, title: "会計ソフトへ自動で届く", body: "freee やマネーフォワードのファイルボックスへ、そのまま転送します。API連携の設定は不要。取り込みアドレスを1つ登録するだけです。" },
  { icon: BellRing, title: "未着を検知して督促", body: "いつも届いている取引先の請求書が今月まだ無ければ、月初に顧問先へ自動でお知らせ。事務所からの「あの領収書まだですか」が無くなります。" },
];

const faqs = [
  { q: "顧問先が使っている会計ソフトが違っても使えますか?", a: "はい。出口は会計ソフトの「メールで取り込む」機能を使うので、freee・マネーフォワードなど、取り込み用アドレスを持つソフトならそのまま使えます。取り込みアドレスが無いソフトでも、整った名前の書類と台帳をダウンロードして使えます。" },
  { q: "顧問先のログイン情報を預かりますか?", a: "預かりません。各サービスの管理画面に代わりにログインする方式は採らず、メールの転送だけで成り立つ設計です。" },
  { q: "読み取りを間違えたらどうなりますか?", a: "金額や日付を読み取れなかった書類は「要確認」に入り、事務所の画面で人が確認してから保存・転送します。確信が持てないものを勝手に会計ソフトへ流すことはありません。" },
  { q: "紙の領収書はどうすればよいですか?", a: "スマートフォンで撮った写真を専用アドレスに送るだけで、同じように読み取ります。" },
  { q: "電子帳簿保存法への対応は?", a: "取引先・日付・金額で検索できる形のファイル名と台帳を作ります。保存要件そのものは会計ソフト側の保存機能で満たしていただく前提です。" },
];

export default function ShiwakekunPage() {
  return (
    <div className="relative">
      <SiteHeader />
      <main>
        <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 grid-bg-fine grid-mask-radial opacity-50" />
          <div className="absolute inset-0 -z-10 hero-glow" />
          <div className="container mx-auto relative">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Product · 税理士事務所向け</p>
              <h1 className="mt-5 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.1] tracking-[-0.02em] heading-gradient text-balance">
                <span className="accent-gradient">{PRODUCT.name}</span>
                <br />
                {PRODUCT.tagline}
              </h1>
              <p className="mt-7 text-[15px] md:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                顧問先ごとの専用アドレスに請求書を送ってもらうだけ。AIが読み取り、整った名前で保存し、会計ソフトへ届け、届いていない請求書は自動で督促します。
                事務所が月末にやっている「集める・名前を付ける・上げる・催促する」を、まとめて無くします。
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg">
                  <a href={PRODUCT.signupUrl}>
                    無料で試す(14日間)
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={PRODUCT.loginUrl}>ログイン</a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">クレジットカード不要で開始できます。設定は5分、顧問先側の作業はメール転送だけ。</p>
            </div>
          </div>
        </section>

        <section className="section-edge py-24 md:py-28 border-t border-border">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] font-semibold tracking-tight text-foreground">しくみ</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground max-w-2xl">認証情報を預からず、メールだけで成り立つ4つのステップ。</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {steps.map((s, i) => (
                <div key={s.title} className="rounded-2xl border border-border bg-white p-8 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent"><s.icon className="h-4 w-4" /></span>
                    <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Step {i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-edge py-24 md:py-28 border-t border-border bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] font-semibold tracking-tight text-foreground">料金</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground max-w-2xl">事務所単位の基本料金と、登録した顧問先の数だけの従量。使い始めは14日間無料です。</p>
            <div className="mt-10 grid gap-5 md:grid-cols-[1.2fr_1fr]">
              <div className="rounded-2xl border border-border bg-white p-8 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Pricing</p>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                  <p><span className="font-mono text-4xl font-medium tracking-tight">{PRODUCT.priceBase.toLocaleString()}</span><span className="ml-1 text-sm text-muted-foreground">円 / 月(事務所)</span></p>
                  <p><span className="font-mono text-2xl font-medium tracking-tight">+ {PRODUCT.pricePerClient.toLocaleString()}</span><span className="ml-1 text-sm text-muted-foreground">円 / 月 / 顧問先</span></p>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">税別。顧問先数は月ごとの登録数で自動計算。解約はいつでも画面から。</p>
                <ul className="mt-6 space-y-2 text-[15px] text-foreground/80">
                  <li className="flex gap-2"><ShieldCheck className="mt-1 h-4 w-4 text-accent" />顧問先の数に上限なし。ユーザーも何人でも</li>
                  <li className="flex gap-2"><Clock className="mt-1 h-4 w-4 text-accent" />受信から会計ソフト到着まで、通常5分以内</li>
                  <li className="flex gap-2"><BellRing className="mt-1 h-4 w-4 text-accent" />月次の未着検知と督促メールを含む</li>
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <a href={PRODUCT.signupUrl}>無料で試す<ArrowRight className="h-4 w-4" /></a>
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-white p-8 shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">たとえば</p>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">顧問先20社なら、月 <span className="font-mono">{(PRODUCT.priceBase + PRODUCT.pricePerClient * 20).toLocaleString()}</span> 円。担当者が毎月の回収と整理に使っている時間が1社あたり30分なら、月10時間分の作業が消えます。</p>
                <p className="mt-6 text-[15px] leading-relaxed text-foreground/80">導入時は、顧問先へ送るだけの案内ページ(ログイン不要)を自動で用意します。説明の手間はかかりません。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-edge py-24 md:py-28 border-t border-border">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] font-semibold tracking-tight text-foreground">よくある質問</h2>
            <dl className="mt-8 divide-y divide-border">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="text-[15px] font-semibold text-foreground">{f.q}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-foreground/80">{f.a}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg"><a href={PRODUCT.signupUrl}>無料で試す<ArrowRight className="h-4 w-4" /></a></Button>
              <Button asChild size="lg" variant="outline"><Link href="/#contact">導入の相談をする</Link></Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
