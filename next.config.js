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
  experimental: {
    serverActions: {
      allowedOrigins: ["https://www.mdcuzbekistan.com"],
    },
  },
};

module.exports = nextConfig;
