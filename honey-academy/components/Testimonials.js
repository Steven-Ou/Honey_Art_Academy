import Image from "next/image";

const TestimonialCard = ({ text, name, role, imgSrc }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary transform hover:scale-105 transition-transform duration-300">
    <p className="text-gray-600 mb-6 text-lg italic">"{text}"</p>
    <div className="flex items-center">
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
    <section id="testimonials" className="section-padding scroll-mt-20">
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
