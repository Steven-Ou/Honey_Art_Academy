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
      {/* This container div fixes the main layout issue */}
      <div className="container mx-auto px-6">
        <About />
        <Programs programs={programs} />
        <Testimonials testimonials={testimonials} />
      </div>
      <Contact />
    </>
  );
}
