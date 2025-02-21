import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    STRAPI_JWT_TOKEN: process.env.STRAPI_JWT_TOKEN,
    STRAPI_URL: process.env.STRAPI_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
