import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mb-24 scroll-mt-20 relative">
      {/* Decorative Background Shape */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        aria-hidden="true"
      >
        <svg
          width="800"
          height="800"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M600 400C600 510.457 510.457 600 400 600C289.543 600 200 510.457 200 400C200 289.543 289.543 200 400 200C510.457 200 600 289.543 600 400Z"
            fill="#FEF3C7"
            fillOpacity="0.5"
          />
          <path
            d="M707.107 464.645C746.229 425.523 746.229 361.523 707.107 322.401L477.599 92.8934C438.477 53.7715 374.477 53.7715 335.355 92.8934L92.8934 335.355C53.7715 374.477 53.7715 438.477 92.8934 477.599L322.401 707.107C361.523 746.229 425.523 746.229 464.645 707.107L707.107 464.645Z"
            fill="#FDE68A"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Image
            src="https://placehold.co/600x400/FFD54F/333333?text=Our+Vibrant+Community"
            alt="Honey Academy Community"
            width={600}
            height={400}
            className="rounded-lg shadow-xl w-full h-auto"
            unoptimized={true}
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-amber-700">
            Fostering Excellence For Over 8 Years
          </h2>
          <p className="mb-4">
            Honey Academy is more than just an after-school. We are a vibrant
            community with two campuses spanning 10,000 sq ft, dedicated to
            providing the finest academic and creative education.
          </p>
          <p className="mb-6">
            With over thirty experienced and licensed instructors, we are
            passionate about giving your child the head-start they deserve. Our
            specialized classes prepare students for academic success, build
            self-confidence, and enrich their souls.
          </p>
          <div className="flex space-x-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-600">30+</p>
              <p className="text-gray-600">Instructors</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-600">500+</p>
              <p className="text-gray-600">Happy Students</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-600">10k</p>
              <p className="text-gray-600">Sq. Ft. Campus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
