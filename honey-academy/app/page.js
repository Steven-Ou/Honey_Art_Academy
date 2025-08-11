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
