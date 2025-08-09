import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  // In the App Router, components are Server Components by default.
  // This means we could fetch data directly here if we needed to.
  // For now, the components manage their own content.

  return (
    <>
      <Hero />
      <div className="container mx-auto px-6 py-16">
        <About />
        <Programs />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
