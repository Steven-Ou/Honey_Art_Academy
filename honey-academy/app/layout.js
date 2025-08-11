// steven-ou/honey_art_academy/Honey_Art_Academy-b30d0db627a43b328427977d4914901b7229c657/honey-academy/app/layout.js

"use client";
import "./globals.css";
import { Inter, Lora } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

// Font Awesome Config
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    // Apply saved background pattern
    const savedBg = localStorage.getItem("background");
    if (savedBg) {
      document.documentElement.style.setProperty(
        "--background-image",
        savedBg === "none" ? "none" : `url(${savedBg})`
      );
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll(".animated-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (observer && observer.unobserve) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>
          Honey Art Academy - Flushing After School, Dance, Art & Music
        </title>
        <meta
          name="description"
          content="Honey Academy offers top-tier after-school, dance, art, and music programs in Flushing, NY. Nurturing tomorrow's leaders and artists."
        />
      </head>
      <body className={`${inter.variable} ${lora.variable} text-base`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
