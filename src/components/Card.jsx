import React from 'react';

const Card = () => {
  const cards = [
    {
      image: "./Frame1.png", // Replace with actual image URL
      title: "Build the right team to scale",
      description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long-term.",
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
      description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long-term.",
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
      description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long-term.",
      quote: "Symform is quick to identify larger problems with the software as we decided to expand our scope to build new modules.",
      author: { 
        name: "Jeeva Markram", 
        position: "CEO", 
        profilePic: "https://randomuser.me/api/portraits/women/31.jpg" // Replace with actual profile image URL
      }
    }
  ];

  return (
    <div className="mx-auto px-4 py-12 lg:px-10">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-2xl sm:text-3xl md:text-4xl block leading-relaxed">Way of building</span>
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold block leading-relaxed">Great Software</span>
      </div>

      {/* Card List */}
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col mb-10 items-start justify-start sm:justify-around sm:mb-16 ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          } md:flex-row`}
        >
          {/* Image */}
          <img
            src={card.image}
            alt="Card"
            className="w-full sm:w-3/4 md:w-2/5 rounded-lg mb-6 sm:mb-0"
          />
          
          {/* Text and Author */}
          <div className="w-full md:w-2/5 md:ml-6 pt-4 md:pt-0 text-start leading-loose">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">{card.title}</h3>
            <p className="my-4 sm:my-6 text-gray-700 text-sm sm:text-base md:text-lg">{card.description}</p>
            <blockquote className="text-sky-600 font-semibold px-3 text-sm sm:text-lg italic">
              "{card.quote}"
            </blockquote>
            
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
