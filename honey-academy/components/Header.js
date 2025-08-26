"use client"; // Add this at the top to use state

import React, { useState } from "react"; // Import useState
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header({ data }) {
  const { menuItems } = data || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  return (
    <header className="bg-white dark:bg-dark-surface shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary dark:text-dark-primary">
          <Link href="/">Honey Art Academy</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
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
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu state
            className="text-gray-600 dark:text-dark-text_light hover:text-primary"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-dark-surface px-6 pb-4">
          {menuItems.map((item) => (
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
