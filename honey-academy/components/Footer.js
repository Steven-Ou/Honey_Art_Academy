"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Logo and Copyright */}
          <div className="mb-8 md:mb-0">
            <Image
              src="/images.png"
              alt="Honey Art Academy Logo"
              width={150}
              height={37}
              className="brightness-0 invert mb-4 mx-auto md:mx-0"
            />
            <p className="text-white/80">
              &copy; {new Date().getFullYear()} Honey Art Academy. All Rights
              Reserved.
            </p>
          </div>

          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 md:mb-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-white/80 hover:text-white text-2xl transition-colors"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              href="#"
              className="text-white/80 hover:text-white text-2xl transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              href="#"
              className="text-white/80 hover:text-white text-2xl transition-colors"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
