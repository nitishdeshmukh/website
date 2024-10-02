import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedResources = () => {
  const resources = [
    { id: 1, title: 'How to Build a Scalable Application up to 1 Million Users on AWS', image: './Rectangle1.png', link: '#' },
    { id: 2, title: 'How to Build a Scalable Application up to 1 Million Users on AWS', image: './Rectangle1.png', link: '#' },
    { id: 3, title: 'How to Build a Scalable Application up to 1 Million Users on AWS', image: './Rectangle1.png', link: '#' },
    { id: 4, title: 'How to Build a Scalable Application up to 1 Million Users on AWS', image: './Rectangle1.png', link: '#' },
    { id: 5, title: 'How to Build a Scalable Application up to 1 Million Users on AWS', image: './Rectangle1.png', link: '#' },
    { id: 6, title: 'How to Build a Scalable Application up to 1 Million Users on AWS', image: './Rectangle1.png', link: '#' },
  ];

  const settings = {
    centerMode: true,
    centerPadding: '180px', // Adjust padding as needed for mobile
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '30px', // Center padding for mobile
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on tablet
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides on larger devices
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '30px',
        },
      },
    ],
  };

  return (
    <div className="w-full min-h-[40vh] py-16">
      <div className="min-w-full">
        <div className="flex flex-col items-center lg:pb-16">
          <div className="bg-[linear-gradient(to_right,_#004589,_#00A1F1)] to-pink-500 w-24 h-1.5 lg:mb-10 mb-12"></div>
          <span className="text-2xl md:text-3xl lg:text-4xl block leading-relaxed">Featured</span>
          <h1 className="text-4xl font-bold leading-relaxed">Resources</h1>
        </div>

        {/* Slider for all screens */}
        <Slider {...settings}>
          {resources.map((resource) => (
            <div key={resource.id} className="px-2"> {/* Adjust padding for mobile */}
              <div className="overflow-hidden flex flex-col justify-center items-center">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-auto object-cover rounded-lg"
                />
                <div className='lg:px-10 px-4'>
                  <h3 className="text-lg text-gray-800 mb-2 pt-4 px-5">
                    {resource.title}
                  </h3>
                </div>
                <div className="self-end flex mt-4 justify-end mr-4 lg:px-10">
                  <a href={resource.link} className="flex items-center bg-custom-gradient text-transparent bg-clip-text text-base font-bold">
                    Read More
                    <img src="./arrow.svg" alt="arrow" className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedResources;
