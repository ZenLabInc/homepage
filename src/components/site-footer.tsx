import Link from "next/link";
import { Logo } from "@/components/logo";
import { SITE } from "@/lib/site";

const groups = [
  {
    title: "Services",
    links: [
      { href: "#services", label: "AI導入支援" },
      { href: "#services", label: "RAG構築" },
      { href: "#services", label: "AI Agent開発" },
      { href: "#services", label: "業務自動化" },
      { href: "#services", label: "社内AIチャット" },
      { href: "#services", label: "業務システム開発" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#about", label: "About" },
      { href: "#strengths", label: "Strengths" },
      { href: "#process", label: "Process" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "#contact", label: "無料相談" },
      { href: `mailto:${SITE.email}`, label: SITE.email },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border mt-32 bg-muted/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Link href="/" aria-label="ZenLab home" className="flex items-center gap-2.5">
              <Logo size={26} />
              <span className="font-semibold tracking-tight text-foreground text-[15px]">
                ZenLab
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              業務に溶け込む、自律するAIを。<br />
              RAG・AI Agent・業務自動化まで、現場で動く仕組みを設計・実装します。
            </p>
            <p className="text-xs text-muted-foreground/70">
              {SITE.legalName} · {SITE.nameJa}
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/80 mb-4">
                {g.title}
              </h4>
              <ul className="space-y-2.5">
                {g.links.map((l) => (
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
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col gap-3 sm:flex-row items-start sm:items-center justify-between text-xs text-muted-foreground/80">
          <p>© {year} {SITE.legalName} All rights reserved.</p>
          <p className="font-mono tracking-tight">
            <span className="text-foreground/60">{SITE.domain}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
