import React, { useState } from 'react';

const techStack = [
  { name: 'Node.js', img: './node.svg', category: 'Backend' },
  { name: 'PHP', img: './php.svg', category: 'Backend' },
  { name: 'MySQL', img: './mysql.svg', category: 'Backend' },
  { name: 'Java', img: './Java.svg', category: 'Backend' },
  { name: '.NET Core', img: './NETCore.svg', category: 'Backend' },
  { name: 'Python', img: './Python.svg', category: 'Backend' },
  { name: 'Rails', img: './RubyOnRails.svg', category: 'Backend' },
  { name: 'Golang', img: './Go.svg', category: 'Backend' },
  { name: 'MongoDB', img: './mongodb.svg', category: 'Databases' },
];

const categories = ['Backend', 'Frontend', 'Databases', 'CMS', 'Cloud Testing', 'DevOps'];

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('Backend');
  const defaultRowPattern = [5, 4, 3]; 
  const filteredTechStack = techStack.filter((tech) => tech.category === selectedCategory);

  const generateDynamicRowPattern = (totalItems) => {
    const basePattern = [5, 4, 3];
    let dynamicPattern = [];
    let remainingItems = totalItems;

    while (remainingItems > 0) {
      for (let i = 0; i < basePattern.length; i++) {
        if (remainingItems <= 0) break; 
        dynamicPattern.push(Math.min(basePattern[i], remainingItems)); 
        remainingItems -= basePattern[i];
      }
    }

    return dynamicPattern;
  };

  const rowPattern = generateDynamicRowPattern(filteredTechStack.length); 

  const splitIntoRows = (items, rowPattern) => {
    let rows = [];
    let currentIndex = 0;

    for (let i = 0; i < rowPattern.length; i++) {
      const numItemsInRow = rowPattern[i];
      const row = items.slice(currentIndex, currentIndex + numItemsInRow);
      rows.push(row);
      currentIndex += numItemsInRow;
    }

    return rows;
  };

  const techRows = splitIntoRows(filteredTechStack, rowPattern);

  return (
    <div className="container mx-auto text-center pt-10 mb-24 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center pt-16 flex flex-col justify-center items-center pb-5">
        <div className="bg-[linear-gradient(to_right,_#004589,_#00A1F1)] to-pink-500 w-24 h-1.5 mb-10"></div>
        <span className="text-2xl md:text-3xl lg:text-4xl block leading-relaxed">Our</span>
        <h1 className="text-4xl font-bold leading-relaxed">Tech Stack</h1>
      </div>

      {/* Category Selection */}
      <div className="flex justify-center space-x-4 mb-8 sm:mb-10 lg:mb-12 flex-wrap">
        {categories.map((category) => (
          <span
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-base sm:text-lg md:text-xl font-semibold px-2 py-1 cursor-pointer ${
              selectedCategory === category ? 'border-b-2 lg:border-b-4 border-sky-600' : 'border-b-2 border-transparent'
            }`}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Display Filtered Tech Stack */}
      <div className='flex justify-center items-center'>
        <div className="flex flex-col justify-center items-center flex-wrap gap-6">
          {filteredTechStack.length > 0 ? (
            <>
              {techRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-6 flex-wrap justify-center mt-4">
                  {row.map((tech, index) => (
                    <div key={index} className="flex flex-col justify-center items-center  p-2 sm:p-4  text-center">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-28 max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </>
          ) : (
            <p className="text-lg text-red-500">No technologies available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
