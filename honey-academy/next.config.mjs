// steven-ou/honey_art_academy/Honey_Art_Academy-3b08cfc3f42b337480a330f9b0097aaca9ef5160/honey-academy/next.config.mjs

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co", // Kept for safety, can be removed
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Kept for safety, can be removed
      },
      {
        protocol: "https",
        hostname: "picsum.photos", // Added new reliable source
      },
    ],
  },
};

export default nextConfig;
