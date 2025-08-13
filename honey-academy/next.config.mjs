/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // This tells Next.js to re-compile these packages
    // in a way that follows its new, stricter rules.
    transpilePackages: ["sanity", "framer-motion"],
    esmExternals: "loose",
  },
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
