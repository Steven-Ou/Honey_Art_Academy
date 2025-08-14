import React from "react";
import Link from "next/link";
// Import the Font Awesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Create a map to look up the correct icon object based on the string from Sanity
const iconMap = {
  youtube: faYoutube,
  instagram: faInstagram,
  // Add other platforms here as you need them, e.g., facebook: faFacebook
};

export default function Footer({ socialLinks, copyrightText }) {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Honey Art Academy</h2>
            <p className="max-w-sm mt-2 text-primary-light">
              Nurturing creativity and passion through the arts.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Map over the dynamic social links */}
              {socialLinks?.map((link) => {
                const icon = iconMap[link.platform.toLowerCase()];
                if (!icon) return null; // Don't render if the icon doesn't exist in our map

                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-light hover:text-white transition-colors text-2xl"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-center text-primary-light mt-8 border-t border-gray-700 pt-4">
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
