import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding scroll-mt-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
            alt="Children learning at Honey Academy"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-primary-dark mb-6">
            Fostering Excellence For 8+ Years
          </h2>
          <p className="mb-4 text-lg text-gray-700">
            Honey Academy is more than just an after-school program. We are a
            vibrant community with two campuses spanning 10,000 sq ft, dedicated
            to providing the finest academic and creative education.
          </p>
          <p className="mb-8 text-lg text-gray-700">
            With over thirty experienced and licensed instructors, we are
            passionate about giving your child the head-start they deserve.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-primary">30+</p>
              <p className="text-gray-600">Instructors</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-primary">
                500+
              </p>
              <p className="text-gray-600">Happy Students</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-primary">10k</p>
              <p className="text-gray-600">Sq. Ft. Campus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
