// steven-ou/honey_art_academy/Honey_Art_Academy-b30d0db627a43b328427977d4914901b7229c657/honey-academy/app/page.js

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
        <div className="animated-section">
          <About />
        </div>
        <div className="animated-section">
          <Programs programs={programs} />
        </div>
      </div>
      <div className="animated-section">
        <Testimonials testimonials={testimonials} />
      </div>
      <div className="animated-section">
        <Contact />
      </div>
    </>
  );
}