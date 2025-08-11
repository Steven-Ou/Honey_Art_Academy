/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // PASTE THIS WHOLE 'extend' BLOCK IN
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#FFFBEB", // A light, creamy yellow
          DEFAULT: "#FBBF24", // A vibrant, honey-like amber
          dark: "#D97706", // A deeper, richer amber
        },
        secondary: "#1F2937", // A dark slate gray for text
        accent: "#3B82F6", // A friendly blue for highlights
      },
    },
  },
  plugins: [],
};

export default config;
