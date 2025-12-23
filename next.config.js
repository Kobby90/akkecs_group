/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',  // Removed to enable standard Next.js build on Vercel
  // images: {
  //   unoptimized: true, // Removed to allow Next.js image optimization
  // },
  trailingSlash: true, // Preserved
  outputFileTracing: false, // Fix for "RangeError: Maximum call stack size exceeded" during build tracing
};

module.exports = nextConfig; 