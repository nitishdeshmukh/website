import React from 'react';

const steps = [
    {
        id: 1,
        title: 'Assemble the right team',
        description: 'We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do.',
    },
    {
        id: 2,
        title: 'Sprint planning',
        description: 'Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.',
    },
    {
        id: 3,
        title: 'Tech architecture',
        description: 'We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.',
    },
    {
        id: 4,
        title: 'Standups & weekly demos',
        description: 'Standups, weekly demos, and review meetings make sure everyone is on the same page and can raise their concerns.',
    },
    {
        id: 5,
        title: 'Code reviews',
        description: 'Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.',
    },
    {
        id: 6,
        title: 'Iterative delivery',
        description: 'We divide the implementation process into several checkpoints rather than a single deadline.',
    }
];

const AlkalineDevelopment = () => {
    return (
        <div className="pt-10 bg-sky-50 h-screen">
            {/* Title Section */}
            <div className="text-center mb-10 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">How development</h2>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">through Alkaline works</h1>
            </div>

            {/* Steps Section */}
            <div className="relative px-4 max-w-6xl mx-auto">
            {/* Timeline */}
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 h-1 bg-blue-600"></div>

            {/* Odd Steps (First Row - Left Aligned) */}
            <div className="flex justify-start mb-10">
                {steps.filter(step => step.id % 2 !== 0).map((step) => (
                <div key={step.id} className="w-full px-2">
                    <div className="bg-white p-4 rounded-lg shadow-md border">
                    <div className="flex items-center justify-start mb-2">
                        <h3 className="text-blue-600 font-bold text-lg sm:text-xl">#{step.id}</h3>
                        <h4 className="text-lg font-semibold ml-2">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 text-base">{step.description}</p>
                    </div>
                </div>
                ))}
            </div>

            {/* Even Steps (Second Row - Right Aligned) */}
            <div className="flex self-end">
                {steps.filter(step => step.id % 2 === 0).map((step) => (
                <div key={step.id} className="w-full px-2">
                    <div className="bg-white p-4 rounded-lg shadow-md border">
                        <div className="flex items-center justify-start mb-2">
                            <h3 className="text-blue-600 font-bold text-lg sm:text-xl">#{step.id}</h3>
                            <h4 className="text-lg font-semibold ml-2">{step.title}</h4>
                        </div>
                    <p className="text-gray-600 text-base">{step.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default AlkalineDevelopment;
