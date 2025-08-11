// steven-ou/honey_art_academy/Honey_Art_Academy-3b08cfc3f42b337480a330f9b0097aaca9ef5160/honey-academy/lib/cms.js

// This is a mock CMS API using stable placeholders.
// Replace these with your own images when ready.

export async function getPrograms() {
  return [
    {
      title: "After-School",
      description:
        "Academic support, homework help, and engaging activities in a safe, structured environment.",
      imgSrc: "https://placehold.co/400x300/a32a2a/FFFFFF?text=After-School",
      link: "/programs/after-school",
    },
    {
      title: "Dance",
      description:
        "From ballet to hip-hop, our dance classes build skill, confidence, and artistic expression.",
      imgSrc: "https://placehold.co/400x300/a32a2a/FFFFFF?text=Dance",
      link: "/programs/dance",
    },
    {
      title: "Art",
      description:
        "Unleash creativity with our drawing, painting, and sculpting classes for all ages.",
      imgSrc: "https://placehold.co/400x300/a32a2a/FFFFFF?text=Art",
      link: "/programs/art",
    },
    {
      title: "Music",
      description:
        "Private and group lessons in piano, violin, guitar, and more from expert instructors.",
      imgSrc: "https://placehold.co/400x300/a32a2a/FFFFFF?text=Music",
      link: "/programs/music",
    },
  ];
}

export async function getTestimonials() {
  return [
    {
      text: "Honey Academy has been a blessing for our family. My daughter's confidence has soared, and she loves going to her dance and art classes every week. The teachers are fantastic!",
      name: "Sarah L.",
      role: "Parent",
      imgSrc: "https://placehold.co/100x100/fbebeb/a32a2a?text=S",
    },
    {
      text: "The after-school program is top-notch. My son gets his homework done, and he's learning so much. The staff truly cares about the kids' success and well-being.",
      name: "Michael C.",
      role: "Parent",
      imgSrc: "https://placehold.co/100x100/fbebeb/a32a2a?text=M",
    },
  ];
}
