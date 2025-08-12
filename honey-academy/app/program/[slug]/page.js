import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

// This function fetches the specific program based on the slug in the URL
async function getProgram(slug) {
  const query = `*[_type == "program" && slug.current == "${slug}"][0]`;
  const program = await client.fetch(query);
  return program;
}

export default async function ProgramPage({ params }) {
  // `params.slug` comes from the folder name [slug]
  const program = await getProgram(params.slug);

  if (!program) {
    return <div>Program not found</div>;
  }

  return (
    <main className="container mx-auto px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-primary-dark">
          {program.title}
        </h1>
        <div className="relative h-96 w-full rounded-xl shadow-lg overflow-hidden my-8">
          <Image
            src={urlFor(program.image).url()}
            alt={program.title}
            fill
            className="object-cover"
          />
        </div>
        {/* Add Tailwind's typography styles for rich text */}
        <div className="prose lg:prose-xl max-w-none">
          <PortableText value={program.body} />
        </div>
      </div>
    </main>
  );
}
