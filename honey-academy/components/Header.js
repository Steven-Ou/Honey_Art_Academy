'use client';

import { useState } from "react";
import Link from "next/link";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Logo = () =>(
    <svg width="240" height="40" viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pomegranate Icon Group */}
        <g transform="scale(0.8)">
            {/* Main body */}
            <circle cx="25" cy="25" r="20" fill="#B91C1C"/>
            {/* Crown */}
            <path d="M20 5 L22 2 L25 5 L28 2 L30 5" stroke="#B91C1C" strokeWidth="2" fill="none" strokeLinecap="round"/>
            {/* Heart */}
            <path d="M25,18 C28,15 33,17 33,22 C33,27 25,33 25,33 C25,33 17,27 17,22 C17,17 22,15 25,18 Z" fill="white"/>
            {/* Seeds (simplified) */}
            <circle cx="25" cy="22" r="1.5" fill="#B91C1C"/>
            <circle cx="22" cy="25" r="1.5" fill="#B91C1C"/>
            <circle cx="28" cy="25" r="1.5" fill="#B91C1C"/>
            <circle cx="25" cy="28" r="1.5" fill="#B91C1C"/>
        </g>
        <text x="50" y="30" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="#d90606ff">
            Honey Academy
        </text>
    </svg>
);
export default function Header(){
  const [isOpen ,setIsOpen] = useState(false);

  return(
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Logo/>
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
  );
}