import ProgramCard from "./ProgramCard";

export default function Programs({ programs }) {
  return (
    <section id="programs" className="section-padding scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary-dark">
          Our Diverse Programs
        </h2>
        <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of activities designed to enrich, educate, and
          inspire your child.
        </p>
      </div>

      {/* This flex container creates a single, horizontally-scrollable row */}
      <div className="flex flex-row gap-8 overflow-x-auto pb-4 -mx-6 px-6">
        {programs.map((p) => (
          <ProgramCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
