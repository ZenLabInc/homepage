import { ArrowUpRight } from "lucide-react";
import type { IconType } from "react-icons";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { SOCIAL } from "@/lib/site";

const ICONS: Record<(typeof SOCIAL)[number]["label"], IconType> = {
  X: SiX,
  YouTube: SiYoutube,
  Instagram: SiInstagram,
};

export function Updates() {
  return (
    <section id="updates" className="scroll-mt-16 section-edge py-16 md:py-20 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-[clamp(1.5rem,2.6vw,1.875rem)] font-semibold tracking-tight text-foreground">
          最新の状況
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          開発の進み具合は、SNS で発信しています。
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {SOCIAL.map((s) => {
            const Icon = ICONS[s.label];
            return (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border bg-white px-5 py-4 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="flex items-center gap-3.5">
                  <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-foreground group-hover:text-accent" />
                  <span>
                  <span className="block text-[15px] font-semibold tracking-tight text-foreground group-hover:text-accent">{s.label}</span>
                  <span className="block font-mono text-[13px] text-muted-foreground">{s.handle}</span>
                  </span>
                </span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent" />
              </a>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
