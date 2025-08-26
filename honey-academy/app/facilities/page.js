import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

async function getFacilitiesPage() {
  const query = `*[_type == "facilitiesPage"][0]{
    title,
    gallery[]
  }`;
  return client.fetch(query);
}

export default async function FacilitiesPage() {
  const data = await getFacilitiesPage();

  if (!data) {
    return (
      <div className="text-center py-24">
        <h1 className="text-2xl font-bold">Facilities Page Not Found</h1>
        <p>
          Please make sure the page is created and published in the Sanity
          Studio.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-dark-background">
      <div className="relative h-80">
        <Image
          src={urlFor(page.mainImage).url()}
          alt={page.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center">
            {page.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose lg:prose-xl max-w-none dark:prose-invert mb-12">
            <PortableText value={page.body} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {page.gallery?.map((image) => (
            <div
              key={image._key}
              className="relative h-64 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={urlFor(image).url()}
                alt="Facility image"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
