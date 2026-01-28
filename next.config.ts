import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media-service.pynfi.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ugate.pynfi.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    turbo: undefined,
  },
};

export default nextConfig;
