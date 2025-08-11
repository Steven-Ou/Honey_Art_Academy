import React from 'react';
import Image from 'next/image';

const ProgramCard = ({ imgSrc, title, description }) => (
    <div className="program-card bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-56">
            <Image src={imgSrc} alt={title} fill className="object-cover" />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-secondary">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href="#" className="font-bold text-primary hover:text-primary-dark">Learn More <i className="fas fa-arrow-right ml-1"></i></a>
        </div>
    </div>
);

export default function Programs() {
    const programData = [
        {
            imgSrc: "https://placehold.co/600x400/FFFBEB/D97706?text=Fine+Arts",
            title: "Fine Arts",
            description: "Explore painting, drawing, and sculpture in our state-of-the-art studios."
        },
        {
            imgSrc: "https://placehold.co/600x400/FFFBEB/D97706?text=Dance",
            title: "Dance",
            description: "From ballet to hip-hop, our dance classes build confidence and grace."
        },
        {
            imgSrc: "https://placehold.co/600x400/FFFBEB/D97706?text=Music",
            title: "Music",
            description: "Private lessons and group classes for a variety of instruments and voice."
        }
    ];

    return (
        <section id="programs" className="section-padding">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary-dark">Our Programs</h2>
                    <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">From fine arts to performing arts, we offer a diverse range of programs to ignite your child's passion.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programData.map((prog, index) => (
                        <ProgramCard key={index} {...prog} />
                    ))}
                </div>
            </div>
        </section>
    );
}
