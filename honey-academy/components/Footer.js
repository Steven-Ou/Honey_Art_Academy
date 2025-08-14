import React from "react";
// Import the Font Awesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons"; // A placeholder for the "Studio" icon

// This map will look up the correct icon based on the string you enter in Sanity
const iconMap = {
  youtube: faYoutube,
  studio: faCameraRetro, // Using a placeholder, you can change this to any Font Awesome icon
  // you can add more here like:
  // facebook: faFacebook,
  // instagram: faInstagram,
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
              {/* This now correctly maps over your links and finds the right icon */}
              {socialLinks?.map((link) => {
                const icon = iconMap[link.platform.toLowerCase()];
                if (!icon) return null; // Don't render if we don't have an icon for it

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
