import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

// Icon mapping for social links
const iconMap = {
  youtube: faYoutube,
  instagram: faInstagram,
  facebook: faFacebook,
  studio: faCamera,
};

export default function Footer({
  socialLinks,
  copyrightText,
  address,
  phone,
  email,
}) {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Academy Info */}
          <div>
            <h2 className="text-2xl font-bold">Honey Art Academy</h2>
            <p className="max-w-sm mt-2 text-primary-light">
              Nurturing creativity and passion through the arts.
            </p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-primary-light">
              {address && (
                <li className="flex items-center justify-center md:justify-start">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 w-4" />
                  <span>{address}</span>
                </li>
              )}
              {phone && (
                <li className="flex items-center justify-center md:justify-start">
                  <FontAwesomeIcon icon={faPhone} className="mr-3 w-4" />
                  <a href={`tel:${phone}`} className="hover:text-white">
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li className="flex items-center justify-center md:justify-start">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3 w-4" />
                  <a href={`mailto:${email}`} className="hover:text-white">
                    {email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks?.map((link) => {
                const icon = iconMap[link.platform.toLowerCase()];
                if (!icon) return null;

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

        {/* Copyright section */}
        <div className="text-center text-primary-light mt-8 border-t border-gray-700 pt-4">
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
