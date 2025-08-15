"use client";
import React, { useState } from "react";

export default function Contact({ settings }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative section-padding">
      {/* Google Map Background */}
      {settings?.googleMapsEmbedUrl && (
        <div className="absolute inset-0 z-0">
          <iframe
            src={settings.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 bg-primary-light/80"></div>
        </div>
      )}

      {/* Form Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-dark">Get In Touch</h2>
          <p className="text-lg mt-4 text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 lg:p-12">
          {submitted ? (
            <div className="text-center transition-all duration-500">
              <i className="fas fa-check-circle text-6xl text-green-500 mb-4"></i>
              <h3 className="text-2xl font-bold text-secondary">Thank You!</h3>
              <p className="text-gray-600 mt-2">
                Your message has been sent. We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-white font-bold py-4 px-16 rounded-full text-lg cta-button hover:bg-primary-dark"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
