import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client"; // 1. Import the Sanity client

// This component remains the same
const ProgramCard = ({ title, description }) => (
  <div className="program-card bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative w-full h-56 bg-primary-light">
      <Image src="/images.png" alt={title} fill className="object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-secondary">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="font-bold text-primary hover:text-primary-dark">
        Learn More <i className="fas fa-arrow-right ml-1"></i>
      </a>
    </div>
  </div>
);

// 2. Make the component async to fetch data
export default async function Programs() {
  // 3. Write the GROQ query and fetch data
  const programData = await client.fetch(`*[_type == "program"]`);

  return (
    <section id="programs" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-dark">Our Programs</h2>
          <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
            From fine arts to performing arts, we offer a diverse range of
            programs to ignite your child's passion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 4. Map over the fetched data instead of the hardcoded array */}
          {programData.map((prog) => (
            <ProgramCard
              key={prog._id}
              title={prog.title}
              description={prog.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
