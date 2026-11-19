"use client";

import * as React from "react";
import { Play } from "lucide-react";

/* 押すまで YouTube を読み込まないプレーヤー。開発記録はショート(縦長)なので枠も 9:16。
   押す前はサムネイル画像だけ(Cookie なし)。押したらプライバシー強化モード(youtube-nocookie.com)で再生する。 */
export function YouTubeFacade({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = React.useState(false);

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-md border border-border bg-foreground">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`動画を再生する:${title}`}
          className="group absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/oar2.jpg`}
            onError={(e) => {
              const img = e.currentTarget;
              if (!img.src.endsWith("/hqdefault.jpg")) img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`; // 縦の画像がまだ無いとき
            }}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-md transition-transform group-hover:scale-105">
            <Play aria-hidden className="h-5 w-5 translate-x-[1px] fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
