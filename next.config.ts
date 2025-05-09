import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_STRAPI_URL?.startsWith("https") ? "https" : "http",
        hostname: new URL(process.env.NEXT_PUBLIC_STRAPI_URL || "").hostname,
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
