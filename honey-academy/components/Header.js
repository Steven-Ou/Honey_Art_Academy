"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header({ data }) {
  const { menuItems, logo, siteTitle } = data || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-dark-surface shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {logo || siteTitle ? (
          <Link href="/" className="flex items-center space-x-2">
            {logo && (
              <Image
                src={urlFor(logo).url()}
                alt={`${siteTitle || "Honey Art Academy"} Logo`}
                width={40}
                height={40}
                className="h-10 w-10"
              />
            )}
            {siteTitle && (
              <span className="text-xl font-bold text-primary dark:text-dark-primary">
                {siteTitle}
              </span>
            )}
          </Link>
        ) : (
          <div />
        )}

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems?.map((item) => (
            <Link key={item._key} href={item.url}>
              <div className="text-gray-600 dark:text-dark-text_light hover:text-primary transition-colors duration-300">
                {item.label}
              </div>
            </Link>
          ))}
          <Link href="#contact">
            <div className="bg-primary text-white font-bold py-2 px-6 rounded-full cta-button hover:bg-primary-dark">
              Contact Us
            </div>
          </Link>
          <ThemeToggleButton />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 dark:text-dark-text_light hover:text-primary"
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-dark-surface px-6 pb-4">
          {menuItems?.map((item) => (
            <Link key={item._key} href={item.url}>
              <div className="block py-2 text-gray-600 dark:text-dark-text_light hover:text-primary">
                {item.label}
              </div>
            </Link>
          ))}
          <Link href="#contact">
            <div className="mt-4 bg-primary text-white text-center font-bold py-2 px-6 rounded-full cta-button hover:bg-primary-dark">
              Contact Us
            </div>
          </Link>
        </nav>
      )}
    </header>
  );
}
