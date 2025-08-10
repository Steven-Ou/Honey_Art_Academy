import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mb-24 scroll-mt-20 relative py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">
        Fostering Excellence For 8+ Years
      </h2>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
              alt="Children learning at Honey Academy"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <p className="mb-4 text-lg">
              Honey Academy is more than just an after-school. We are a vibrant
              community with two campuses spanning 10,000 sq ft, dedicated to
              providing the finest academic and creative education.
            </p>
            <p className="mb-6 text-lg">
              With over thirty experienced and licensed instructors, we are
              passionate about giving your child the head-start they deserve.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-4xl font-bold text-primary">30+</p>
                <p className="text-gray-600">Instructors</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">500+</p>
                <p className="text-gray-600">Happy Students</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">10k</p>
                <p className="text-gray-600">Sq. Ft. Campus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
