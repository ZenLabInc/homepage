import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // X 広告のリンク先が「?」抜けの /zarmutm_source=x_ad_b になっていたため、
      // 計測用のパラメーターを残したまま /zarm へ送る
      {
        source: "/zarmutm_source=:src",
        destination: "/zarm?utm_source=:src",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
