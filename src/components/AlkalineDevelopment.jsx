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
        <div className="pt-10 h-screen bg-sky-50">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h2 className="text-4xl block leading-relaxed">How development</h2>
                <h1 className="text-4xl font-bold leading-relaxed">through Alkaline works</h1>
            </div>

            {/* Steps Section */}
            <div className="flex justify-center items-center p-10">
                <div className="relative">

                    {/* Grid of Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
                        <div className="order-1 bg-white p-6 rounded-lg max-w-sm">
                            <h3 className="text-blue-600 font-bold text-xl mb-4">#1 Assemble the right team</h3>
                            <p className="text-gray-600">We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do.</p>
                        </div>
                        <div className="order-4 bg-white p-6 rounded-lg max-w-sm lg:ml-12">
                            <h3 className="text-blue-600 font-bold text-xl mb-4">#2 Sprint planning</h3>
                            <p className="text-gray-600">Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.</p>
                        </div>
                        <div className="order-2 bg-white p-6 rounded-lg max-w-sm">
                            <h3 className="text-blue-600 font-bold text-xl mb-4">#3 Tech architecture</h3>
                            <p className="text-gray-600">We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.</p>
                        </div>
                        <div className="order-5 bg-white p-6 rounded-lg max-w-sm lg:ml-12">
                            <h3 className="text-blue-600 font-bold text-xl mb-4">#4 Standups & weekly demos</h3>
                            <p className="text-gray-600">Standups, weekly demos, and review meetings make sure everyone is on the same page and can raise their concerns.</p>
                        </div>
                        <div className="order-3 bg-white p-6 rounded-lg max-w-sm">
                            <h3 className="text-blue-600 font-bold text-xl mb-4">#5 Code reviews</h3>
                            <p className="text-gray-600">Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.</p>
                        </div>
                        <div className="order-6 bg-white p-6 rounded-lg max-w-sm lg:ml-12">
                            <h3 className="text-blue-600 font-bold text-xl mb-4">#6 Iterative delivery</h3>
                            <p className="text-gray-600">We divide the implementation process into several checkpoints rather than a single deadline.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlkalineDevelopment;

