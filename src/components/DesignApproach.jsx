import React from 'react';

const data = [
  {
    title: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "rocket.png",
  },
  {
    title: "Developing Shared Understanding",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "Abc",
  },
  {
    title: "Proven Experience and Expertise",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "💼", 
  },
  {
    title: "Security & Intellectual Property (IP)",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "🔒", // Replace with an actual image or icon component if needed
  },
  {
    title: "Code Reviews",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "📝", // Replace with an actual image or icon component if needed
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "✅", // Replace with an actual image or icon component if needed
  },
];

const DesignApproach = () => {
  return (
    <div className="bg-sky-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-center text-3xl font-bold mb-8">
          Our Design and Development Approach
        </h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-start bg-white px-8 py-14 border-2 border-sky-700"
            >
              {/* Icon */}
              <div className="text-3xl mr-4">
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
