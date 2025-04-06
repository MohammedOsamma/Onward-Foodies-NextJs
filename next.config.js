/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
