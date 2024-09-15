// import React from "react"

// export default function Footer(){
//     return(
//         <>
//             <footer className="text-center py-6 border">
//                 <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg text-sm">
//                     <p className='text-[#4A5568]'>&copy; 2024 Copyrights by RDK Technologies. All rights reserved.</p>
//                 </div>
//             </footer>
//         </>
//     );
// }

import React from 'react';
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-start items-center md:items-start px-5">
        {/* Left Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
        <div className="logo">
            <img src="logo.png" alt="Logo" className="w-24 md:w-32" />
        </div>
          <address className="mt-2 not-italic text-base text-sky-600">
            <span className='block'>Araya Nagar Kohka, Bhilai,</span>
            <span className='block'>Chhattisgarh, 490023</span>
            <span className='block leading-relaxed'><a href="mailto:hr@rdktechnologies.com">hr@rdktechnologies.com</a></span>
          </address>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4 text-gray-600">
            {/* <a href="https://facebook.com" className="hover:text-blue-500"><FaFacebookF /></a> */}
            {/* <a href="https://instagram.com" className="hover:text-pink-500"><FaInstagram /></a> */}
            {/* <a href="https://twitter.com" className="hover:text-blue-400"><FaTwitter /></a> */}
            {/* <a href="https://linkedin.com" className="hover:text-blue-700"><FaLinkedinIn /></a> */}
          </div>
        </div>

        {/* Right Section */}
        <div className="text-left  ml-96">
          <ul className="space-y-2 text-sm text-sky-600">
            <li className='font-medium text-sky-950'>Link</li>
            <li><a href="#about" className="font-medium">About Us</a></li>
            <li><a href="#services" className="font-medium">Services</a></li>
            <li><a href="#case-studies" className="font-medium">Case Studies</a></li>
            <li><a href="#how-it-works" className="font-medium">How it works</a></li>
            <li><a href="#blog" className="font-medium">Blog</a></li>
            <li><a href="#careers" className="font-medium">Careers</a></li>
            <li><a href="#areas-we-serve" className="font-medium">Areas We Serve</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm">
        © 2024 Copyright by RDK Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
