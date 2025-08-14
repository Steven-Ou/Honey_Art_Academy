import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

const VideoEmbed = ({ value }) => {
  const { url } = value;
  if (!url) return null;
  let embedUrl = "";
  const getYouTubeId = (ytUrl) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = ytUrl.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };
  const getVimeoId = (vimeoUrl) => {
    const regExp = /vimeo.*\/(\d+)/;
    const match = vimeoUrl.match(regExp);
    return match ? match[1] : null;
  };
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoId = getYouTubeId(url);
    if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else if (url.includes("vimeo.com")) {
    const videoId = getVimeoId(url);
    if (videoId) embedUrl = `https://player.vimeo.com/video/${videoId}`;
  }
  if (!embedUrl) return <p>Could not embed video from URL: {url}</p>;
  return (
    <div
      className="my-8 relative"
      style={{ paddingBottom: "56.25%", height: 0 }}
    >
      <iframe
        src={embedUrl}
        title="Video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
};

// UPDATED: Components for PortableText to handle alignment
const ptComponents = {
  types: { videoEmbed: VideoEmbed },
  marks: {
    center: ({ children }) => <div className="text-center">{children}</div>,
    right: ({ children }) => <div className="text-right">{children}</div>,
    left: ({ children }) => <div className="text-left">{children}</div>,
  },
};

async function getGalleryItem(slug) {
  const query = `*[_type == "galleryItem" && slug.current == $slug][0]{ title, subtitle, image, content, contactUrl }`;
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
