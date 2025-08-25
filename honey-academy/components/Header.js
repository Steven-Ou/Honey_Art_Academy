import React from "react";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";
// This is no longer an async component
export default function Header({ data }) {
  const { menuItems } = data || {};

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <Link href="/">Honey Art Academy</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link key={item._key} href={item.url}>
              <div className="text-gray-600 hover:text-primary transition-colors duration-300">
                {item.label}
              </div>
            </Link>
          ))}
          <Link href="#contact">
            <div className="bg-primary text-white font-bold py-2 px-6 rounded-full cta-button hover:bg-primary-dark">
              Contact Us
            </div>
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-primary">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
