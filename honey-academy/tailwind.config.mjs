/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brandRed: "#8B2C21",
        primary: {
          light: "#A93D31",
          DEFAULT: "#8B2C21",
          dark: "#6D241A",
        },
        text: {
          DEFAULT: "#E5E7EB",
          light: "#9CA3AF",
        },
        background: {
          DEFAULT: "#111827",
          light: "#1F2937",
        },
        secondary: "#1F2937",
        accent: "#3B82F6",
        dark: {
          background: "#111827",
          surface: "#1F2937",
          text: "#E5E7EB",
          text_light: "#9CA3AF",
          primary: "#8B2C21",
          primary_light: "#A93D31",
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"), // Change the default text color
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
