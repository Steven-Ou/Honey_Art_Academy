import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// The getUrlForLink function helps determine the correct path for different content types
const getUrlForLink = (link) => {
  switch (link._type) {
    case "program":
      return `/programs/${link.slug}`;
    case "aboutPage":
      return "/about";
    case "event":
      return `/events/${link.slug}`;
    default:
      return "/";
  }
};

// The Header now receives props
export default function Header({ logo, mainNav }) {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <Link href="/">
            {logo ? (
              <Image
                src={urlFor(logo).url()}
                alt="Honey Art Academy Logo"
                width={150}
                height={50}
              />
            ) : (
              "Honey Art Academy"
            )}
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {/* Map over the dynamic navigation links */}
          {mainNav?.map((item) => (
            <Link key={item._id || item.title} href={getUrlForLink(item)}>
              <span className="text-gray-600 hover:text-primary transition-colors">
                {item.title}
              </span>
            </Link>
          ))}
          {/* You can still have static links if you want */}
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
