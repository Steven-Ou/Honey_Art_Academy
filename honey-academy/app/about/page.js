import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

async function getAboutPage() {
  const query = `*[_type == "aboutPage"][0]`;
  return client.fetch(query);
}

export default async function AboutPage() {
  const data = await getAboutPage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={urlFor(data.heroImage).url()}
          alt={data.title}
          fill
          className="object-cover"
        />
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
              <PortableText value={data.storyText} />
            </div>
          </div>
          <div className="relative h-96 w-full rounded-lg shadow-xl">
            <Image
              src={urlFor(data.storyImage).url()}
              alt={data.storyTitle}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 w-full rounded-lg shadow-xl md:order-last">
            <Image
              src={urlFor(data.philosophyImage).url()}
              alt={data.philosophyTitle}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              {data.philosophyTitle}
            </h2>
            <div className="prose lg:prose-xl">
              <PortableText value={data.philosophyText} />
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
