"use client"; // This is the crucial directive

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// --- Reusable Components (with Animations and Dark Mode) ---

const ptComponents = {
  marks: {
    center: ({ children }) => <div className="text-center">{children}</div>,
    right: ({ children }) => <div className="text-right">{children}</div>,
    left: ({ children }) => <div className="text-left">{children}</div>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
};

const HeroSection = ({ section }) => (
  <div className="relative h-[50vh] w-full">
    {section.backgroundImage && (
      <Image
        src={urlFor(section.backgroundImage).url()}
        alt={section.heading || "Hero background"}
        fill
        className="object-cover"
      />
    )}
    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold text-white">{section.heading}</h1>
      {section.subheading && (
        <p className="text-xl text-white mt-4">{section.subheading}</p>
      )}
    </div>
  </div>
);

const TextWithImageSection = ({ section }) => {
  // 1. Use the scroll animation hook
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    // 2. Attach the ref and apply animation classes
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-12 items-center transition-opacity duration-1000 ${
        isVisible ? "animate-in fade-in" : "opacity-0"
      } ${section.imagePlacement === "left" ? "md:grid-flow-row-dense" : ""}`}
    >
      <div
        className={section.imagePlacement === "left" ? "md:col-start-2" : ""}
      >
        <h2 className="text-4xl font-bold text-primary-dark dark:text-dark-primary mb-4">
          {section.title}
        </h2>
        {section.tagline && (
          <p className="text-lg text-gray-500 dark:text-dark-text_light mb-4 font-semibold">
            {section.tagline}
          </p>
        )}
        <div className="prose lg:prose-xl dark:prose-invert">
          <PortableText value={section.content} components={ptComponents} />
        </div>
      </div>
      {section.image?.image && (
        <div
          className={`relative ${
            section.imagePlacement === "left" ? "md:col-start-1" : ""
          }`}
        >
          <div className="relative h-96 w-full rounded-lg shadow-xl">
            <Image
              src={urlFor(section.image.image).url()}
              alt={section.image.caption || section.title || "Section image"}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {section.image.caption && (
            <p className="text-center text-sm text-gray-500 dark:text-dark-text_light mt-2">
              {section.image.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const TeamSection = ({ section }) => {
  // 1. Use the scroll animation hook
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const groupedInstructors = section.instructors?.reduce((acc, instructor) => {
    instructor.programs?.forEach((program) => {
      if (!acc[program.title]) {
        acc[program.title] = [];
      }
      acc[program.title].push(instructor);
    });
    return acc;
  }, {});

  const [activeTab, setActiveTab] = useState(
    Object.keys(groupedInstructors || {})[0] || ""
  );

  if (!groupedInstructors) return null;

  const activeInstructors = groupedInstructors[activeTab] || [];

  return (
    // 2. Attach the ref and apply animation classes
    <div
      ref={ref}
      className={`text-center transition-opacity duration-1000 ${
        isVisible ? "animate-in fade-in" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl font-bold text-primary-dark dark:text-dark-primary mb-8">
        {section.heading}
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.keys(groupedInstructors).map((programTitle) => (
          <button
            key={programTitle}
            onClick={() => setActiveTab(programTitle)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === programTitle
                ? "bg-primary text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-dark-surface dark:text-dark-text_light dark:hover:bg-secondary"
            }`}
          >
            {programTitle}
          </button>
        ))}
      </div>

      <div id="instructors-grid" className="mt-8">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
          {activeInstructors.map((instructor) => (
            <div key={instructor._id} className="text-center w-40">
              <div className="relative w-32 h-32 mx-auto rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                  src={urlFor(instructor.photo).url()}
                  alt={instructor.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h4 className="text-xl font-bold mt-4 text-primary-dark dark:text-dark-primary">
                {instructor.name}
              </h4>
              <p className="text-gray-500 dark:text-dark-text_light">
                {instructor.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const sectionComponents = {
  heroSection: HeroSection,
  textWithImageSection: TextWithImageSection,
  teamSection: TeamSection,
};

export default function AboutPageClient({ pageData }) {
  // Use the animation hook for the final CTA section
  const [ctaRef, isCtaVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="bg-white dark:bg-dark-background">
      {pageData.pageBuilder?.map((section, index) => {
        const SectionComponent = sectionComponents[section._type];
        if (!SectionComponent) return null;

        if (index === 0) {
          return <SectionComponent key={section._key} section={section} />;
        }

        return (
          <div key={section._key} className="container mx-auto px-6 py-16">
            <SectionComponent section={section} />
          </div>
        );
      })}
      {/* Call to Action section with animation */}
      <div
        ref={ctaRef}
        className={`bg-primary-light dark:bg-dark-surface py-16 text-center transition-opacity duration-1000 ${
          isCtaVisible ? "animate-in fade-in" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-primary-dark dark:text-dark-primary">
          Ready to Join Us?
        </h2>
        <p className="text-gray-600 dark:text-dark-text_light mt-2">
          Get in touch to learn more about our programs and enrollment.
        </p>
        <Link
          href="/#contact"
          className="mt-6 inline-block bg-primary text-white font-bold py-3 px-8 rounded-full text-lg cta-button hover:bg-primary-dark"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
