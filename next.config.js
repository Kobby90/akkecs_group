/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This will generate static files
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // This helps with static hosting
};

module.exports = nextConfig; 