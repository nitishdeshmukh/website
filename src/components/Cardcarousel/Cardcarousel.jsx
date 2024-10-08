import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cardcarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: '180px',  
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px', 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px', 
        },
      },
    ],
  };

  const cards = [
    {
      title: "Mobile App Development",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      title: "Web Design & Development",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      title: "Software Testing Service",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      title: "UI/UX Design",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      title: "Cloud Integration",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
  ];

  return (
    <div className="w-full min-h-[55vh] bg-custom-bg bg-opacity-60 py-16">
      <div className="max-w-8xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-custom-blue mb-8 relative">
        <span className="absolute inset-0 opacity-20 rounded"></span>
        Services we offer
      </h2>

        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="p-4 group">
              <div className="h-full bg-white shadow-md rounded-lg p-6 flex flex-col justify-between transform hover:translate-y-3 transition duration-300 border-2 border-transparent group-hover:border-sky-700">
                <div className="w-16 h-16 rounded-full bg-white p-[2px] border-2 border-sky-700">
                  <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                    <img src="Code.svg" alt="Logo" className="w-9 h-9"/>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Cardcarousel;
