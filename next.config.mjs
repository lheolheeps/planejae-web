/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  env: {
    API_HOST: process.env.API_HOST,
  },
};

export default nextConfig;
