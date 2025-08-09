import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-bg text-white">
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Nurturing Tomorrow's Leaders & Artists
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Located in the heart of Flushing, Honey Academy offers a rich blend of
          academic and creative programs to help your child thrive.
        </p>
        <Link
          href="#programs"
          className="bg-white text-amber-600 font-bold py-4 px-8 rounded-full text-lg cta-button hover:bg-amber-50"
        >
          Explore Our Programs
        </Link>
      </div>
    </section>
  );
}
