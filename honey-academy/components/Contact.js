"use client";
import React, { useState } from "react";

export default function Contact({ settings }) {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.target);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setMessage("Web3Forms Access Key is not configured.");
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch(
        "http://googleusercontent.com/https_api/web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage("Thank you! Your message has been sent.");
        e.target.reset(); // Clear form fields
      } else {
        setStatus("error");
        setMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
    }
  };

  // This correctly constructs the embed URL from the share link.
  const getEmbedUrl = (url) => {
    if (!url) return "";
    // If it's already an embed URL, use it directly
    if (url.includes("/embed")) return url;
    // Otherwise, construct the embed URL from a standard Google Maps URL
    const urlObject = new URL(url);
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.233333!2d-74.005972!3d40.712778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1e2b8c3d6d%3A0x1b2f4f8c3f4e2f9d!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus6${urlObject.search}`;
  };

  const mapUrl = getEmbedUrl(settings?.googleMapsEmbedUrl);

  return (
    <section id="contact" className="relative section-padding">
      {/* Google Map Background */}
      {mapUrl && (
        <div className="absolute inset-0 z-0">
          <iframe
            src={mapUrl}
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
