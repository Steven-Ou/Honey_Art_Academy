/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this images block to allow placeholder images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
