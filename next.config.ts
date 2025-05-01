import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/guides/tailwind-v4-installation',
        destination: '/guides/t4',
      },
    ];
  },
};

export default nextConfig;
