"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

// This component receives settings data from a parent layout or page
export default function Footer({ data }) {
  // Use optional chaining to safely access nested properties
  const { address, email, phone, socials, logo, siteTitle } = data || {};

  // A map to associate social platform names from Sanity with FontAwesome icons
  const socialIconMap = {
    youtube: faYoutube,
    instagram: faInstagram,
    // Add other platforms here as needed (e.g., facebook: faFacebook)
  };

  return (
    // This respects your request to not change the background colors
    <footer className="bg-primary-dark dark:bg-dark-background text-white dark:text-dark-text">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Academy Info & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            {logo && siteTitle && (
              <Link href="/" className="flex items-center space-x-2 mb-2">
                <Image
                  src={urlFor(logo).url()}
                  alt={`${siteTitle} Logo`}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="text-xl font-bold">{siteTitle}</span>
              </Link>
            )}
            <p className="text-gray-300 dark:text-dark-text_light max-w-xs">
              Nurturing creativity and passion through the arts.
            </p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-4 h-4 mr-3 flex-shrink-0"
                />
                <span className="text-gray-300 dark:text-dark-text_light">
                  {address}
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-4 h-4 mr-3 flex-shrink-0"
                />
                <a
                  href={`tel:${phone}`}
                  className="text-gray-300 dark:text-dark-text_light hover:underline"
                >
                  {phone}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-4 h-4 mr-3 flex-shrink-0"
                />
                <a
                  href={`mailto:${email}`}
                  className="text-gray-300 dark:text-dark-text_light hover:underline"
                >
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socials?.map((social) => {
                const icon = socialIconMap[social.platform.toLowerCase()];
                if (!icon) return null;
                return (
                  <a
                    key={social._key}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 dark:text-dark-text_light hover:text-white transition-colors"
                    aria-label={social.platform}
                  >
                    <FontAwesomeIcon icon={icon} className="text-2xl" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 dark:border-gray-600 pt-6 text-center text-gray-400 dark:text-dark-text_light">
          <p>
            &copy; {new Date().getFullYear()} Honey Art Academy. All Rights
            Reserved.
          </p>
          <p className="text-sm mt-2 opacity-75">
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/steven-ou-a49662205/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Steven Ou
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
