import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors https://www.devrank.app",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          }
        ]
      }
    ]
  },
};

export default nextConfig;
