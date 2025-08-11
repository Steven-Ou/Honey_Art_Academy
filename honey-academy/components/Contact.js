"use client";

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    event.target.reset();
  };

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
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit}>
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
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white font-bold py-3 px-12 rounded-full cta-button hover:bg-primary-dark"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
