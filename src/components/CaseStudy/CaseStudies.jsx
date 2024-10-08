import React from 'react';
import CaseStudyCard from './CaseStudyCard';

const caseStudies = [
  {
    image: './Case-study.png',
    title: 'Website Design for SCFC Canada',
    description:
      'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.',
  },
  {
    image: './Case-study.png',
    title: 'Another Case Study',
    description:
      'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.',
  },
  {
    image: './Case-study.png',
    title: 'Another Case Study',
    description:
      'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.',
  },
];

const CaseStudies = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center mb-10">
        <div className="bg-[linear-gradient(to_right,_#004589,_#00A1F1)] w-24 h-1.5 mb-10" />
        <span className="text-3xl md:text-4xl block leading-relaxed">Our recent</span>
        <h1 className="text-3xl md:text-4xl font-bold leading-relaxed">Case studies</h1>
      </div>

      <div className="flex flex-col w-full py-10 px-6 md:px-16">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyCard
            key={index}
            image={caseStudy.image}
            title={caseStudy.title}
            description={caseStudy.description}
          />
        ))}

        <div className="self-end mt-4 text-center">
          <a
            href="#"
            className="flex items-center justify-center bg-custom-gradient text-transparent bg-clip-text text-xl font-semibold"
          >
            Read more case studies
            <img src="./arrow1.svg" alt="arrow" className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
