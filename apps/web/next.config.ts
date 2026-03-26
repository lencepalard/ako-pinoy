import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@ako-pinoy/ui', '@ako-pinoy/db', '@ako-pinoy/types', '@ako-pinoy/api'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.clerk.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '*.r2.cloudflarestorage.com' },
    ],
  },
}

export default nextConfig
