/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  experimental: {
    allowMiddlewareResponseBody: true,
  },
};

module.exports = nextConfig;
