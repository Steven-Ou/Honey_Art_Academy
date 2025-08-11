// steven-ou/honey_art_academy/Honey_Art_Academy-3b08cfc3f42b337480a330f9b0097aaca9ef5160/honey-academy/app/page.js

import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { getPrograms, getTestimonials } from "../lib/cms";

export default async function Home() {
  const programs = await getPrograms();
  const testimonials = await getTestimonials();

  return (
    <>
      <Hero />
      <div className="container mx-auto px-6">
        <About />
        <Programs programs={programs} />
      </div>
      <Testimonials testimonials={testimonials} />
      <Contact />
    </>
  );
}
