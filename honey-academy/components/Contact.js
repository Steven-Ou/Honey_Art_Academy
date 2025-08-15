"use client";
import React, { useState } from "react";

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

  // Construct the map URL using the address from Sanity settings
  const address = settings?.address;
  const mapUrl = address
    ? `https://www.google.com/maps/embed/v1/place?key=$$q=${encodeURIComponent(address)}` // <-- THE FIX IS HERE
    : "";

  return (
    <section id="contact" className="section-padding bg-primary-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-dark">Get In Touch</h2>
          <p className="text-lg mt-4 text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="h-full">
            <div className="bg-white rounded-xl shadow-2xl p-4 h-full">
              {mapUrl ? (
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: "450px",
                    borderRadius: "0.5rem",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
                  <p className="text-gray-500">
                    Address not set in Sanity Studio.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-2xl p-8 lg:p-12">
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
      </div>
    </section>
  );
}
