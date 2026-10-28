"use client";

import * as React from "react";
import Image from "next/image";
import { Play, Repeat, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * 展示デモの動画プレーヤー。
 * - 最初はサムネイルだけを表示し、動画は再生するまで読み込まない(preload なし)。
 * - 同時に再生するのは1本だけ。どれかが再生を始めると、ほかは止まる。
 * - 自動再生は autoPlayWhenVisible の1本だけで、必ずミュート。画面外に出たら止める。
 */
const PLAY_EVENT = "demo-player:play";

function announcePlay(id: string) {
  window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: id }));
}

function useOtherPlayback(id: string, onOther: () => void) {
  const ref = React.useRef(onOther);
  ref.current = onOther;
  React.useEffect(() => {
    const listener = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== id) ref.current();
    };
    window.addEventListener(PLAY_EVENT, listener);
    return () => window.removeEventListener(PLAY_EVENT, listener);
  }, [id]);
}

function prefersNoAutoplay() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  return reduce || Boolean(saveData);
}

type DemoVideoProps = {
  id: string;
  src: string;
  poster: string;
  title: string;
  duration: string;
  hasAudio: boolean;
  autoPlayWhenVisible?: boolean;
  priority?: boolean;
};

export function DemoVideo({ id, src, poster, title, duration, hasAudio, autoPlayWhenVisible = false, priority = false }: DemoVideoProps) {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [started, setStarted] = React.useState(false);
  const [muted, setMuted] = React.useState(true);
  const [blocked, setBlocked] = React.useState(false);
  const userStarted = React.useRef(false);
  const stoppedByOther = React.useRef(false);

  useOtherPlayback(id, () => {
    // ほかの動画を選んだ後は、画面に戻っても自動再生し直さない。
    stoppedByOther.current = true;
    videoRef.current?.pause();
  });

  // 自動再生(ミュート)は画面内にあるときだけ。外に出たら止める。
  React.useEffect(() => {
    if (!autoPlayWhenVisible || !wrapRef.current) return;
    if (prefersNoAutoplay()) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (entry.isIntersecting) {
          if (!video) {
            setStarted(true);
          } else if (!userStarted.current && !stoppedByOther.current && video.paused) {
            video.muted = true;
            video.play().catch(() => setBlocked(true));
          }
        } else if (video && !userStarted.current) {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, [autoPlayWhenVisible, started]);

  // 動画要素ができたら再生を始める。利用者が押した場合で音声付きなら、音声もオン。
  React.useEffect(() => {
    const video = videoRef.current;
    if (!started || !video) return;
    const withSound = userStarted.current && hasAudio;
    video.muted = !withSound;
    setMuted(!withSound);
    video.play().then(() => setBlocked(false)).catch(() => setBlocked(true));
  }, [started, hasAudio]);

  function start() {
    userStarted.current = true;
    if (!started) {
      setStarted(true);
    } else {
      videoRef.current?.play().then(() => setBlocked(false)).catch(() => setBlocked(true));
    }
  }

  function toggleSound() {
    const video = videoRef.current;
    userStarted.current = true;
    if (!video) {
      setStarted(true);
      return;
    }
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused) video.play().catch(() => setBlocked(true));
  }

  return (
    <div>
      <div ref={wrapRef} className="relative aspect-video overflow-hidden rounded-xl border border-border bg-[#0f172a]">
        {started ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="h-full w-full object-contain"
            controls
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={`${title}（${duration}）`}
            onPlay={() => {
              setBlocked(false);
              announcePlay(id);
            }}
            onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
          >
            <a href={src}>{title}の動画を開く</a>
          </video>
        ) : (
          <button
            type="button"
            onClick={start}
            className="group absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-accent"
            aria-label={`${title}を再生（${duration}）`}
          >
            <Image src={poster} alt="" fill sizes="(min-width: 1024px) 960px, 100vw" className="object-cover" priority={priority} />
            <span className="absolute inset-0 bg-[#0f172a]/10 transition-colors group-hover:bg-[#0f172a]/25" />
            <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0f172a] shadow-lg">
              <Play aria-hidden="true" className="h-4 w-4 fill-current text-accent" />
              再生する
            </span>
            <span className="absolute bottom-3 right-3 rounded-md bg-[#0f172a]/80 px-2 py-1 font-mono text-xs text-white">{duration}</span>
          </button>
        )}
        {started && blocked && (
          <button
            type="button"
            onClick={start}
            className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0f172a] shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Play aria-hidden="true" className="h-4 w-4 fill-current text-accent" />
            再生する
          </button>
        )}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        {hasAudio ? (
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={!muted}
            className={cn(
              "inline-flex min-h-[40px] items-center gap-1.5 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              muted ? "border-accent/30 bg-white text-accent hover:bg-accent/[0.05]" : "border-accent bg-accent text-white hover:bg-accent/90"
            )}
          >
            {muted ? <VolumeX aria-hidden="true" className="h-4 w-4" /> : <Volume2 aria-hidden="true" className="h-4 w-4" />}
            {muted ? "音声をオンにする" : "音声をオフにする"}
          </button>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5">
            <VolumeX aria-hidden="true" className="h-3.5 w-3.5" />
            音声なし（見出しで伝える無音の映像）
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5">
          <Repeat aria-hidden="true" className="h-3.5 w-3.5" />
          繰り返し再生
        </span>
      </div>
    </div>
  );
}

type YouTubeGuideProps = {
  id: string;
  videoId: string;
  thumbnail: string;
  title: string;
  duration: string;
};

/** 押すまで YouTube を読み込まない。押した操作で音声付きの再生を始める。 */
export function YouTubeGuide({ id, videoId, thumbnail, title, duration }: YouTubeGuideProps) {
  const [open, setOpen] = React.useState(false);
  useOtherPlayback(id, () => setOpen(false));

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-[#0f172a]">
      {open ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1&cc_lang_pref=ja`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            announcePlay(id);
            setOpen(true);
          }}
          className="group absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-accent"
          aria-label={`${title}を音声付きで再生（YouTube・${duration}）`}
        >
          <Image src={thumbnail} alt="" fill sizes="(min-width: 1024px) 960px, 100vw" className="object-cover" />
          <span className="absolute inset-0 bg-[#0f172a]/10 transition-colors group-hover:bg-[#0f172a]/25" />
          <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg">
            <Volume2 aria-hidden="true" className="h-5 w-5" />
            音声付きで再生
          </span>
          <span className="absolute bottom-3 right-3 rounded-md bg-[#0f172a]/80 px-2 py-1 font-mono text-xs text-white">{duration}・YouTube</span>
        </button>
      )}
    </div>
  );
}
