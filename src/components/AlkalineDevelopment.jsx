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
        <div className="pt-10 bg-sky-50">
            {/* Title Section */}
            <div className="text-center mb-10 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">How development</h2>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">through Alkaline works</h1>
            </div>

            {/* Steps Section */}
            <div className="px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Apply grid-template-areas to handle odd and even positioning */}
                    <div className="md:grid md:grid-rows-2 md:grid-cols-3 md:gap-12">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:row-start-1 md:col-start-' + ((index / 2) + 1) : 'md:row-start-2 md:col-start-' + (index / 2 + 1)}`}
                            >
                                <h3 className="text-blue-600 font-bold text-lg sm:text-xl mb-4">
                                    #{step.id} {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlkalineDevelopment;
