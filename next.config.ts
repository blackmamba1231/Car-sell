import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Allow all paths from the domain
      },
      {
        protocol: 'https',
        hostname: 'www.autovista.in',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
