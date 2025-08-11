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

      {/* This is the line to change: from a flex column to a responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((p) => (
          <ProgramCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
