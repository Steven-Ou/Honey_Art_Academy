import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const ProgramCard = ({ title, subtitle, description, image, slug }) => (
  <Link
    href={`/programs/${slug.current}`}
    className="w-full md:w-[45%] lg:w-[30%]"
  >
    <div className="program-card bg-white rounded-lg shadow-lg overflow-hidden h-full">
      <div className="relative w-full h-56 bg-primary-light">
        <Image
          src={image ? urlFor(image).url() : "/images.png"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1 text-secondary">{title}</h3>
        {subtitle && <p className="text-md text-gray-500 mb-2">{subtitle}</p>}
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="font-bold text-primary hover:text-primary-dark">
          Learn More <i className="fas fa-arrow-right ml-1"></i>
        </div>
      </div>
    </div>
  </Link>
);

// This is no longer an async component
export default function Programs({ programsData, programCards }) {
  const { title, subtitle } = programsData || {};

  return (
    <section id="programs" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-dark">
            {title || "Our Programs"}
          </h2>
          {subtitle && (
            <p className="text-lg mt-4 text-text-light max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex flex-wrap justify-center items-stretch gap-8">
          {/* Use the programCards passed in via props */}
          {programCards?.map((prog) => (
            <ProgramCard
              key={prog._id}
              title={prog.title}
              subtitle={prog.subtitle}
              description={prog.description}
              image={prog.image}
              slug={prog.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
