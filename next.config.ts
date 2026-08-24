import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "d112y698adiu2z.cloudfront.net" },
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "ugc.production.linktr.ee" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "chen-dominic.github.io" },
      { protocol: "https", hostname: "i.imgur.com" },
    ],
  },
};

export default nextConfig;
