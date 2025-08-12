import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getProgram(slug) {
  const query = `*[_type == "program" && slug.current == "${slug}"][0]{
    _id,
    title,
    image,
    body,
    gallery[]{
      _key,
      asset,
      caption
    }
  }`;
  const program = await client.fetch(query);
  return program;
}

export default async function ProgramPage({ params }) {
  const program = await getProgram(params.slug);

  if (!program) {
    return <div>Program not found.</div>;
  }

  return (
    <main className="container mx-auto px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-primary-dark">
          {program.title}
        </h1>
        {program.image && (
          <div className="relative h-96 w-full rounded-xl shadow-lg overflow-hidden my-8">
            <Image
              src={urlFor(program.image).url()}
              alt={program.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="prose lg:prose-xl max-w-none">
          <PortableText value={program.body} />
        </div>
        {program.gallery && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-secondary mb-6">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.gallery.map((image) => (
                <div
                  key={image._key}
                  className="relative h-64 w-full rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={urlFor(image.asset).url()}
                    alt={image.caption || "Gallery image"}
                    fill
                    className="object-cover"
                  />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center text-sm">
                      {image.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
