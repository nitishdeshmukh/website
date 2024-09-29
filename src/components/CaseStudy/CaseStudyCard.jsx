import React from 'react';

const CaseStudyCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-sky-50 rounded-lg  mb-6 shadow-lg h-[400px]">
      {/* Image Container */}
      <div className="flex-shrink-0 h-full flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      {/* Content */}
      <div className="md:ml-6 text-left flex-grow flex flex-col justify-between m-8">
        <div className="flex flex-col flex-grow">
          <h2 className="text-4xl font-semibold mb-6">{title}</h2>
          <p className="text-gray-600 mt-10 mb-4 flex-grow leading-relaxed">{description}</p>
        </div>
        <div className="self-end mt-8">
          <a href="#" className="flex items-center bg-custom-gradient text-transparent bg-clip-text text-xl font-semibold">
            Read more
            <img src="./Vector4.png" alt="arrow" className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;