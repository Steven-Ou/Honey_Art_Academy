'use client';

import { useState } from "react";
import Link from "next/link";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
  const [isOpen ,setIsOpen] = useState(false);

  return(
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-600">
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                    Honey Academy
                </Link>
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="#about" className="text-gray-600 hover:text-amber-600 transition">About Us</Link>
                    <Link href="#programs" className="text-gray-600 hover:text-amber-600 transition">Programs</Link>
                    <Link href="#testimonials" className="text-gray-600 hover:text-amber-600 transition">Testimonials</Link>
                    <Link href="#contact" className="text-gray-600 hover:text-amber-600 transition">Contact</Link>
                </nav>
                <Link href="#contact" className="hidden md:inline-block bg-amber-500 text-white font-semibold px-6 py-2 rounded-full cta-button hover:bg-amber-600">
                    Enroll Now
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-amber-600">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
            </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden px-6 pb-4">
                <Link href="#about" className="block py-2 text-gray-600 hover:text-amber-600" onClick={() => setIsOpen(false)}>About Us</Link>
                <Link href="#programs" className="block py-2 text-gray-600 hover:text-amber-600" onClick={() => setIsOpen(false)}>Programs</Link>
                <Link href="#testimonials" className="block py-2 text-gray-600 hover:text-amber-600" onClick={() => setIsOpen(false)}>Testimonials</Link>
                <Link href="#contact" className="block py-2 text-gray-600 hover:text-amber-600" onClick={() => setIsOpen(false)}>Contact</Link>
                <Link href="#contact" className="block mt-4 bg-amber-500 text-white text-center font-semibold px-6 py-2 rounded-full cta-button hover:bg-amber-600" onClick={() => setIsOpen(false)}>
                    Enroll Now
                </Link>
            </div>
        )}

    </header>
  )
}