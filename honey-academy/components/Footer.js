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
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images.png"
              alt="Honey Art Academy Logo"
              width={150}
              height={37}
              className="brightness-0 invert mb-4"
            />
            <p className="text-sm text-white/70">
              &copy; {new Date().getFullYear()} Honey Art Academy. <br /> All
              Rights Reserved.
            </p>
          </div>

          {/* Footer Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#about" className="text-white/80 hover:text-white">
                About
              </Link>
              <Link href="#programs" className="text-white/80 hover:text-white">
                Programs
              </Link>
              <Link
                href="#testimonials"
                className="text-white/80 hover:text-white"
              >
                Testimonials
              </Link>
              <Link href="#contact" className="text-white/80 hover:text-white">
                Contact
              </Link>
              <Link href="/studio" className="text-white/80 hover:text-white">
                Studio Login
              </Link>
            </nav>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <Link
                href="#"
                className="text-white/80 hover:text-white text-2xl"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link
                href="#"
                className="text-white/80 hover:text-white text-2xl"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                href="#"
                className="text-white/80 hover:text-white text-2xl"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
