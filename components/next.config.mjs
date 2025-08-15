const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/Nikesh-Portfolio',
  assetPrefix: isProd ? '/Nikesh-Portfolio/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;