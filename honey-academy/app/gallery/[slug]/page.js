import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export async function generateStaticParams() {
  const items = await client.fetch(
    `*[_type == "galleryItem"]{ "slug": slug.current }`
  );
  return items.map((item) => ({
    slug: item.slug,
  }));
}

async function getGalleryItem(slug) {
  const query = `*[_type == "galleryItem" && slug.current == "${slug}"][0]`;
  return client.fetch(query);
}

export default async function GalleryItemPage({ params }) {
  const { slug } = await params;
  const item = await getGalleryItem(params.slug);

  if (!item) return <div>Item not found.</div>;

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
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        )}
        <div className="prose lg:prose-xl max-w-none">
          <PortableText value={item.details} />
        </div>

        {item.videoUrl && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Video</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={item.videoUrl.replace("watch?v=", "embed/")}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        )}

        {item.contactUrl && (
          <div className="mt-12 text-center">
            <Link
              href={item.contactUrl}
              className="bg-primary text-white font-bold py-4 px-10 rounded-full text-lg cta-button hover:bg-primary-dark"
            >
              Contact Us About This Program
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
