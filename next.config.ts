/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.clerk.com'], // Allow images from Clerk
  },
};

module.exports = nextConfig;
