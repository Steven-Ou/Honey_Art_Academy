import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const ptComponents = {
  marks: {
    center: ({ children }) => <div className="text-center">{children}</div>,
    right: ({ children }) => <div className="text-right">{children}</div>,
    left: ({ children }) => <div className="text-left">{children}</div>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
};

export async function generateStaticParams() {
  const programs = await client.fetch(
    `*[_type == "program"]{ "slug": slug.current }`
  );
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

async function getProgram(slug) {
  const query = `*[_type == "program" && slug.current == "${slug}"][0]{
    ...,
    gallery[]->{ _id, title, slug, image }
  }`;
  const program = await client.fetch(query);
  return program;
}

export default async function ProgramPage({ params }) {
  const { slug } = await params;
  const program = await getProgram(slug);

  if (!program) return <div>Program not found.</div>;

  return (
    // ✅ Applied dark mode background to the main container
    <main className="container mx-auto px-6 py-12 bg-white dark:bg-dark-background">
      <div className="max-w-4xl mx-auto">
        {/* ✅ Applied dark mode text color */}
        <h1 className="text-4xl font-extrabold text-primary-dark dark:text-dark-primary">
          {program.title}
        </h1>
        {program.subtitle && (
          // ✅ Applied dark mode text color
          <p className="text-xl text-gray-500 dark:text-dark-text_light mt-2">
            {program.subtitle}
          </p>
        )}
        {program.image && (
          <div className="relative h-96 w-full my-8">
            <Image
              src={urlFor(program.image).url()}
              alt={program.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        {/* ✅ Added dark:prose-invert to style the CMS content automatically */}
        <div className="prose lg:prose-xl max-w-none dark:prose-invert">
          <PortableText value={program.body} components={ptComponents} />
        </div>

        {program.gallery && (
          <div className="mt-12">
            {/* ✅ Applied dark mode text color */}
            <h2 className="text-3xl font-bold text-secondary dark:text-dark-primary mb-6">
              Explore Our Instruments
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {program.gallery?.filter(Boolean).map((item) => (
                <Link key={item._id} href={`/gallery/${item.slug.current}`}>
                  {/* ✅ Applied dark mode background to the card */}
                  <div className="group block bg-white dark:bg-dark-surface rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <div className="relative h-48 w-full">
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.title || "Gallery image"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      {/* ✅ Applied dark mode text color */}
                      <h3 className="text-lg font-bold text-primary-dark dark:text-dark-primary group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
