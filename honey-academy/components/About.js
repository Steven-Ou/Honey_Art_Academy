import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the necessary icons
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

// Helper to map icon names from Sanity to FontAwesome icons
// The keys should exactly match what you enter in the Sanity Studio
const iconMap = {
  // People & Users
  "fas fa-chalkboard-teacher": faChalkboardTeacher,
  "fas fa-user-graduate": faUserGraduate,
  "fas fa-smile": faSmile,
  "fas fa-users": faUsers,
  "fas fa-child": faChild,

  //Place & Things
  "fas fa-building": faBuilding,
  "fas fa-award": faAward,
  "fas fa-book-open": faBookOpen,
  "fas fa-music": faMusic,
};

const StatCard = ({ stat }) => {
  // Use the string from Sanity to look up the icon, with faSmile as a fallback
  const icon = iconMap[stat.icon] || faSmile;
  return (
    <div className="bg-primary-light p-6 rounded-lg text-center shadow-md">
      <FontAwesomeIcon
        icon={icon}
        className="text-4xl text-primary-dark mb-3"
      />
      <div className="text-3xl font-bold text-secondary">{stat.number}</div>
      <div className="text-gray-500">{stat.label}</div>
    </div>
  );
};

export default function About({ about }) {
  const { title, content, images, stats } = about || {};

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Slideshow Column */}
          <div className="relative h-96">
            {images && images.length > 0 && (
              <Image
                src={urlFor(images[0]).url()}
                alt={title || "About Honey Art Academy"}
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            )}
          </div>

          {/* Text Content Column */}
          <div>
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              {title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">{content}</p>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats?.map((stat) => (
                <StatCard key={stat._key} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
