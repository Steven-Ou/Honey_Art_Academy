/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#FFFBEB",
          DEFAULT: "#FBBF24",
          dark: "#D97706",
        },
        secondary: "#1F2937",
        accent: "#3B82F6",
      },
    },
  },
  plugins: [],
};
