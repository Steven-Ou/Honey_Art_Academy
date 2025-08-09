"use client";

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    event.target.reset();
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-amber-700">
        Get In Touch
      </h2>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-amber-500 text-white font-bold py-3 px-12 rounded-full cta-button hover:bg-amber-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
