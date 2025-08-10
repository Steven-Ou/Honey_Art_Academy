import Image from "next/image";

const TestimonialCard = ({ text, name, role, imgSrc }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary">
    <p className="text-gray-600 mb-4 text-lg italic">"{text}"</p>
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
    <section
      id="testimonials"
      className="mb-24 bg-primary-light rounded-lg p-8 md:p-12 scroll-mt-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">
        What Parents Are Saying
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
