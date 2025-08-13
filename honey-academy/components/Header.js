"use client";
import React, { useState } from "react";
import Link from "next/link"; // 1. Import the Link component

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      id="header"
      className="bg-brandRed text-white backdrop-blur-lg sticky top-0 z-50 shadow-md"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link // 2. Use Link for the main logo/title
          href="/"
          className="text-2xl font-bold text-primary-dark hover:text-primary transition-colors"
        >
          <i className="fas fa-palette mr-2"></i>Honey Art Academy
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {/* 3. Update all links to use the Link component and absolute paths */}
          <Link
            href="/#about"
            className="text-gray-600 hover:text-primary font-medium"
          >
            About
          </Link>
          <Link
            href="/#programs"
            className="text-gray-600 hover:text-primary font-medium"
          >
            Programs
          </Link>
          <Link
            href="/#testimonials"
            className="text-gray-600 hover:text-primary font-medium"
          >
            Testimonials
          </Link>
          <Link
            href="/#contact"
            className="bg-primary text-white font-bold py-2 px-6 rounded-full cta-button hover:bg-primary-dark"
          >
            Contact Us
          </Link>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-secondary"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </nav>
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <Link
          href="/#about"
          className="block py-2 px-6 text-sm hover:bg-primary-light"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/#programs"
          className="block py-2 px-6 text-sm hover:bg-primary-light"
          onClick={() => setIsMenuOpen(false)}
        >
          Programs
        </Link>
        <Link
          href="/#testimonials"
          className="block py-2 px-6 text-sm hover:bg-primary-light"
          onClick={() => setIsMenuOpen(false)}
        >
          Testimonials
        </Link>
        <Link
          href="/#contact"
          className="block py-2 px-6 text-sm hover:bg-primary-light"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
