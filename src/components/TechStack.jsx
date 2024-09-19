import React, { useState } from 'react';

const techStack = [
  { name: 'Node.js', img: './node.png', category: 'Backend' },
  { name: 'PHP', img: './php.png', category: 'Backend' },
  { name: 'MySQL', img: './mysql.png', category: 'Backend' },
  { name: 'Java', img: './Java.png', category: 'Backend' },
  { name: '.NET Core', img: './NETCore.png', category: 'Backend' },
  { name: 'Python', img: './Python.png', category: 'Backend' },
  { name: 'Rails', img: './RubyOnRails.png', category: 'Backend' },
  { name: 'Golang', img: './Go.png', category: 'Backend' },
  { name: 'MongoDB', img: './mongodb.png', category: 'Databases' }
];

const categories = ['Backend', 'Frontend', 'Databases', 'CMS', 'Cloud Testing', 'DevOps'];

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('Backend');

  const filteredTechStack = techStack.filter((tech) => tech.category === selectedCategory);

  return (
    <div className="container mx-auto text-center pt-10 mb-24 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <span className='text-2xl sm:text-3xl md:text-4xl block leading-relaxed'>Our</span>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">Tech Stack</p>
      </div>
      
      {/* Category Selection */}
      <div className="flex justify-center space-x-4 mb-8 sm:mb-10 lg:mb-12 flex-wrap">
        {categories.map((category) => (
          <span
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-base sm:text-lg md:text-xl font-semibold px-2 py-1 cursor-pointer ${
              selectedCategory === category ? 'border-b-2 sm:border-b-4 border-sky-600' : 'border-b-2 border-transparent'
            }`}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Display Filtered Tech Stack */}
      <div className='flex justify-center items-center'>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {filteredTechStack.length > 0 ? (
            filteredTechStack.map((tech, index) => (
              <div
                key={index}
                className="flex justify-center items-center border border-gray-300 p-2 sm:p-4 rounded"
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-28 max-w-full object-contain"
                />
              </div>
            ))
          ) : (
            <p className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 text-lg text-red-500">No technologies available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
