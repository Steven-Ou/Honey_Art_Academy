import React from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

async function getGalleryItem(slug) {
  const query = `*[_type == "galleryItem" && slug.current == "${slug}"][0]`;
  const item = await client.fetch(query);
  return item;
}

export default async function GalleryItemPage({ params }) {
  const item = await getGalleryItem(params.slug);

  if (!item) {
    return <div>Item not found.</div>;
  }

  return (
    <main className="container mx-auto px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-dark">{item.title}</h1>
        {item.image && (
          <div className="relative h-96 w-full my-8">
            <Image
              src={urlFor(item.image).url()}
              alt={item.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className="prose lg:prose-xl">
          <PortableText value={item.details} />
        </div>
      </div>
    </main>
  );
}