// steven-ou/honey_art_academy/Honey_Art_Academy-3b08cfc3f42b337480a330f9b0097aaca9ef5160/honey-academy/components/ProgramCard.js

"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ProgramCard({ imgSrc, title, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col group">
      <div className="relative h-48 w-full">
        <Image
          src={imgSrc}
          alt={`${title} Program`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-primary-dark">{title}</h3>
        <p className="text-text-muted mb-4 flex-grow">{description}</p>
        <Link
          href={link}
          className="font-semibold text-primary hover:text-primary-dark mt-auto self-start group"
        >
          Read More{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-1 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
