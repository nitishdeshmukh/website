import React, { useState, useEffect } from 'react';
import Button  from '../Button';
import { Link } from 'react-scroll';

const Navbar = () => {
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className='fixed w-full flex justify-between items-center border p-3 shadow-lg'
    >
      <div className=" text-lg font-bold">Company-Logo</div>
      <ul className="flex space-x-6">
        <li>
          <Link
            to="aboutUs"
            smooth={true}
            duration={500}
            className="text-lg cursor-pointer text-gray-700"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="text-lg cursor-pointer text-gray-700"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="caseStudies"
            smooth={true}
            duration={500}
            className=" text-lg cursor-pointer text-gray-700"
          >
            Case Studies
          </Link>
        </li>
        <li>
          <Link
            to="blog"
            smooth={true}
            duration={500}
            className="text-lg cursor-pointer text-gray-700"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="howItWorks"
            smooth={true}
            duration={500}
            className="text-lg cursor-pointer text-gray-700"
          >
            How it Works
          </Link>
        </li>
        <li>
          <Link
            to="hire"
            smooth={true}
            duration={500}
            className="text-lg cursor-pointer text-gray-700"
          >
            Hire
          </Link>
        </li> 
      </ul>
      <Button className='text-sm font-medium'>Contact us</Button>
    </nav>
  );
};

export default Navbar;
