import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';  
import 'slick-carousel/slick/slick-theme.css';

const FeaturedResources = () => {
  const resources = [
    {
      id: 1,
      title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
      image: './Rectangle1.png', 
      link: '#',
    },
    {
      id: 2,
      title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
      image: './Rectangle1.png', 
      link: '#',
    },
    {
      id: 3,
      title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
      image: './Rectangle1.png', 
      link: '#',
    },
    {
      id: 4,
      title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
      image: './Rectangle1.png', 
      link: '#',
    },
    {
      id: 5,
      title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
      image: './Rectangle1.png', 
      link: '#',
    },
    {
      id: 6,
      title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
      image: './Rectangle1.png', 
      link: '#',
    },
  ];

  const settings = {
    centerMode: true,
    centerPadding: '180px',  
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, 
    arrows: false,
    draggable: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full h-auto py-16">
      <div className="max-w-full">
        <div className="text-center pt-16 flex flex-col justify-center items-center pb-10">
          <div className="bg-[linear-gradient(to_right,_#004589,_#00A1F1)] to-pink-500 w-24 h-1.5 mb-10"></div>
          <span className="text-2xl md:text-3xl lg:text-4xl block leading-relaxed">Featured</span>
          <h1 className="text-4xl font-bold leading-relaxed">Resources</h1>
        </div>
        <Slider {...settings}>
          {resources.map((resource, index) => (
            <div key={index} className="px-12">
              <div className="overflow-hidden flex flex-col justify-center items-center">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-auto object-cover rounded-lg" 
                />
                <div>
                  <h3 className="text-lg text-gray-800 mb-2 pt-4 px-3">
                    {resource.title}
                  </h3>
                </div>
                <div className="self-end flex mt-4 justify-end mr-4">
                  <a href="#" className="flex items-center bg-custom-gradient text-transparent bg-clip-text text-base font-bold">
                    Read More
                    <img src="./Vector.png" alt="arrow" className="ml-2" />
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
