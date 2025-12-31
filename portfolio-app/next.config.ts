/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Creates the 'out' folder for static export
  basePath: '/portfolio', // IMPORTANT: your repo name as the base path
  assetPrefix: '/portfolio/', // Ensures CSS/JS/assets load from this path
  images: {
    unoptimized: true, // Required for static GitHub Pages hosting
  },
};

export default nextConfig;
