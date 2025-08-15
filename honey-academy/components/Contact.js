"use client";
import React, { useState, useEffect } from "react";

export default function Contact({ settings }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.target);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setMessage("Contact form is not configured.");
      return;
    }

    formData.append("access_key", accessKey);
    // Add some useful info to the email
    formData.append("from_name", "Honey Art Academy Contact Form");
    formData.append("subject", `New Inquiry from ${formData.get("name")}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage("Thank you! Your message has been sent.");
        e.target.reset();
      } else {
        setStatus("error");
        setMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
    }
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
                className="bg-primary text-white font-bold py-4 px-16 rounded-full text-lg cta-button hover:bg-primary-dark disabled:opacity-50"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          {/* Submission status messages */}
          {status === "success" && (
            <div className="text-center mt-4 text-green-600">{message}</div>
          )}
          {status === "error" && (
            <div className="text-center mt-4 text-red-600">{message}</div>
          )}
        </div>
      </div>
    </section>
  );
}
