import React from "react";
import Link from "next/link"; // <-- Import Link
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getProgram(slug) {
  // Update the query to get the full gallery item data
  const query = `*[_type == "program" && slug.current == "${slug}"][0]{
    ...,
    gallery[]->{
      _id,
      title,
      slug,
      image
    }
  }`;
  const program = await client.fetch(query);
  return program;
}

export default async function ProgramPage({ params }) {
  const program = await getProgram(params.slug);

  if (!program) return <div>Program not found.</div>;

  return (
    <main className="container mx-auto px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-primary-dark">
          {program.title}
        </h1>
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
        <div className="prose lg:prose-xl max-w-none">
          <PortableText value={program.body} />
        </div>

        {program.gallery && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Explore Our Instruments
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.gallery?.filter(Boolean).map((item) => (
                // Wrap the card in a Link
                <Link key={item._id} href={`/gallery/${item.slug.current}`}>
                  <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.title || "Gallery image"}
                      fill
                      className="object-cover"
                    />
                    {item.title && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
                        {item.title}
                      </div>
                    )}
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
