import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative hero-bg text-white">
      <div className="container mx-auto px-6 py-24 md:py-32 lg:py-48 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-md">
          Nurturing Creative Souls
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 drop-shadow-sm">
          At Honey Academy, we provide a stimulating environment where dance,
          art, music, and education flourish. Discover the perfect program for
          your child.
        </p>
        <Link
          href="#programs"
          className="bg-primary text-white font-bold py-4 px-10 rounded-full text-lg cta-button hover:bg-primary-dark"
        >
          Explore Our Programs
        </Link>
      </div>
    </section>
  );
}
