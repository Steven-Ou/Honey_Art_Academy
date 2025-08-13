import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

async function getAboutSummary() {
  // Fetch just a small part of the story text
  const query = `*[_type == "aboutPage"][0]{
    storyText,
    storyImage
  }`;
  return client.fetch(query);
}

// A small client component for the text snippet
function TextSnippet({ text }) {
  const snippet = text
    .map((block) => block.children.map((child) => child.text).join(""))
    .join(" ")
    .slice(0, 150);
  return <p className="text-gray-600 mb-6">{snippet}...</p>;
}

export default async function About() {
  const data = await getAboutSummary();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src="/images.png"
              alt="About Honey Art Academy"
              fill
              className="object-cover"
            />
          </div>
          <div className="about-content">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              About Honey Art Academy
            </h2>
            {data?.storyText && <TextSnippet text={data.storyText} />}
            <div className="mt-8">
              <Link
                href="/about"
                className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg cta-button hover:bg-primary-dark"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
