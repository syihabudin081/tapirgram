/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
  images: {
    domains: ["source.unsplash.com","images.unsplash.com"], // Tambahkan host "source.unsplash.com" ke dalam array domains
  },
  experimental: {
    forceSwcTransforms: true,
  },
};
