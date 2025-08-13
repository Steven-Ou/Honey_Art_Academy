import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

// A custom component to render the video embed
const VideoEmbed = ({ value }) => {
  const url = value.url;
  if (!url) return null;
  // Simple logic to create an embeddable URL
  const embedUrl = url.includes("youtube.com")
    ? url.replace("watch?v=", "embed/")
    : url;

  return (
    <div className="my-8 aspect-w-16 aspect-h-9">
      <iframe
        src={embedUrl}
        title="Video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
};

// Define the components for PortableText
const ptComponents = {
  types: {
    videoEmbed: VideoEmbed,
    // you can add more custom components here
  },
};

async function getGalleryItem(slug) {
  const query = `*[_type == "galleryItem" && slug.current == $slug][0]{
    title,
    subtitle,
    image,
    content, // Fetch the new 'content' field
    contactUrl
  }`;
  const item = await client.fetch(query, { slug });
  return item;
}

export default async function GalleryItemPage({ params }) {
  const { slug } = await params;
  const item = await getGalleryItem(slug);

  if (!item) return <div>Item not found.</div>;

  return (
    <main className="container mx-auto px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-dark">{item.title}</h1>
        {item.subtitle && (
          <p className="text-xl text-gray-500 mt-2">{item.subtitle}</p>
        )}

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
          <PortableText value={item.content} components={ptComponents} />
        </div>

        {item.contactUrl && (
          <div className="mt-12 text-center">
            <Link
              href={item.contactUrl}
              className="bg-primary text-white font-bold py-4 px-10 rounded-full text-lg cta-button hover:bg-primary-dark"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
