"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from 'react';

// This config is needed for Font Awesome to work correctly with server components
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedBg = localStorage.getItem("background");

    if (savedTheme) {
      const theme = JSON.parse(savedTheme);
      const root = document.documentElement;
      root.style.setProperty("--color-primary", theme.primary);
      root.style.setProperty("--color-primary-dark", theme["primary-dark"]);
      root.style.setProperty("--color-primary-light", theme["primary-light"]);
      root.style.setProperty("--color-bg-base", theme.bg);
    }

    if (savedBg) {
      document.documentElement.style.setProperty("--background-image", savedBg === "none" ? "none" : `url(${savedBg})`);
    }
  }, []);
  
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Honey Academy - Flushing After School, Dance, Art & Music</title>
        <meta name="description" content="Honey Academy offers top-tier after-school, dance, art, and music programs in Flushing, NY. Nurturing tomorrow's leaders and artists." />
      </head>
      <body className={`${inter.className} bg-base text-gray-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
