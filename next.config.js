/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['e-cell-server-bucket.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
