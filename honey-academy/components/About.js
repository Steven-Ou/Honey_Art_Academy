"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const StatCard = ({ number, label, icon }) => (
  <div className="text-center">
    <div className="bg-primary-light p-4 rounded-full inline-block mb-4">
      <i className={`${icon} text-primary-dark text-3xl`}></i>
    </div>
    <p className="text-4xl font-bold text-secondary">{number}</p>
    <p className="text-gray-500 mt-1">{label}</p>
  </div>
);

export default function About({ about }) {
  const { title, content, images, stats } = about || {};
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); // Change image every 4 seconds
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden">
            {images && images.length > 0 ? (
              images.map((image, index) => (
                <Image
                  key={image._key || index}
                  src={urlFor(image).url()}
                  alt={title || "About Honey Art Academy"}
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  priority={index === 0}
                />
              ))
            ) : (
              <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                <p className="text-gray-500">No images available</p>
              </div>
            )}
          </div>
          <div className="about-content">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              {title || "About Honey Art Academy"}
            </h2>
            <p className="text-gray-600 mb-6">
              {content ||
                "Founded with a passion for nurturing creativity, Honey Art Academy offers a vibrant and inspiring space for students of all ages to explore their artistic talents."}
            </p>
            <div className="grid grid-cols-3 gap-6 my-8">
              {stats?.map((stat, index) => (
                <StatCard
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  icon={stat.icon}
                />
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg cta-button hover:bg-primary-dark"
              >
                Learn More About Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
