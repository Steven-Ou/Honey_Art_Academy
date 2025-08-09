import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-800">
            &copy; {new Date().getFullYear()} Honey Academy. All Rights
            Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-amber-700 hover:text-amber-900 text-xl"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              href="#"
              className="text-amber-700 hover:text-amber-900 text-xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              href="#"
              className="text-amber-700 hover:text-amber-900 text-xl"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
