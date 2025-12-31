const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // Matches your repository name
  assetPrefix: '/portfolio', // Ensures CSS/JS load from the right path
  images: {
    unoptimized: true,
  },
};

export default nextConfig;