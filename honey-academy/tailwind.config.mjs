/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fbebeb",
          DEFAULT: "#a32a2a",
          dark: "#822121",
        },
        secondary: "#f3f4f6",
        text: {
          base: "#1f2937",
          muted: "#6b7280",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
