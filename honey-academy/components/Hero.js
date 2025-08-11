// steven-ou/honey_art_academy/Honey_Art_Academy-76e377b972348cda8e18ea36254ffbc08265972d/honey-academy/components/Hero.js
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative hero-bg text-white">
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-6 py-24 md:py-32 lg:py-48 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-lg">
          Nurturing Creative Souls at Honey Art Academy
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90 drop-shadow-md">
          At Honey Academy, we provide a stimulating environment where dance,
          art, music, and education flourish. Discover the perfect program for
          your child and watch them grow.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="#programs"
            className="bg-primary text-white font-bold py-4 px-10 rounded-full text-lg cta-button hover:bg-primary-dark"
          >
            Explore Our Programs
          </Link>
          <Link
            href="#contact"
            className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-white hover:text-primary transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
