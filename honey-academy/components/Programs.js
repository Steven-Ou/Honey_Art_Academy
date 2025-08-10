import ProgramCard from "./ProgramCard";

export default function Programs() {
  const programs = [
    {
      title: "After-School",
      description:
        "Academic support, homework help, and engaging activities in a safe, structured environment.",
      imgSrc: "https://placehold.co/400x300/81C784/FFFFFF?text=After-School",
      link: "/programs/after-school",
    },
    {
      title: "Dance",
      description:
        "From ballet to hip-hop, our dance classes build skill, confidence, and artistic expression.",
      imgSrc: "https://placehold.co/400x300/E57373/FFFFFF?text=Dance",
      link: "/programs/dance",
    },
    {
      title: "Art",
      description:
        "Unleash creativity with our drawing, painting, and sculpting classes for all ages.",
      imgSrc: "https://placehold.co/400x300/64B5F6/FFFFFF?text=Art",
      link: "/programs/art",
    },
    {
      title: "Music",
      description:
        "Private and group lessons in piano, violin, guitar, and more from expert instructors.",
      imgSrc: "https://placehold.co/400x300/BA68C8/FFFFFF?text=Music",
      link: "/programs/music",
    },
  ];

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
