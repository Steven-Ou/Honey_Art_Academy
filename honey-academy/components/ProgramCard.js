"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ProgramCard({ imgSrc, title, description, link }) {
  return (
    // Removed fixed width to allow the card to be responsive within the grid
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
      <div className="relative h-48 w-full">
        <Image
          src={imgSrc}
          alt={`${title} Program`}
          layout="fill"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized={true}
        />
      </div>
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
