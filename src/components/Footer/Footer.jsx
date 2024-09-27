import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-stretch items-center">

          {/* Left Section */}
          <div className="text-center md:text-left mb-6 md:mb-0 mx-10">
            <div className="logo">
              <img src="logo.png" alt="Logo" className="w-24 md:w-32 mx-auto md:mx-0" />
            </div>
            <address className="mt-2 not-italic text-transparent bg-clip-text bg-gradient-to-r from-[#00A1F1] to-[#004589]">
              <span className='block'>Araya Nagar Kohka, Bhilai,</span>
              <span className='block'>Chhattisgarh, 490023</span>
              <span className='block leading-relaxed'>
                <a href="mailto:hr@rdktechnologies.com">hr@rdktechnologies.com</a>
              </span>
            </address>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://facebook.com" className="p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <img src="/facebook.png" alt="Facebook" className="max-w-fit object-contain" />
              </a>
              <a href="https://instagram.com" className="p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <img src="/instagram.png" alt="Instagram" className="max-w-fit object-contain" />
              </a>
              <a href="https://twitter.com" className="p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <img src="/twitter.png" alt="Twitter" className="max-w-fit object-contain" />
              </a>
              <a href="https://linkedin.com" className="p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <img src="/linkedin.png" alt="LinkedIn" className="max-w-fit object-contain" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center mt-8 md:mt-0 md:ml-16 lg:ml-20">
            <ul className="text-left space-y-2 font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#00A1F1] to-[#004589]">
              <li className='text-sky-950'>Links</li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#how-it-works">How it Works</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#areas-we-serve">Areas We Serve</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm">
          © 2024 Copyright by RDK Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
