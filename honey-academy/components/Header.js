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
                <Link>
                    <FontAwesomeIcon/>
                    Honey Academy
                </Link>
                <nav>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                </nav>
                <Link>
                    Enroll Now
                </Link>
            </div>
        </div>
    </header>
  )
}