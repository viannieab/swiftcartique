/** @type {import('next').NextConfig} */
// next.config.js

const nextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
}
module.exports = nextConfig;
  