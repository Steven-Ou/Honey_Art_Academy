import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-primary-light relative">
      <div className="container mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-primary-dark">
            Where Dance, Art, Music, and Education Flourish.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 text-gray-700">
            Honey Academy is a licensed, professional after-school program with
            two campuses. Our 10,000 sq ft campus provides a stimulating
            environment for your child.
          </p>
          <Link
            href="#about"
            className="bg-primary text-white font-bold py-4 px-8 rounded-full text-lg cta-button hover:bg-primary-dark"
          >
            More About Us
          </Link>
        </div>

        {/* Right Side: Image Collage */}
        <div className="lg:w-1/2 relative h-96 lg:h-[500px]">
          <div className="absolute w-full h-full bg-primary rounded-l-full right-0 top-0 -mr-32"></div>
          <div className="absolute grid grid-cols-2 grid-rows-2 gap-4 w-full h-full p-8 z-10">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1518778650392-411a7536e9d1?q=80&w=400"
                alt="child painting"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1587613864193-506de782789d?q=80&w=400"
                alt="children in class"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1509306253193-2a59c5d01248?q=80&w=800"
                alt="child playing piano"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
