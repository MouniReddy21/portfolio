/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // Required for static export
  basePath: '/portfolio',       // Your GitHub Pages subpath
  assetPrefix: '/portfolio/',   // Makes URLs in HTML/JS point to the subpath
  images: {
    unoptimized: true,          // Required for static export
  },
};

export default nextConfig;
