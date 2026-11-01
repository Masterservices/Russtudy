import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  async redirects() {
    return [
      { source: '/fr', destination: '/', permanent: true },
      { source: '/fr/:path*', destination: '/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
