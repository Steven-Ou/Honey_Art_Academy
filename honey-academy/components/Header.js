"use client";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      id="header"
      className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-md"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-primary-dark hover:text-primary transition-colors"
        >
          <i className="fas fa-palette mr-2"></i>Honey Academy
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-gray-600 hover:text-primary font-medium"
          >
            About
          </a>
          <a
            href="#programs"
            className="text-gray-600 hover:text-primary font-medium"
          >
            Programs
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-primary font-medium"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="bg-primary text-white font-bold py-2 px-6 rounded-full cta-button hover:bg-primary-dark"
          >
            Contact Us
          </a>
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
        <a
          href="#about"
          className="block py-2 px-6 text-sm hover:bg-primary-light"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#programs"
          className="block py-2 px-6 text-sm hover:bg-primary-light"
          onClick={() => setIsMenuOpen(false)}
        >
          Programs
        </a>
        <a
          href="#testimonials"
          className="block py-2 px-6 text-sm hover:bg-primary-light"
          onClick={() => setIsMenuOpen(false)}
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className="block py-2 px-6 text-sm hover:bg-primary-light"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
