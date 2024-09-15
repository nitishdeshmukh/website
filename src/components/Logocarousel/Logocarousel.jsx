import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-sky-50 border h-[30vh] justify-center pt-16">
      <Slider {...settings}>
        <div className="flex justify-center items-center h-full">
          <img src="logo6.png" alt="Logo 6" className="h-[80px] object-contain" />
        </div>
        <div className="flex justify-center items-center h-full">
          <img src="logo5.png" alt="Logo 5" className="h-[80px] object-contain" />
        </div>
        <div className="flex justify-center items-center h-full">
          <img src="logo7.png" alt="Logo 7" className="h-[80px] object-contain" />
        </div>
        <div className="flex justify-center items-center h-full">
          <img src="logo8.png" alt="Logo 8" className="h-[80px] object-contain" />
        </div>
        <div className="flex justify-center items-center h-full">
          <img src="logo9.png" alt="Logo 9" className="h-[80px] object-contain" />
        </div>
      </Slider>
    </div>
  );
};

export default LogoCarousel;
