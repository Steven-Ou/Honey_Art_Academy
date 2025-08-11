import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 relative h-80 w-full rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {/* Using a local image from the 'public' folder */}
            <Image
              src="/images.png"
              alt="Honey Art Academy Studio"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-primary-dark mb-6">
              Fostering Excellence For 8+ Years
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              Honey Art Academy is more than just an after-school program. We
              are a vibrant community dedicated to providing the finest academic
              and creative education.
            </p>
            <p className="mb-8 text-lg text-gray-700">
              With over thirty experienced instructors, we are passionate about
              giving your child the head-start they deserve.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-primary-light p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-primary">
                <p className="text-4xl lg:text-5xl font-bold text-primary-dark">
                  30+
                </p>
                <p className="text-gray-600 font-medium mt-2">Instructors</p>
              </div>
              <div className="bg-primary-light p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-primary">
                <p className="text-4xl lg:text-5xl font-bold text-primary-dark">
                  500+
                </p>
                <p className="text-gray-600 font-medium mt-2">Happy Students</p>
              </div>
              <div className="bg-primary-light p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-primary">
                <p className="text-4xl lg:text-5xl font-bold text-primary-dark">
                  10k
                </p>
                <p className="text-gray-600 font-medium mt-2">Sq. Ft. Campus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
