// import React, { useState } from 'react';

// const techStack = [
//   { name: 'Node.js', img: './node.png', category: 'Backend' },
//   { name: 'PHP', img: './php.png', category: 'Backend' },
//   { name: 'MySQL', img: './mysql.png', category: 'Backend' },
//   { name: 'Java', img: './Java.png', category: 'Backend' },
//   { name: '.NET Core', img: './NETCore.png', category: 'Backend' },
//   { name: 'Python', img: './Python.png', category: 'Backend' },
//   { name: 'Rails', img: './RubyOnRails.png', category: 'Backend' },
//   { name: 'Golang', img: './Go.png', category: 'Backend' },
//   { name: 'MongoDB', img: './mongodb.png', category: 'Backend' }
// ];

// const categories = ['Backend', 'Frontend', 'Databases', 'CMS', 'Cloud Testing', 'DevOps'];

// const TechStack = () => {
//   const [selectedCategory, setSelectedCategory] = useState('Backend');

//   const filteredTechStack = techStack.filter((tech) => tech.category === selectedCategory);

//   return (
//     <div className="container mx-auto text-center pt-10">
//       <div>
//         <span className='text-4xl block leading-relaxed'>Our</span>
//         <p className="text-4xl font-bold leading-relaxed">Tech Stack</p>
//       </div>
      
//       {/* Category Selection */}
//       <div className="flex justify-center mb-12">
//         {categories.map((category) => (
//           <span
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`text-xl font-semibold px-4 cursor-pointer ${
//               selectedCategory === category ? 'border-b-4 border-blue-500' : 'border-b-4 border-transparent'
//             }`}
//           >
//             {category}
//           </span>
//         ))}
//       </div>

//       {/* Display Filtered Tech Stack */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 border border-red-800">
//         {filteredTechStack.length > 0 ? (
//           filteredTechStack.map((tech, index) => (
//             <div key={index} className="flex items-center border">
//               <img
//                 src={tech.img}
//                 alt={tech.name}
//                 className="object-contain"
//               />
//             </div>
//           ))
//         ) : (
//           <p className="col-span-5 text-lg text-red-500">No technologies available in this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TechStack;
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
    <div className="container mx-auto text-center pt-10 mb-24">
      <div>
        <span className='text-4xl block leading-relaxed'>Our</span>
        <p className="text-4xl font-bold leading-relaxed">Tech Stack</p>
      </div>
      
      {/* Category Selection */}
      <div className="mb-12">
        {categories.map((category) => (
          <span
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-xl font-semibold px-4 cursor-pointer ${
              selectedCategory === category ? 'border-b-4 border-sky-600' : 'border-b-4 border-transparent'
            }`}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Display Filtered Tech Stack */}
      <div className='flex justify-center items-center'>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {filteredTechStack.length > 0 ? (
          filteredTechStack.map((tech, index) => (
            <div
              key={index}
              className="flex justify-center items-center border border-gray-300"
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))
        ) : (
          <p className="col-span-5 text-lg text-red-500">No technologies available in this category.</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
