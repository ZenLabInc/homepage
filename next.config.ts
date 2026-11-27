import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // zarm-v3 の紹介ページは 2026-11-27 に外した。
      // 広告や投稿に残っているリンク(「?」抜けの /zarmutm_source=… を含む)はトップへ送る
      { source: "/zarm", destination: "/", permanent: false },
      { source: "/zarmutm_source=:src", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
