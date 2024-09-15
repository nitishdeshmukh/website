import React from 'react';

const data = [
  {
    title: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "",
  },
  {
    title: "Developing Shared Understanding",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "",
  },
  {
    title: "Proven Experience and Expertise",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "", 
  },
  {
    title: "Security & Intellectual Property (IP)",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "", 
  },
  {
    title: "Code Reviews",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "", 
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "", 
  },
];

const DesignApproach = () => {
  return (
    <div className="bg-sky-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className='text-center'>
          <span className='text-4xl leading-relaxed block'>Our Design and</span>
          <h2 className="text-4xl font-bold leading-relaxed">Development Approach</h2>
        </div>
        {/* Grid Layout */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-start bg-white px-8 py-14 border-2 border-sky-700"
            >
              {/* Icon */}
              <div className="border ">
                <img src={item.icon} alt="icon"/>
              </div>
              {/* Content */}
              <div className='border text-start'>
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
