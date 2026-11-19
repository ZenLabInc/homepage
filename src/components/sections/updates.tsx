import { ArrowUpRight } from "lucide-react";
import type { IconType } from "react-icons";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { SOCIAL } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { YouTubeFacade } from "@/components/youtube-facade";
import { fetchDevLogVideos } from "@/lib/youtube";

/* 各サービスの公式の色。X は公式の文字色(純黒は使わない)。 */
const ICONS: Record<(typeof SOCIAL)[number]["label"], { Icon: IconType; tile: string }> = {
  X: { Icon: SiX, tile: "bg-[#0f1419]" },
  YouTube: { Icon: SiYoutube, tile: "bg-[#ff0000]" },
  Instagram: {
    Icon: SiInstagram,
    tile: "bg-[linear-gradient(45deg,#feda75_0%,#fa7e1e_25%,#d62976_50%,#962fbf_75%,#4f5bd5_100%)]",
  },
};

export async function Updates() {
  const videos = await fetchDevLogVideos(3);
  return (
    <section id="updates" className="scroll-mt-16 relative py-16 md:py-20">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="最新の状況" en="Updates" />
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          開発の進み具合は、毎週 SNS で発信しています。
        </p>

        {videos.length > 0 && (
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {videos.map((v) => (
              <li key={v.id}>
                <YouTubeFacade id={v.id} title={v.title} />
                <p className="mt-2 text-[13.5px] font-medium leading-snug text-foreground">{v.title}</p>
                <p className="mt-0.5 font-mono text-[11.5px] text-muted-foreground">
                  {new Date(v.published).toLocaleDateString("ja-JP", { timeZone: "Asia/Tokyo" })}
                </p>
              </li>
            ))}
          </ul>
        )}
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {SOCIAL.map((s) => {
            const { Icon, tile } = ICONS[s.label];
            return (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-white px-5 py-4 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="flex items-center gap-3.5">
                  <span aria-hidden="true" className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${tile}`}>
                    <Icon className="h-[18px] w-[18px] text-white" />
                  </span>
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
