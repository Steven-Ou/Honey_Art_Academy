"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const getUrlForLink = (link) => {
  switch (link.linkType) {
    case "internal":
      if (link.type === "aboutPage") return "/about";
      if (link.type === "program") return `/programs/${link.slug}`;
      if (link.type === "facilitiesPage") return "/facilities";
      if (link.type === "event") return `/events/${link.slug}`;
      return "/";
    case "anchor":
      return `/#${link.anchorLink}`;
    case "external":
      return link.externalUrl;
    default:
      return "/";
  }
};

export default function Header({ logo, mainNav }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            // Use flexbox to align the logo and title
            className="flex items-center gap-3"
          >
            {logo && logo.asset ? (
              <Image
                src={urlFor(logo).url()}
                alt="Honey Art Academy Logo"
                width={50} // Adjusted for better alignment
                height={50}
                priority
                className="h-10 w-auto" // Control size for consistency
              />
            ) : null}
            {/* The title is now inside the link and styled */}
            <span className="text-secondary">Honey Art Academy</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {mainNav?.map((link) => (
            <Link key={link.linkText} href={getUrlForLink(link)}>
              <span className="text-gray-600 hover:text-primary transition-colors font-medium">
                {link.linkText}
              </span>
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-primary text-white font-bold py-2 px-6 rounded-full cta-button hover:bg-primary-dark"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-secondary focus:outline-none"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white z-40 shadow-lg rounded-b-lg border-t border-gray-100">
          <nav className="flex flex-col items-center space-y-4 p-6">
            {mainNav?.map((link) => (
              <Link
                key={link.linkText}
                href={getUrlForLink(link)}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xl text-gray-800 hover:text-primary transition-colors font-medium">
                  {link.linkText}
                </span>
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg cta-button hover:bg-primary-dark w-full text-center mt-4"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
