/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    // Optimization is enabled by default. Removing 'unoptimized: true' 
    // allows Next.js to use 'sharp' for compressing images.
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': ['**/.next/cache/**'],
    },
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;