import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the icons you plan to use
import {
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons"; // Example for "Studio"

// This map connects the text from Sanity to the actual icon object
const iconMap = {
  youtube: faYoutube,
  instagram: faInstagram,
  facebook: faFacebook,
  studio: faCamera, // Using a camera icon as a placeholder
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
              {socialLinks?.map((link) => {
                const icon = iconMap[link.platform.toLowerCase()];
                if (!icon) return null; // Skips if no icon is found

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
