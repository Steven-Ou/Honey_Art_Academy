import React from "react";
import Image from "next/image";
import Link from "next/link"; // This was the missing import causing the crash
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

// --- Component Definitions ---

const VideoEmbed = ({ value }) => {
  const getEmbedUrl = (url) => {
    if (!url) return null;
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname.includes("youtube.com")) {
        const videoId = urlObj.searchParams.get("v");
        return `https://www.youtube.com/embed/${videoId}`;
      }
      if (urlObj.hostname.includes("vimeo.com")) {
        const videoId = urlObj.pathname.split("/").pop();
        return `https://player.vimeo.com/video/${videoId}`;
      }
    } catch (e) {
      console.error("Invalid video URL:", e);
      return null;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(value?.url);
  if (!embedUrl) return <p>Invalid video URL.</p>;

  return (
    <div
      className="my-6 relative"
      style={{ paddingBottom: "56.25%", height: 0 }}
    >
      <iframe
        src={embedUrl}
        title="Embedded video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
};

const ImageWithCaption = ({ value }) => {
  if (!value?.image?.asset) return null;
  return (
    <figure className="my-6">
      <Image
        src={urlFor(value.image).url()}
        alt={value.caption || "Image"}
        width={800}
        height={600}
        className="w-full h-auto rounded-lg"
      />
      {value.caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
};

const ptComponents = {
  types: {
    videoEmbed: VideoEmbed,
    imageWithCaption: ImageWithCaption,
  },
  marks: {
    center: ({ children }) => <div className="text-center">{children}</div>,
    right: ({ children }) => <div className="text-right">{children}</div>,
    left: ({ children }) => <div className="text-left">{children}</div>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
};

// --- Page Component and Data Fetching ---

export async function generateStaticParams() {
  const items = await client.fetch(
    `*[_type == "galleryItem"]{ "slug": slug.current }`
  );
  return items
    .filter((item) => item.slug)
    .map((item) => ({
      slug: item.slug,
    }));
}

async function getGalleryItem(slug) {
  const query = `*[_type == "galleryItem" && slug.current == $slug][0]`;
  const item = await client.fetch(query, { slug });
  return item;
}

export default async function GalleryItemPage({ params }) {
  const { slug } = params;
  const item = await getGalleryItem(slug);

  if (!item) {
    return <div>Gallery item not found.</div>;
  }

  return (
    <main className="container mx-auto px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-primary-dark">
          {item.title}
        </h1>
        {item.subtitle && (
          <p className="text-xl text-gray-500 mt-2">{item.subtitle}</p>
        )}
        {item.image && (
          <div className="relative h-96 w-full my-8">
            <Image
              src={urlFor(item.image).url()}
              alt={item.title || "Gallery item image"}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className="prose lg:prose-xl max-w-none">
          {item.content && (
            <PortableText value={item.content} components={ptComponents} />
          )}
        </div>

        {item.contactUrl && (
          <div className="mt-12 text-center">
            <Link
              href={item.contactUrl}
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full text-lg cta-button hover:bg-primary-dark"
            >
              Contact Us For More Info
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
