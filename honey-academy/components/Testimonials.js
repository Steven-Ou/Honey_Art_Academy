import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-dark">
            What Parents Say
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
          {/* Testimonial 1 */}
          <div className="bg-primary-light p-8 rounded-lg shadow-lg">
            <i className="fas fa-quote-left text-primary text-3xl mb-4"></i>
            <p className="text-gray-600 mb-6">
              "My daughter's confidence has soared since joining the dance
              program. The teachers are fantastic!"
            </p>
            <p className="font-bold text-secondary">- Sarah L.</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-primary-light p-8 rounded-lg shadow-lg">
            <i className="fas fa-quote-left text-primary text-3xl mb-4"></i>
            <p className="text-gray-600 mb-6">
              "A wonderful, nurturing environment. The art classes have unlocked
              a passion in my son we never knew he had."
            </p>
            <p className="font-bold text-secondary">- Michael B.</p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-primary-light p-8 rounded-lg shadow-lg">
            <i className="fas fa-quote-left text-primary text-3xl mb-4"></i>
            <p className="text-gray-600 mb-6">
              "The best after-school program in Flushing. The staff truly cares
              about each and every student."
            </p>
            <p className="font-bold text-secondary">- Jessica W.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
