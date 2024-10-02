import React from 'react';

const CaseStudyCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-sky-50 rounded-lg mb-6 shadow-lg h-auto md:h-[400px]">
      
      {/* Image Container */}
      <div className="flex-shrink-0 w-full md:w-1/2 h-48 md:h-full flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="md:ml-6 text-left flex-grow flex flex-col justify-between m-4 md:m-8">
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-gray-600 mt-2 mb-4 flex-grow leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>

        <div className="self-end mt-4 md:mt-8">
          <a href="#" className="flex items-center bg-custom-gradient text-transparent bg-clip-text text-lg md:text-xl font-semibold">
            Read more
            <img src="./arrow1.svg" alt="arrow" className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;