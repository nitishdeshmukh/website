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
        <div className="text-center mb-10">
          <span className="text-4xl block leading-relaxed">Featured</span>
          <span className="text-4xl font-bold leading-relaxed">Resources</span>
        </div>
        <Slider {...settings}>
          {resources.map((resource, index) => (
            <div key={index} className="px-12">
              <div className="overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-40 object-cover rounded-lg" 
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {resource.title}
                  </h3>
                  <a
                    href={resource.link}
                    className="text-sky-600  text-base self-end"
                  >
                    Read More 
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
