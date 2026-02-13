import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Performance optimizations
  reactStrictMode: true,
  
  // Output optimization
  compress: true,
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
