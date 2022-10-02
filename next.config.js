/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@stripe/firestore-stripe-payments",
]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "rb.gy"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.resolve.fallback = { fs: false, module: false };
    return config;
  },
});
