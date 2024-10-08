import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Button from '../Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-4 py-4 md:px-8">
      <div className="logo">
        <img src="logo.png" alt="Logo" className="w-24 md:w-32" />
      </div>

      <ul className='lg:flex space-x-4 lg:space-x-8 text-sm lg:text-lg font-medium hidden lg:block text-custom-text'>
        <li className="hover:text-sky-600">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            About Us
          </Link>
        </li>
        <li className="hover:text-sky-600">
          <Link to="services" smooth={true} duration={500} className="cursor-pointer">
            Services
          </Link>
        </li>
        <li className="hover:text-sky-600">
          <Link to="caseStudies" smooth={true} duration={500} className="cursor-pointer">
            Case Studies
          </Link>
        </li>
        <li className="hover:text-sky-600">
          <Link to="blog" smooth={true} duration={500} className="cursor-pointer">
            Blog
          </Link>
        </li>
        <li className="hover:text-sky-600">
          <Link to="howItWorks" smooth={true} duration={500} className="cursor-pointer">
            How it Works
          </Link>
        </li>
        <li className="hover:text-sky-600">
          <Link to="hire" smooth={true} duration={500} className="cursor-pointer">
            Hire
          </Link>
        </li>
      </ul>

      <Button className="hidden md:block">
            <Link to="link" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Contact Us</Link>
      </Button>

      {/* Mobile Menu Button */}
      {!isMenuOpen && (
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <li className="hover:text-sky-600">
            <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li className="hover:text-sky-600">
            <Link to="services" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className="hover:text-sky-600">
            <Link to="caseStudies" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>
              Case Studies
            </Link>
          </li>
          <li className="hover:text-sky-600">
            <Link to="blog" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li className="hover:text-sky-600">
            <Link to="howItWorks" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>
              How it Works
            </Link>
          </li>
          <li className="hover:text-sky-600">
            <Link to="hire" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>
              Hire
            </Link>
          </li>
          <Button className="block md:hidden">
            <Link to="link" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Contact Us</Link>
          </Button>
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none mt-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;