import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const ptComponents = {
  marks: {
    center: ({ children }) => <div className="text-center">{children}</div>,
    right: ({ children }) => <div className="text-right">{children}</div>,
    left: ({ children }) => <div className="text-left">{children}</div>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
};

async function getAboutPage() {
  const query = `*[_type == "aboutPage"][0]`;
  return client.fetch(query);
}

export default async function AboutPage() {
  const data = await getAboutPage();

  // If no data is found (e.g., not published), show a message instead of crashing.
  if (!data) {
    return (
      <div className="text-center py-24">
        <h1 className="text-2xl font-bold">About Page Not Found</h1>
        <p>
          Please make sure the "About Page" document is created and published in
          the Sanity Studio.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        {data.heroImage && (
          <Image
            src={urlFor(data.heroImage).url()}
            alt={data.title || "Hero Image"}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">{data.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              {data.storyTitle}
            </h2>
            <div className="prose lg:prose-xl">
              <PortableText value={data.storyText} components={ptComponents} />
            </div>
          </div>
          {data.storyImage && (
            <div className="relative h-96 w-full rounded-lg shadow-xl">
              <Image
                src={urlFor(data.storyImage).url()}
                alt={data.storyTitle || "Story Image"}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Philosophy Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {data.philosophyImage && (
            <div className="relative h-96 w-full rounded-lg shadow-xl md:order-last">
              <Image
                src={urlFor(data.philosophyImage).url()}
                alt={data.philosophyTitle || "Philosophy Image"}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          <div>
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              {data.philosophyTitle}
            </h2>
            <div className="prose lg:prose-xl">
              <PortableText
                value={data.philosophyText}
                components={ptComponents}
              />
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-primary-light py-16 text-center">
        <h2 className="text-3xl font-bold text-primary-dark">
          Ready to Join Us?
        </h2>
        <p className="text-gray-600 mt-2">
          Get in touch to learn more about our programs and enrollment.
        </p>
        <Link
          href="/#contact"
          className="mt-6 inline-block bg-primary text-white font-bold py-3 px-8 rounded-full text-lg cta-button hover:bg-primary-dark"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
