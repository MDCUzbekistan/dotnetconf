/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cache.sessionize.com",
      },
      {
        hostname: "dotnetconf.com",
      },
    ],
  },
};

module.exports = nextConfig;
