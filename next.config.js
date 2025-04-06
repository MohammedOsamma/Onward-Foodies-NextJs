/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    appDir: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
