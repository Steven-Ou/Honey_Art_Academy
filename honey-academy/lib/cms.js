// steven-ou/honey_art_academy/Honey_Art_Academy-3b08cfc3f42b337480a330f9b0097aaca9ef5160/honey-academy/lib/cms.js

// This is a mock CMS API using stable and attractive placeholders.
export async function getPrograms() {
  return [
    {
      title: "After-School",
      description:
        "Academic support, homework help, and engaging activities in a safe, structured environment.",
      imgSrc: "https://picsum.photos/seed/afterschool/400/300",
      link: "/programs/after-school",
    },
    {
      title: "Dance",
      description:
        "From ballet to hip-hop, our dance classes build skill, confidence, and artistic expression.",
      imgSrc: "https://picsum.photos/seed/dance/400/300",
      link: "/programs/dance",
    },
    {
      title: "Art",
      description:
        "Unleash creativity with our drawing, painting, and sculpting classes for all ages.",
      imgSrc: "https://picsum.photos/seed/art/400/300",
      link: "/programs/art",
    },
    {
      title: "Music",
      description:
        "Private and group lessons in piano, violin, guitar, and more from expert instructors.",
      imgSrc: "https://picsum.photos/seed/music/400/300",
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
      imgSrc: "https://picsum.photos/seed/sarah/100/100",
    },
    {
      text: "The after-school program is top-notch. My son gets his homework done, and he's learning so much. The staff truly cares about the kids' success and well-being.",
      name: "Michael C.",
      role: "Parent",
      imgSrc: "https://picsum.photos/seed/michael/100/100",
    },
  ];
}
