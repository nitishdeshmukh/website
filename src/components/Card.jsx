import React from 'react';

const Card = () => {
  const cards = [
    {
      image: "./Frame1.png", // Replace with actual image URL
      title: "Build the right team to scale",
      description: "Finding the right talent is not easy. We help you find talent that suits your needs, follows your processes, and sticks with you long-term (which is not the case with freelancers).",
      quote: "Symform is quick to identify larger problems with the software as we decided to expand our scope to build new modules.",
      author: { 
        name: "Jeeva Markram", 
        position: "CEO", 
        profilePic: "https://randomuser.me/api/portraits/women/17.jpg" // Replace with actual profile image URL
      }
    },
    {
      image: "./Frame2.png", // Replace with actual image URL
      title: "Build the right team to scale",
      description: "Finding the right talent is not easy. We help you find talent that suits your needs, follows your processes, and sticks with you long-term (which is not the case with freelancers).",
      quote: "Symform is quick to identify larger problems with the software as we decided to expand our scope to build new modules.",
      author: { 
        name: "Jeeva Markram", 
        position: "CEO", 
        profilePic: "https://randomuser.me/api/portraits/men/50.jpg" // Replace with actual profile image URL
      }
    },
    {
      image: "./Frame3.png", // Replace with actual image URL
      title: "Build the right team to scale",
      description: "Finding the right talent is not easy. We help you find talent that suits your needs, follows your processes, and sticks with you long-term (which is not the case with freelancers).",
      quote: "Symform is quick to identify larger problems with the software as we decided to expand our scope to build new modules.",
      author: { 
        name: "Jeeva Markram", 
        position: "CEO", 
        profilePic: "https://randomuser.me/api/portraits/women/31.jpg" // Replace with actual profile image URL
      }
    }
  ];

  return (
    <div className="mx-auto px-4 py-12 lg:px-10 ">
      {/* Header */}
      <div className='flex flex-col items-center pb-16'>
        <div className='bg-[linear-gradient(to_right,_#004589,_#00A1F1)] to-pink-500 w-24 h-1.5 mb-10'>
        </div>
        <span className="text-4xl block leading-relaxed">Way of building</span>
        <h1 className="text-4xl font-bold leading-relaxed">Great Software</h1>
      </div>

      {/* Card List */}
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative flex flex-col mb-10 items-start justify-start sm:justify-around sm:mb-16 ${index % 2 === 0 ? "" : "md:flex-row-reverse"} md:flex-row`}
        >

          {/* Elliptical Backgrounds */}
          <div className={`absolute ${index % 2 === 0 ? "lg:left-[4.5%] lg:top-[-26px]" : "lg:right-[-1.5%] lg:top-[-26px]"}   w-1/2 z-10`}>
            <img src="./Ellipse1.svg" alt="ellipse1" />
          </div>
          <div className={`absolute ${index % 2 === 0 ? "lg:left-[33%] lg:top-[95%]" : "lg:right-[-30%] lg:top-[95%]"}   w-1/2 z-10`}>
            <img src="./Ellipse2.svg" alt="ellipse1" />
          </div>

          {/* Image */}
          
          <img
            src={card.image}
            alt="Card"
            className="w-full sm:w-3/4 md:w-2/5 rounded-lg mb-6 sm:mb-0 z-20"
          />

          {/* Text and Author */}
          <div className="w-full lg:w-2/6 lg:ml-6 pt-4 lg:pt-0 text-start" >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">{card.title}</h3>
            <p className="my-4 sm:my-6 text-gray-700 text-sm sm:text-base lg:text-lg leading-loose">{card.description}</p>
            <p className='my-4 sm:my-6 text-gray-700 text-sm sm:text-base lg:text-lg'>
            Our <span className='bg-custom-gradient text-transparent bg-clip-text'>delivery model</span> helps you cut costs and deliver within budget.
            </p>
            {/* Quote with a line */}
            <div className="flex items-start">
              <div
                className="mx-2 h-20 w-1.5" style={{ background: 'linear-gradient(225deg, #00A1F1 0%, #004589 100%)',}}
              ></div>
              <blockquote className="text-sky-600 font-light text-lg italic">
                "{card.quote}"
              </blockquote>
            </div>

            {/* Author section in row (responsive) */}
            <div className="mt-4 sm:mt-6 flex flex-row items-center">
              <img
                src={card.author.profilePic}
                alt={card.author.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-base sm:text-lg">{card.author.name}</p>
                <p className="text-gray-600 text-sm">{card.author.position}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
