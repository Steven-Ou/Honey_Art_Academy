import ProgramCard from "./ProgramCard";

export default function Programs({ programs }) {
  return (
    <section id="programs" className="mb-24 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">
        Our Diverse Programs
      </h2>
      <div className="flex flex-col items-center gap-8">
        {programs.map((p) => (
          <ProgramCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}