import React from "react";
import Link from "next/link";

export default function Footer({ data }) {
  const { address, email, phone, socials, footerLinks } = data || {};

  return (
    <footer className="bg-primary-dark dark:bg-dark-background text-white dark:text-dark-text">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Honey Art Academy</h3>
            <p className="text-gray-300 dark:text-dark-text_light">{address}</p>
            <p className="mt-2 text-gray-300 dark:text-dark-text_light">
              Email:{" "}
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </p>
            <p className="mt-2 text-gray-300 dark:text-dark-text_light">
              Phone:{" "}
              <a href={`tel:${phone}`} className="hover:underline">
                {phone}
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks?.map((link) => (
                <li key={link._key}>
                  <Link href={link.url}>
                    <div className="text-gray-300 dark:text-dark-text_light hover:text-white transition-colors">
                      {link.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socials?.map((social) => (
                <a
                  key={social._key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 dark:text-dark-text_light hover:text-white"
                >
                  <i
                    className={`fab fa-${social.platform.toLowerCase()} text-2xl`}
                  ></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 dark:text-dark-text_light">
          <p>
            &copy; {new Date().getFullYear()} Honey Art Academy. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
