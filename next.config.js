/** @type {import('next').NextConfig} */

// Disable sharp memory cache and set concurrency to 1 to prevent memory spikes on Railway
try {
  const sharp = require('sharp');
  sharp.cache(false);
  sharp.simd(false);
  sharp.concurrency(1);
  console.log('Sharp cache, SIMD, and thread concurrency configured to prevent memory leaks.');
} catch (e) {
  // Gracefully ignore if sharp is not loaded or during initial config load
}

const nextConfig = {
  trailingSlash: true,
  output: 'standalone',
  cacheMaxMemorySize: 0, // Disable default in-memory caching to prevent memory leaks
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