// This is a mock CMS API. In a real application, you would replace this
// with actual API calls to a service like Contentful, Sanity, or Strapi.

export async function getPrograms() {
  return [
    {
      title: "After-School",
      description:
        "Academic support, homework help, and engaging activities in a safe, structured environment.",
      imgSrc: "https://placehold.co/400x300/81C784/FFFFFF?text=After-School",
      link: "#programs",
    },
    {
      title: "Dance",
      description:
        "From ballet to hip-hop, our dance classes build skill, confidence, and artistic expression.",
      imgSrc: "https://placehold.co/400x300/E57373/FFFFFF?text=Dance",
      link: "#programs",
    },
    {
      title: "Art",
      description:
        "Unleash creativity with our drawing, painting, and sculpting classes for all ages.",
      imgSrc: "https://placehold.co/400x300/64B5F6/FFFFFF?text=Art",
      link: "#programs",
    },
    {
      title: "Music",
      description:
        "Private and group lessons in piano, violin, guitar, and more from expert instructors.",
      imgSrc: "https://placehold.co/400x300/BA68C8/FFFFFF?text=Music",
      link: "#programs",
    },
  ];
}

export async function getTestimonials() {
  return [
    {
      text: "Honey Academy has been a blessing for our family. My daughter's confidence has soared, and she loves going to her dance and art classes every week. The teachers are fantastic!",
      name: "Sarah L.",
      role: "Parent",
      imgSrc: "https://placehold.co/50x50/FCA5A5/FFFFFF?text=S",
    },
    {
      text: "The after-school program is top-notch. My son gets his homework done, and he's learning so much. The staff truly cares about the kids' success and well-being.",
      name: "Michael C.",
      role: "Parent",
      imgSrc: "https://placehold.co/50x50/FCA5A5/FFFFFF?text=M",
    },
  ];
}
