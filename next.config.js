// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',                         // make Next.js produce static HTML
  basePath: '/Nikesh-Portfolio',            // MUST match your repo name exactly
  assetPrefix: isProd ? '/Nikesh-Portfolio/' : '',
  images: { unoptimized: true },            // fix next/image for static hosting
  trailingSlash: true                       // ensures /index.html works
};