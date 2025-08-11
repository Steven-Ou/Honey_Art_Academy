"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ProgramCard({ imgSrc, title, description, link }) {
  return (
    // Added a fixed width and flex-shrink-0 to prevent cards from squishing
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col group w-80 flex-shrink-0">
      <Image
        src={imgSrc}
        alt={`${title} Program`}
        width={400}
        height={300}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        unoptimized={true}
      />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-primary-dark">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link
          href={link}
          className="font-semibold text-primary hover:text-primary-dark mt-auto self-start"
        >
          Read More <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
