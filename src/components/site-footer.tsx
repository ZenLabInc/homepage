import Link from "next/link";
import { Logo } from "@/components/logo";
import { SITE } from "@/lib/site";

const sections = [
  { href: "#approach", label: "Approach" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const company = [
  { label: "社名", value: SITE.nameJa },
  { label: "代表", value: SITE.representative },
  { label: "設立", value: SITE.founded },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border mt-32 bg-muted/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Link
              href="/"
              aria-label="ZenLab home"
              className="flex items-center gap-2.5"
            >
              <Logo size={26} />
              <span className="font-semibold tracking-tight text-foreground text-[15px]">
                ZenLab
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              業務に溶け込む、自律するAIを。
              <br />
              業務理解からはじめて、現場で確実に使えるシステムを構築します。
            </p>
            <p className="text-xs text-muted-foreground/70">
              {SITE.legalName} · {SITE.nameJa}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/80 mb-4">
              Sections
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
            <h4 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/80 mb-4">
              Company
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
            <h4 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/80 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="#contact"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  無料相談
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${SITE.email}`}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {SITE.email}
                </Link>
              </li>
            </ul>
          </div>
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
