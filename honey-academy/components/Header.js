"use client"; // This is now a client component to handle state

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
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            {logo && logo.asset ? (
              <Image
                src={urlFor(logo).url()}
                alt="Honey Art Academy Logo"
                width={150}
                height={50}
                priority
              />
            ) : (
              "Honey Art Academy"
            )}
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
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold text-primary">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Honey Art Academy
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-secondary focus:outline-none"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="h-8 w-8" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6">
            {mainNav?.map((link) => (
              <Link
                key={link.linkText}
                href={getUrlForLink(link)}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-2xl text-gray-800 hover:text-primary transition-colors font-medium">
                  {link.linkText}
                </span>
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary text-white font-bold py-3 px-8 rounded-full text-xl cta-button hover:bg-primary-dark w-full text-center mt-4"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
