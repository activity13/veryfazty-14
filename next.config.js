/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/cartas/:path*",
        destination: "/cartas/:path*",
      },
    ];
  },
};
