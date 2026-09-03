import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Inbox, ScanText, MessageSquare, BellRing, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { PRODUCT } from "./product";

export const metadata: Metadata = {
  title: `${PRODUCT.name} — ${PRODUCT.tagline}`,
  description: PRODUCT.description,
  alternates: { canonical: `${SITE.url}${PRODUCT.path}` },
  keywords: ["経理 自動化", "税理士 事務所 AI", "freee 自動仕訳", "請求書 自動化", "記帳代行 AI", "顧問先 請求書 回収", "電子帳簿保存法", "領収書 自動読取", "おまかせ経理"],
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
  { icon: Inbox, title: "専用アドレスに送るだけ", body: "顧問先ごとに請求書の届け先アドレスを1つ発行します。顧問先は、請求書メールをそこに転送するか、サービス側の請求先を変えるだけ。ログイン情報は一切お預かりしません。" },
  { icon: ScanText, title: "読み取って freee に登録", body: "届いたPDF・写真をAIが読み取り、取引先・金額・発行日・登録番号を抽出。整った名前で保存し、freee のファイルボックスへ発行元・金額付きで登録します。同じ書類が2回届いても重複として除きます。" },
  { icon: CheckCircle2, title: "過去の仕訳に倣って下書き、承認はワンクリック", body: "同じ取引先の過去の登録があればそれに倣い、無ければAIが勘定科目を提案します。事務所は内容を見て承認するだけ。証憑付きの取引として freee に登録されます。定期取引は自動登録にもできます。" },
  { icon: MessageSquare, title: "操作はぜんぶ会話で", body: "「未承認の仕訳を見せて」「山田商店に督促して」「8月の月次チェック」。画面の使い方を覚える必要はありません。必要な表や確認ボタンは、その場で出てきます。" },
];

const faqs = [
  { q: "勘定科目はAIが勝手に決めるのですか?", a: "いいえ。同じ取引先の過去の登録があればそれに倣い、無い場合はAIが提案しますが、freee への登録は事務所が承認してからです。定期取引だけ自動登録にする設定もあり、その場合も過去の登録と金額が近いものに限られます。" },
  { q: "freee 以外の会計ソフトでも使えますか?", a: "仕訳の下書きと承認は現在 freee のみです。マネーフォワードなど「メールで取り込む」機能を持つソフトには、読み取り済みの書類を自動転送する形で使えます。" },
  { q: "顧問先のログイン情報を預かりますか?", a: "預かりません。書類はメール転送で届き、freee には事務所のアカウントで OAuth 接続します(各サービスの管理画面に代わりにログインする方式は採りません)。" },
  { q: "読み取りを間違えたらどうなりますか?", a: "金額や日付を読み取れなかった書類は「要確認」に入り、事務所が確認してから先に進みます。確信の持てないものを勝手に登録することはありません。" },
  { q: "紙の領収書はどうすればよいですか?", a: "スマートフォンで撮った写真を専用アドレスに送るだけで、同じように読み取ります。" },
  { q: "電子帳簿保存法への対応は?", a: "取引先・日付・金額で検索できる形のファイル名と台帳を作り、freee のファイルボックスにも発行元・日付・金額を付けて登録します。保存要件そのものは freee 側の保存機能で満たしていただく前提です。" },
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
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Product · 税理士事務所向け 経理自動化</p>
              <h1 className="mt-5 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.1] tracking-[-0.02em] heading-gradient text-balance">
                <span className="accent-gradient">{PRODUCT.name}</span>
                <br />
                {PRODUCT.tagline}
              </h1>
              <p className="mt-7 text-[15px] md:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                顧問先ごとの専用アドレスに請求書を送ってもらうだけ。AIが読み取り、freee のファイルボックスへ登録し、過去の仕訳に倣った下書きを作ります。
                事務所は会話で確認して承認するだけ。届いていない請求書の督促も、月次の突合も自動です。
                事務所が毎月やっている「集める・上げる・仕訳する・催促する・照合する」を、まとめて無くします。
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
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground max-w-2xl">顧問先の認証情報を預からず、メールと freee 連携だけで成り立つ4つのステップ。</p>
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
                  <li className="flex gap-2"><Clock className="mt-1 h-4 w-4 text-accent" />受信から freee 登録・仕訳の下書きまで、通常5分以内</li>
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
