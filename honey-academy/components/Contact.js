// steven-ou/honey_art_academy/Honey_Art_Academy-b30d0db627a43b328427977d4914901b7229c657/honey-academy/components/Contact.js

"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // In a real app, you'd handle form submission here (e.g., send to an API)
    setSubmitted(true);
    setTimeout(() => {
      event.target.reset();
      setSubmitted(false);
    }, 4000); // Reset form after 4 seconds
  };

  const address = "123 Art Lane, Flushing, NY 11354";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section
      id="contact"
      className="section-padding scroll-mt-20 bg-primary-light"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-dark">Get In Touch</h2>
          <p className="text-lg mt-4 text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl p-8 lg:p-12 grid lg:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary-dark mb-6">
              Contact Information
            </h3>
            <div className="space-y-4 text-lg">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-primary group"
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-primary mt-1 mr-4 w-5 group-hover:animate-bounce"
                />
                <span className="group-hover:underline">
                  123 Art Lane,
                  <br />
                  Flushing, NY 11354
                </span>
              </a>
              <p className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-primary mr-4 w-5"
                />
                <a href="tel:555-123-4567" className="hover:text-primary">
                  (555) 123-4567
                </a>
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-primary mr-4 w-5"
                />
                <a
                  href="mailto:info@honeyart.com"
                  className="hover:text-primary"
                >
                  info@honeyart.com
                </a>
              </p>
            </div>
          </div>
          {/* Form Column */}
          <form onSubmit={handleSubmit}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full bg-green-50 text-green-700 rounded-lg p-8 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-5xl mb-4"
                />
                <h3 className="text-2xl font-bold">Thank You!</h3>
                <p>
                  Your message has been sent successfully. We'll be in touch
                  soon.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-primary text-white font-bold py-3 px-12 rounded-full cta-button hover:bg-primary-dark"
                  >
                    Send Message
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
