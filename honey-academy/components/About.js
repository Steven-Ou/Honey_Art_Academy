"use client"; // This is required to use hooks like useState and useEffect

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faChalkboardTeacher,
  faSmile,
  faBuilding,
  faUsers,
  faChild,
  faAward,
  faBookOpen,
  faMusic,
  faPaintBrush,
  faTheaterMasks,
  faTrophy,
  faCertificate,
  faPalette,
  faHeart,
  faStar,
  faLightbulb,
  faRocket,
  faCalendarAlt,
  faMedal,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  "fas fa-chalkboard-teacher": faChalkboardTeacher,
  "fas fa-user-graduate": faUserGraduate,
  "fas fa-smile": faSmile,
  "fas fa-users": faUsers,
  "fas fa-child": faChild,
  "fas fa-building": faBuilding,
  "fas fa-award": faAward,
  "fas fa-book-open": faBookOpen,
  "fas fa-music": faMusic,
  "fas fa-paint-brush": faPaintBrush,
  "fas fa-theater-masks": faTheaterMasks,
  "fas fa-trophy": faTrophy,
  "fas fa-certificate": faCertificate,
  "fas fa-palette": faPalette,
  "fas fa-heart": faHeart,
  "fas fa-star": faStar,
  "fas fa-lightbulb": faLightbulb,
  "fas fa-rocket": faRocket,
  "fas fa-calendar-alt": faCalendarAlt,
  "fas fa-medal": faMedal,
  "fas fa-handshake": faHandshake,
};

const StatCard = ({ stat }) => {
  const icon = iconMap[stat.icon] || faSmile;
  return (
    <div className="bg-background-light dark:bg-dark-surface p-6 rounded-lg text-center shadow-md">
      <FontAwesomeIcon
        icon={icon}
        className="text-4xl text-primary-dark dark:text-dark-primary-light mb-3"
      />
      <div className="text-3xl font-bold text-text dark:text-dark-text">
        {stat.number}
      </div>
      <div className="text-text-light dark:text-dark-text_light">
        {stat.label}
      </div>
    </div>
  );
};

export default function About({ about }) {
  const { title, content, images, stats } = about || {};
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // This useEffect hook will run a timer to change the image
  useEffect(() => {
    if (images && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(timer); // Cleanup the timer
    }
  }, [images]);

  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-dark-background"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Slideshow Column */}
          <div className="relative h-96">
            {images && images.length > 0 && (
              <Image
                // Use the currentImageIndex to select which image to show
                src={urlFor(images[currentImageIndex]).url()}
                alt={title || "About Honey Art Academy"}
                fill
                className="object-cover rounded-lg shadow-xl transition-opacity duration-1000"
                key={currentImageIndex} // Add key to re-trigger animations
              />
            )}
          </div>

          {/* Text Content Column */}
          <div>
            <h2 className="text-4xl font-bold text-primary dark:text-dark-primary mb-4">
              {title}
            </h2>
            <p className="text-text-light dark:text-dark-text_light leading-relaxed mb-8">
              {content}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {stats?.map((stat) => (
                <StatCard key={stat._key} stat={stat} />
              ))}
            </div>

            <Link href="/about">
              <div className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full cta-button hover:bg-primary-dark">
                Learn More About Us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
