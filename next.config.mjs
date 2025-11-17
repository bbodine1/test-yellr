/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
    typedRoutes: true,
  },
};

export default nextConfig;
