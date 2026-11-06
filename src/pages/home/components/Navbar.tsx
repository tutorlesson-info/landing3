import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavbarProps {
  forceScrolled?: boolean;
}

export default function Navbar({ forceScrolled = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(forceScrolled);

  useEffect(() => {
    if (forceScrolled) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceScrolled]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className={`text-2xl font-serif font-bold transition-colors ${
              isScrolled ? 'text-navy' : 'text-white'
            }`}>
              EduVerse Academy
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/programs"
              className={`text-sm font-medium transition-colors hover:text-coral ${
                isScrolled ? 'text-navy' : 'text-white'
              }`}
            >
              Programs
            </Link>
            <Link
              to="/courses"
              className={`text-sm font-medium transition-colors hover:text-coral ${
                isScrolled ? 'text-navy' : 'text-white'
              }`}
            >
              Courses
            </Link>
            <Link
              to="/resources"
              className={`text-sm font-medium transition-colors hover:text-coral ${
                isScrolled ? 'text-navy' : 'text-white'
              }`}
            >
              Resources
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-coral ${
                isScrolled ? 'text-navy' : 'text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-coral ${
                isScrolled ? 'text-navy' : 'text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className={`w-10 h-10 flex items-center justify-center transition-colors hover:text-coral cursor-pointer ${
                isScrolled ? 'text-navy' : 'text-white'
              }`}
              aria-label="Search"
            >
              <i className="ri-search-line text-xl"></i>
            </button>
            <button
              className={`w-10 h-10 flex items-center justify-center transition-colors hover:text-coral cursor-pointer ${
                isScrolled ? 'text-navy' : 'text-white'
              }`}
              aria-label="Student Portal"
            >
              <i className="ri-user-line text-xl"></i>
            </button>
            <Link
              to="/apply"
              className="px-6 py-2.5 bg-coral text-white text-sm font-semibold rounded-full hover:bg-coral-dark transition-colors whitespace-nowrap cursor-pointer"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
