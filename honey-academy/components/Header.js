import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// This new function determines the correct URL based on the link type
const getUrlForLink = (link) => {
  switch (link.linkType) {
    case "internal":
      // Handle different internal document types
      if (link.type === "aboutPage") return "/about";
      if (link.type === "program") return `/programs/${link.slug}`;
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
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <Link href="/">
            {logo ? (
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
        <nav className="hidden md:flex items-center space-x-6">
          {mainNav?.map((link) => (
            <Link key={link.linkText} href={getUrlForLink(link)}>
              <span className="text-gray-600 hover:text-primary transition-colors font-medium">
                {link.linkText}
              </span>
            </Link>
          ))}
          {/* Static Contact button can remain */}
          <Link
            href="/#contact"
            className="bg-primary text-white font-bold py-2 px-6 rounded-full cta-button hover:bg-primary-dark"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
