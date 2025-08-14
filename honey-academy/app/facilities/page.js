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
    <main className="container mx-auto px-6 py-12 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-dark">{data.title}</h1>
      </div>

      {/* Masonry-style grid for the images */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {data.gallery?.map((item) => (
          <div key={item._key} className="break-inside-avoid">
            <figure className="bg-gray-50 p-4 rounded-lg shadow-md">
              <div className="relative w-full">
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.caption || "Facility image"}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-md"
                />
              </div>
              {item.caption && (
                <figcaption className="text-center text-sm text-gray-600 mt-3 italic">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          </div>
        ))}
      </div>
    </main>
  );
}
