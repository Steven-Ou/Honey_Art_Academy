"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faPalette } from "@fortawesome/free-solid-svg-icons";
import DecorationPanel from "./DecorationPanel";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDecorating, setIsDecorating] = useState(false);

  return (
    <>
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/images.png"
                alt="Honey Art Academy Logo"
                width={180}
                height={45}
                priority
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#about"
                className="text-gray-600 hover:text-primary transition font-medium"
              >
                About
              </Link>
              <Link
                href="#programs"
                className="text-gray-600 hover:text-primary transition font-medium"
              >
                Programs
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-600 hover:text-primary transition font-medium"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-primary transition font-medium"
              >
                Contact
              </Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setIsDecorating(!isDecorating)}
                className="text-gray-500 hover:text-primary transition text-2xl"
                aria-label="Customize Background"
              >
                <FontAwesomeIcon icon={faPalette} />
              </button>
              <Link
                href="#contact"
                className="bg-primary text-white font-semibold px-6 py-2 rounded-full cta-button hover:bg-primary-dark"
              >
                Enroll Now
              </Link>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl text-primary"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2 pt-4">
              <Link
                href="#about"
                className="block py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#programs"
                className="block py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="#testimonials"
                className="block py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="block py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  setIsDecorating(!isDecorating);
                  setIsOpen(false);
                }}
                className="flex items-center w-full text-left py-2 text-gray-700 hover:text-primary"
              >
                <FontAwesomeIcon icon={faPalette} className="mr-2" />
                Customize
              </button>
              <Link
                href="#contact"
                className="block mt-4 bg-primary text-white text-center font-semibold px-6 py-3 rounded-full cta-button"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </Link>
            </nav>
          </div>
        )}
      </header>
      <DecorationPanel
        isOpen={isDecorating}
        onClose={() => setIsDecorating(false)}
      />
    </>
  );
}
