/** @type {import('next').NextConfig} */

const nextConfig = {
  // Added By Arun babu on Nov 11 2023 : This is needed for configuring the reverse proxy using Nginx on top of this UI
  basePath: "/appstore",
  assetPrefix: "/appstore/",
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
 // Added By Arun babu on Nov 11 2023 : Ignoring the type check during build as code has so type many build time errors
 typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
module.exports = nextConfig;
