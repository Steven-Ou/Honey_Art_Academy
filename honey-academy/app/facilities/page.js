import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

async function getFacilitiesPage() {
  // This query fetches the title and the full image data for the gallery
  const query = `*[_type == "facilitiesPage"][0]{
    title,
    gallery[]{
      _key,
      caption,
      image {
        asset->
      }
    }
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
      {/* Simple Hero Section using the page title */}
      <div className="bg-gray-100 dark:bg-dark-surface py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-primary-dark dark:text-dark-primary">
            {data.title}
          </h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.gallery?.map((item) => (
            <div key={item._key}>
              <div className="relative h-80 w-full rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.caption || "Facility image"}
                  fill
                  className="object-cover"
                />
              </div>
              {item.caption && (
                <p className="text-center text-sm text-gray-500 dark:text-dark-text_light mt-2">
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
