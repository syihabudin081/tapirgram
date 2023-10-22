/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};
