import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client"; // Make sure client is imported

// --- Start of New/Updated Components ---

// This component renders embedded videos from a URL
const VideoEmbed = ({ value }) => {
  if (!value?.url) {
    return null;
  }

  // Basic URL validation to create an embeddable link
  const getEmbedUrl = (url) => {
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
    } catch (error) {
      console.error("Invalid video URL:", error);
      return null;
    }
    return url; // Fallback for other URLs, though may not embed correctly
  };

  const embedUrl = getEmbedUrl(value.url);

  if (!embedUrl) {
    return <p>Invalid video URL provided.</p>;
  }

  return (
    <div className="my-6 aspect-w-16 aspect-h-9">
      <iframe
        src={embedUrl}
        title="Embedded video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
};

// This component renders images with captions
const ImageWithCaption = ({ value }) => {
  if (!value?.image?.asset) {
    return null;
  }
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

// Update the ptComponents object to include the new VideoEmbed
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

// --- No changes to the data fetching or page component logic needed ---

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
  const item = await client.fetch(query);
  return item;
}

export default async function GalleryItemPage({ params }) {
  const { slug } = params;
  const item = await getGalleryItem(slug);

  if (!item) return <div>Gallery item not found.</div>;

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
              alt={item.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className="prose lg:prose-xl max-w-none">
          <PortableText value={item.content} components={ptComponents} />
        </div>
      </div>
    </main>
  );
}
