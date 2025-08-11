import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = ({ text, name, role, imgSrc }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary transform hover:scale-105 transition-transform duration-300 relative">
    <FontAwesomeIcon
      icon={faQuoteLeft}
      className="absolute top-4 left-6 text-6xl text-primary/10"
    />
    <p className="text-gray-600 mb-6 text-lg italic relative z-10">"{text}"</p>
    <div className="flex items-center relative z-10">
      <Image
        src={imgSrc}
        alt={name}
        width={50}
        height={50}
        className="w-12 h-12 rounded-full mr-4"
        unoptimized={true}
      />
      <div>
        <p className="font-bold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials({ testimonials }) {
  return (
    <section
      id="testimonials"
      className="section-padding scroll-mt-20 bg-gray-50/70"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary-dark">
          What Parents Are Saying
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
