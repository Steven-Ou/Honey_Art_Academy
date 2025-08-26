import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  const { slug } = await params;
  const item = await getGalleryItem(slug);

  if (!item) {
    return <div>Gallery item not found.</div>;
  }

  return (
    <main className="bg-white dark:bg-dark-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-primary-dark dark:text-dark-primary mb-4">
            {item.title}
          </h1>
          {item.image && (
            <div className="relative h-96 w-full my-8 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={urlFor(item.image).url()}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="prose lg:prose-xl max-w-none dark:prose-invert">
            <PortableText value={item.description} />
          </div>
          <div className="text-center mt-12">
            <Link href="/#programs">
              <div className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full cta-button hover:bg-primary-dark">
                Back to Programs
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
