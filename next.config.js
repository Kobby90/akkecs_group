/** @type {import('next').NextConfig} */

// Disable sharp memory cache to prevent memory leaks on Railway
try {
  const sharp = require('sharp');
  sharp.cache(false);
  sharp.simd(false);
  console.log('Sharp cache and SIMD disabled to prevent memory leaks.');
} catch (e) {
  // Gracefully ignore if sharp is not loaded or during initial config load
}

const nextConfig = {
  trailingSlash: true,
  output: 'standalone',
  images: {
    minimumCacheTTL: 60,
  },
  experimental: {
    // Disable build workers to prevent EPERM child-process kill failures on Windows OneDrive
    webpackBuildWorker: false,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;