import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

// This is a reusable component for our rich text editor
const ptComponents = {
  marks: {
    center: ({ children }) => <div className="text-center">{children}</div>,
    right: ({ children }) => <div className="text-right">{children}</div>,
    left: ({ children }) => <div className="text-left">{children}</div>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
};

// Component to render the Hero Section
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

// Component to render the Text with Image Section
const TextWithImageSection = ({ section }) => (
  <div
    className={`grid md:grid-cols-2 gap-12 items-center ${section.imagePlacement === "left" ? "md:grid-flow-row-dense" : ""}`}
  >
    <div className={section.imagePlacement === "left" ? "md:col-start-2" : ""}>
      <h2 className="text-4xl font-bold text-primary-dark mb-4">
        {section.title}
      </h2>
      {/* ADDED: Render the tagline */}
      {section.tagline && (
        <p className="text-lg text-gray-500 mb-4 font-semibold">
          {section.tagline}
        </p>
      )}
      <div className="prose lg:prose-xl">
        <PortableText value={section.content} components={ptComponents} />
      </div>
    </div>
    {section.image && (
      <div
        className={`relative ${section.imagePlacement === "left" ? "md:col-start-1" : ""}`}
      >
        <div className="relative h-96 w-full rounded-lg shadow-xl">
          <Image
            src={urlFor(section.image).url()}
            alt={section.title || "Section image"}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        {/* ADDED: Render the image caption */}
        {section.image.caption && (
          <p className="text-center text-sm text-gray-500 mt-2">
            {section.image.caption}
          </p>
        )}
      </div>
    )}
  </div>
);

// A map to select the correct component for each section type
const sectionComponents = {
  heroSection: HeroSection,
  textWithImageSection: TextWithImageSection,
};

// The new query to fetch the page builder content
async function getAboutPage() {
  const query = `*[_type == "aboutPage"][0]{
    title,
    pageBuilder[]
  }`;
  return client.fetch(query);
}

export default async function AboutPage() {
  const data = await getAboutPage();

  if (!data) {
    return (
      <div className="text-center py-24">
        <h1 className="text-2xl font-bold">About Page Not Found</h1>
        <p>
          Please make sure the "About Page" document is created and published in
          the Sanity Studio.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Map through the pageBuilder array and render the correct component for each section */}
      {data.pageBuilder?.map((section) => {
        const SectionComponent = sectionComponents[section._type];
        if (!SectionComponent) return null;

        // Add a wrapper for spacing between sections
        return (
          <div key={section._key} className="container mx-auto px-6 py-16">
            <SectionComponent section={section} />
          </div>
        );
      })}

      {/* You can still have a static CTA section if you like */}
      <div className="bg-primary-light py-16 text-center">
        <h2 className="text-3xl font-bold text-primary-dark">
          Ready to Join Us?
        </h2>
        <p className="text-gray-600 mt-2">
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
