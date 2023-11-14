/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cache.sessionize.com",
      },
    ],
  },
};

module.exports = nextConfig;
