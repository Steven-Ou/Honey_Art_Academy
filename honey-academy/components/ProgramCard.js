"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ProgramCard({ imgSrc, title, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <Image
        src={imgSrc}
        alt={`${title} Program`}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={link}
          className="font-semibold text-amber-600 hover:text-amber-700"
        >
          Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
