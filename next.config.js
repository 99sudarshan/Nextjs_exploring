/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // configuring image source while using image link instead of importing image from public folder
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
