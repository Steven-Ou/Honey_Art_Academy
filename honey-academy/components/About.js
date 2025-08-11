// steven-ou/honey_art_academy/Honey_Art_Academy-3b08cfc3f42b337480a330f9b0097aaca9ef5160/honey-academy/components/About.js

"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

// A simple hook for the count-up animation
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  }, [isInView, end, duration]);

  return [ref, count];
};

// A simple hook to detect if an element is in view
const useInView = (ref, options) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
};

const StatCard = ({ value, label, duration }) => {
  const [ref, count] = useCountUp(value, duration);
  return (
    <div
      ref={ref}
      className="bg-primary-light/50 p-4 rounded-lg transform transition-transform hover:scale-105"
    >
      <p className="text-4xl lg:text-5xl font-bold text-primary">
        {count}
        {label === "Sq. Ft. Campus" ? "k" : "+"}
      </p>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="section-padding scroll-mt-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1588482315486-35c59a44a632?q=80&w=2070&auto=format&fit=crop"
            alt="Children engaged in an art class at Honey Academy"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-primary-dark mb-6">
            Fostering Excellence For 8+ Years
          </h2>
          <p className="mb-4 text-lg text-gray-700">
            Honey Academy is more than just an after-school program. We are a
            vibrant community with two campuses spanning 10,000 sq ft, dedicated
            to providing the finest academic and creative education.
          </p>
          <p className="mb-8 text-lg text-gray-700">
            With over thirty experienced and licensed instructors, we are
            passionate about giving your child the head-start they deserve.
          </p>
          {/* Redesigned Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <StatCard value={30} label="Instructors" duration={2000} />
            <StatCard value={500} label="Happy Students" duration={2500} />
            <StatCard value={10} label="Sq. Ft. Campus" duration={1500} />
          </div>
        </div>
      </div>
    </section>
  );
}
