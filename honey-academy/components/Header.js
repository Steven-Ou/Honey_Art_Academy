'use client';

import { useState } from "react";
import Link from "next/link";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
  const [isOpen ,setIsOpen] = useState(false);

  return(
    <header>
        <div>
            <div>
                <Link href="/" className="text-2xl font-bold text-amber-600">
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                    Honey Academy
                </Link>
                <nav>
                    <Link href="#about" className="text-gray-600 hover:text-amber-600 transition">About Us</Link>
                    <Link href="#programs" className="text-gray-600 hover:text-amber-600 transition">Programs</Link>
                    <Link href="#testimonials" className="text-gray-600 hover:text-amber-600 transition">Testimonials</Link>
                    <Link href="#contact" className="text-gray-600 hover:text-amber-600 transition">Contact</Link>
                </nav>
                <Link>
                    Enroll Now
                </Link>
                <button>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
            </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
            
        )}

    </header>
  )
}