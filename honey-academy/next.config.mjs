/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this experimental block to fix the error
  experimental: {
    transpilePackages: ["sanity", "framer-motion"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
