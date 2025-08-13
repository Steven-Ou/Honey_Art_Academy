/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["sanity", "framer-motion"],
  images: {
    remotePatterns: [
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