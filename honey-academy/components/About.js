import React from "react";
import Image from "next/image";
import Link from "next/link";

// Restore the StatCard component definition
const StatCard = ({ number, label, icon }) => (
  <div className="text-center">
    <div className="bg-primary-light p-4 rounded-full inline-block mb-4">
      <i className={`${icon} text-primary-dark text-3xl`}></i>
    </div>
    <p className="text-4xl font-bold text-secondary">{number}</p>
    <p className="text-gray-500 mt-1">{label}</p>
  </div>
);

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src="/images.png" // This uses the static image for the homepage
              alt="About Honey Art Academy"
              fill
              className="object-cover"
            />
          </div>
          <div className="about-content">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              About Honey Art Academy
            </h2>
            <p className="text-gray-600 mb-6">
              Founded with a passion for nurturing creativity, Honey Art Academy
              offers a vibrant and inspiring space for students of all ages to
              explore their artistic talents.
            </p>
            {/* Restore the StatCards grid */}
            <div className="grid grid-cols-3 gap-6 my-8">
              <StatCard number="10+" label="Instructors" icon="fas fa-users" />
              <StatCard
                number="500+"
                label="Happy Students"
                icon="fas fa-child"
              />
              <StatCard
                number="2000"
                label="Sq. Ft. Campus"
                icon="fas fa-school"
              />
            </div>
            {/* Add the "Learn More" button that links to the new page */}
            <div className="mt-8">
              <Link
                href="/about"
                className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg cta-button hover:bg-primary-dark"
              >
                Learn More About Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
