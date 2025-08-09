import Image from "next/image";

const TestimonialCard = ({ text, name, role, imgSrc }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 mb-4">"{text}"</p>
    <div className="flex items-center">
      <Image
        src={imgSrc}
        alt={name}
        width={50}
        height={50}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const testimonials = [
    {
      text: "Honey Academy has been a blessing for our family. My daughter's confidence has soared, and she loves going to her dance and art classes every week. The teachers are fantastic!",
      name: "Sarah L.",
      role: "Parent",
      imgSrc: "https://placehold.co/50x50/FFB74D/FFFFFF?text=S",
    },
    {
      text: "The after-school program is top-notch. My son gets his homework done, and he's learning so much. The staff truly cares about the kids' success and well-being.",
      name: "Michael C.",
      role: "Parent",
      imgSrc: "https://placehold.co/50x50/4DB6AC/FFFFFF?text=M",
    },
  ];

  return (
    <section
      id="testimonials"
      className="mb-24 bg-amber-100 rounded-lg p-8 md:p-12 scroll-mt-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-amber-700">
        What Parents Are Saying
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
