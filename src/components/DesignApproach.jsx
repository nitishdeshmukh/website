import React from 'react';

const data = [
  {
    title: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "Rocket.svg",
    style: " h-14 w-32 bg-custom-gradient-c1 rounded-xl",
  },
  {
    title: "Developing Shared Understanding",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "Code.svg",
    style: "h-14 w-32 bg-custom-gradient-c2 rounded-xl",
  },
  {
    title: "Proven Experience and Expertise",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "Heart.svg", 
    style: " h-14 w-32 bg-custom-gradient-c3 rounded-xl",
  },
  {
    title: "Security & Intellectual Property (IP)",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "Shield.svg", 
    style: " h-14 w-32 bg-custom-gradient-c4 rounded-xl",
  },
  {
    title: "Code Reviews",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "Success.svg", 
    style: " h-14 w-32 bg-custom-gradient-c5 rounded-xl",
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "Padlock.svg", 
    style: "h-14 w-32  bg-custom-gradient-c6 rounded-xl",
  },
];

const DesignApproach = () => {
  return (
    <div className="bg-custom-bg py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className='text-center flex flex-col justify-center items-center pb-5'>
          <div className='bg-[linear-gradient(to_right,_#004589,_#00A1F1)] to-pink-500 w-24 h-1.5 mb-10'>
          </div>
          <span className="text-4xl block leading-relaxed">Our Design and</span>
          <h1 className="text-4xl font-bold leading-relaxed">Development Approach</h1>
        </div>
        {/* Grid Layout */}
        <div className="px-20 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 pb-10">
          {data.map((item, index) => (
            <div 
              key={index}
              className="flex items-start bg-white px-8 py-14 border-2 border-solid" style={{
                borderImage: 'linear-gradient(225deg, #00A1F1 0%, #004589 100%) 1',
              }}
            >
              {/* Icon */}
              <div className={`flex items-center justify-center ${item.style}`}>
                <img src={item.icon} alt="icon" className=' max-w-full max-h-full object-fill'/>
              </div>
              {/* Content */}
              <div className='text-start pl-5'>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignApproach;
