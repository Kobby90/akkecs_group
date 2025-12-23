/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  outputFileTracing: false,
  productionBrowserSourceMaps: false, // Disable source maps
  swcMinify: false, // Disable SWC minifier (uses less memory, slightly larger file size)
  eslint: {
    ignoreDuringBuilds: true, // Don't run lint during build
  },
  typescript: {
    ignoreBuildErrors: true, // Don't check TS types during build
  },
};

module.exports = nextConfig;