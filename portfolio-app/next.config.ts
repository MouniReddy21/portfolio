/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This creates a 'out' folder with minified code
  images: {
    unoptimized: true, // Required for static GitHub Pages hosting
  },
};
export default nextConfig;