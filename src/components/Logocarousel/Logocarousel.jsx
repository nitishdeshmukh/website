import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoCarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: '180px',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '80px', 
        },
      },
    ],
  };

  return (
    <div className="bg-sky-50 h-[30vh] pt-16">
      <Slider {...settings}>
        <div className="flex justify-center items-center h-full">
          <img src="Logo6.svg" alt="Logo 6" className="max-w-full max-h-full object-contain" />
        </div>
        <div className="flex justify-center items-center h-full">
          <img src="logo2.svg" alt="Logo 5" className="max-w-full max-h-full object-contain" />
        </div>
        <div className="flex justify-center items-center h-full">
          <img src="logo3.svg" alt="Logo 7" className="max-w-full max-h-full object-contain" />
        </div>
        <div className="flex justify-center items-center h-full">
          <img src="Logo4.svg" alt="Logo 8" className="max-w-full max-h-full object-contain" />
        </div>
        <div className="flex justify-center items-center h-full">
          <img src="logo5.svg" alt="Logo 9" className="max-w-full max-h-full object-contain" />
        </div>
      </Slider>
    </div>
  );
};

export default LogoCarousel;
