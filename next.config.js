/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // images: {
  //   remotePatterns: ['codarity.com'],
  // },
  images: {
    domains: ['www.codarity.com'],
  },
};

module.exports = nextConfig;
