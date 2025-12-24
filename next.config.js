/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    outputFileTracingIgnores: ['**/.next/cache/**'],
  },
};

module.exports = nextConfig;