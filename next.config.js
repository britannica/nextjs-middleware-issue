/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: true,
  basePath: '/money',
  rewrites() {
    return [
      {
        source: '/download/:path*',
        destination: 'https://cdn.britannica.com/:path*',
      },
    ];
  },
}

module.exports = nextConfig
