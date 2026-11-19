import Link from "next/link";
import { Wordmark } from "@/components/logo";
import { SITE } from "@/lib/site";

const sections = [
  { href: "/#services", label: "事業内容" },
  { href: "/#process", label: "ご依頼の流れ" },
  { href: "/#company", label: "会社概要" },
  { href: "/#updates", label: "最新の状況" },
  { href: "/#contact", label: "お問い合わせ" },
];

const policies = [
  { href: "/privacy", label: "個人情報保護方針" },
  { href: "/security-policy", label: "情報セキュリティ基本方針" },
  { href: "/antisocial-forces-policy", label: "反社会的勢力に対する基本方針" },
];

const company = [
  { label: "社名", value: SITE.nameJa },
  { label: "代表", value: SITE.representative },
  { label: "設立", value: SITE.founded },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 bg-white">
      <div className="container mx-auto max-w-5xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Link
              href="/"
              aria-label="ZenLab home"
              className="flex items-center gap-2.5"
            >
              <Wordmark height={22} />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              {SITE.tagline}
              <br />
              AI を含むシステムの受託開発・ディレクションと、フィジカル AI(ロボット)の開発をしています。
            </p>
            <p className="text-xs text-muted-foreground/70">
              {SITE.legalName} · {SITE.nameJa}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.14em] text-muted-foreground/80 mb-4">
              ページ
            </h4>
            <ul className="space-y-2.5">
              {sections.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.14em] text-muted-foreground/80 mb-4">
              会社情報
            </h4>
            <dl className="space-y-2.5 text-sm">
              {company.map((c) => (
                <div key={c.label} className="flex gap-3">
                  <dt className="text-muted-foreground/80 w-12 shrink-0">
                    {c.label}
                  </dt>
                  <dd className="text-foreground/90">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.14em] text-muted-foreground/80 mb-4">
              お問い合わせ
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#contact"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col gap-3 sm:flex-row items-start sm:items-center justify-between text-xs text-muted-foreground/80">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p>© {year} {SITE.legalName} All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {policies.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="font-mono tracking-tight">
            <span className="text-foreground/60">{SITE.domain}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
