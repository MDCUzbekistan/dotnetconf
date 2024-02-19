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
      allowedOrigins: [
        "www.mdcuzbekistan.com",
        "localhost:3000",
        "https://www.mdcuzbekistan.com",
        "https://www.mdcuzbekistan.com/register",
      ],
    },
  },
};

module.exports = nextConfig;
