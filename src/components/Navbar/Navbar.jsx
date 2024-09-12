import React from 'react';
import { Link } from 'react-scroll';
import Button from '../Button';

const Navbar = () => {
  return (
    <nav className="relative top-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-8 py-4">
      <div className="logo">
        <img src="logo.png" alt="Logo" className="w-32" />
      </div>

      <ul className="flex space-x-8 text-lg font-semibold">
        <li className="hover:text-sky-800">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            About Us
          </Link>
        </li>
        <li className="hover:text-sky-800">
          <Link to="services" smooth={true} duration={500} className="cursor-pointer">
            Services
          </Link>
        </li>
        <li className="hover:text-sky-800">
          <Link to="caseStudies" smooth={true} duration={500} className="cursor-pointer">
            Case Studies
          </Link>
        </li>
        <li className="hover:text-sky-800">
          <Link to="blog" smooth={true} duration={500} className="cursor-pointer">
            Blog
          </Link>
        </li>
        <li className="hover:text-sky-800">
          <Link to="howItWorks" smooth={true} duration={500} className="cursor-pointer">
            How it Works
          </Link>
        </li>
        <li className="hover:text-sky-800">
          <Link to="hire" smooth={true} duration={500} className="cursor-pointer">
            Hire
          </Link>
        </li>
      </ul>


      <Button>Contact Us</Button>
    </nav>
  );
};

export default Navbar;
