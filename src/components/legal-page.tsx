import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageDrawings } from "@/components/page-drawings";
import { SITE } from "@/lib/site";

/* 個人情報保護方針などの方針ページの共通の枠。 */
export function LegalPage({
  title,
  enacted,
  revised,
  children,
}: {
  title: string;
  enacted: string;
  revised?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <PageDrawings />
      <SiteHeader />
      <main className="pt-32 pb-8 md:pt-40">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-tight text-foreground">
            {title}
          </h1>
          <article className="mt-10 rounded-2xl border border-border bg-white p-7 sm:p-10 text-[14.5px] leading-[1.9] text-foreground/85 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[16px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2:first-child]:mt-0 [&_p+p]:mt-3 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1.5 [&_a]:text-accent [&_a]:underline-offset-2 hover:[&_a]:underline">
            {children}
            <div className="mt-12 border-t border-border pt-6 text-[13.5px] text-muted-foreground">
              <p>制定日:{enacted}</p>
              {revised && <p>最終改定日:{revised}</p>}
              <p className="mt-3">
                {SITE.nameJa}
                <br />
                代表取締役 {SITE.representative}
              </p>
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
