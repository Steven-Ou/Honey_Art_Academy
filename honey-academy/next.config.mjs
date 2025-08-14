/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this entire eslint block
  eslint: {
    // This tells Vercel to ignore ESLint errors during the build process.
    ignoreDuringBuilds: true,
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