import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

// This config is needed for Font Awesome to work correctly with server components
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Honey Academy - Flushing After School, Dance, Art & Music',
  description: "Honey Academy offers top-tier after-school, dance, art, and music programs in Flushing, NY. Nurturing tomorrow's leaders and artists.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-amber-50 text-gray-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}