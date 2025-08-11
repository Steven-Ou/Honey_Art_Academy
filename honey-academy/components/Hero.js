import React from "react";

export default function Hero() {
  return (
    <section className="relative hero-bg text-white">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-6 py-32 md:py-48 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
          Nurturing Creative Souls
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90 drop-shadow-md">
          At Honey Art Academy, we provide a stimulating environment where
          dance, art, music, and education flourish. Discover the perfect
          program for your child and watch them grow.
        </p>
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
