import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NEWS, formatNewsDate, type NewsItem } from "@/lib/news";

function Meta({ item }: { item: NewsItem }) {
  return (
    <span className="flex shrink-0 items-center gap-3">
      <time dateTime={item.date} className="font-mono text-sm text-muted-foreground">
        {formatNewsDate(item.date)}
      </time>
      <span className="rounded-full border border-accent/20 bg-accent/[0.04] px-2.5 py-1 text-xs font-medium text-accent">
        {item.category}
      </span>
    </span>
  );
}

export function News() {
  return (
    <section id="news" className="scroll-mt-16 section-edge py-16 md:py-20 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-[clamp(1.5rem,2.6vw,1.875rem)] font-semibold tracking-tight text-foreground">
          お知らせ
        </h2>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {NEWS.map((item) => (
            <li key={item.date + item.title}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:gap-6 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Meta item={item} />
                  <span className="flex-1 text-[15px] leading-relaxed text-foreground group-hover:text-accent">
                    {item.title}
                  </span>
                  <ArrowRight aria-hidden="true" className="hidden h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent sm:block" />
                </Link>
              ) : (
                <div className="flex flex-col gap-2 py-5 sm:flex-row sm:gap-6">
                  <span className="sm:pt-0.5">
                    <Meta item={item} />
                  </span>
                  <div className="flex-1">
                    <p className="text-[15px] leading-relaxed text-foreground">{item.title}</p>
                    {item.body ? (
                      <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{item.body}</p>
                    ) : null}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
