import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function Hero({ hero }) {
  const { heading, subheading, backgroundImage } = hero || {};

  return (
    <section className="relative text-white h-[70vh]">
      {/* Background Image */}
      {backgroundImage ? (
        <Image
          src={urlFor(backgroundImage).url()}
          alt={heading || "Hero background"}
          fill
          className="object-cover z-0" // Set to the bottom layer
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gray-700 z-0"></div>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
          {heading || "Nurturing Creative Souls"}
        </h1>
        {subheading && (
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90 drop-shadow-md">
            {subheading}
          </p>
        )}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#programs"
            className="bg-primary text-white font-bold py-4 px-10 rounded-full text-lg cta-button hover:bg-primary-dark"
          >
            Explore Our Programs
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-white hover:text-primary transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
