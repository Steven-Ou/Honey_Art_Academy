// steven-ou/honey_art_academy/Honey_Art_Academy-b30d0db627a43b328427977d4914901b7229c657/honey-academy/lib/cms.js

// This is a mock CMS API. In a real application, you would replace this
// with actual API calls to a service like Contentful, Sanity, or Strapi.

export async function getPrograms() {
  return [
    {
      title: "After-School",
      description:
        "Academic support, homework help, and engaging activities in a safe, structured environment.",
      imgSrc:
        "https://images.unsplash.com/photo-1576765689423-5e74a14b3589?q=80&w=1974&auto=format&fit=crop",
      link: "/programs/after-school",
    },
    {
      title: "Dance",
      description:
        "From ballet to hip-hop, our dance classes build skill, confidence, and artistic expression.",
      imgSrc:
        "https://images.unsplash.com/photo-1524594232491-b3c1939a2a43?q=80&w=2070&auto=format&fit=crop",
      link: "/programs/dance",
    },
    {
      title: "Art",
      description:
        "Unleash creativity with our drawing, painting, and sculpting classes for all ages.",
      imgSrc:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
      link: "/programs/art",
    },
    {
      title: "Music",
      description:
        "Private and group lessons in piano, violin, guitar, and more from expert instructors.",
      imgSrc:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
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
      imgSrc:
        "https://images.unsplash.com/photo-1554163356-4c742c38d1a4?q=80&w=2071&auto=format&fit=crop",
    },
    {
      text: "The after-school program is top-notch. My son gets his homework done, and he's learning so much. The staff truly cares about the kids' success and well-being.",
      name: "Michael C.",
      role: "Parent",
      imgSrc:
        "https://images.unsplash.com/photo-1548212149-0d8641913c8f?q=80&w=2070&auto=format&fit=crop",
    },
  ];
}
