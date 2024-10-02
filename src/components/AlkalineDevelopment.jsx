import React from 'react';

const AlkalineDevelopment = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-custom-bg pb-10">
            <div className="flex flex-col items-center pt-10">
                <div className="bg-[linear-gradient(to_right,_#004589,_#00A1F1)] w-24 h-1.5 mb-10"></div>
                <span className="text-3xl lg:text-4xl block leading-relaxed">How development</span>
                <h1 className="text-4xl lg:text-4xl font-bold leading-loose">through Alcaline works</h1>
            </div>

            <div className="flex flex-col items-center py-7">
                {/* Odd Steps */}
                <div className="flex flex-wrap justify-around mb-8">
                    <Step number={1} title="Assemble the right team" description="We handle all aspects of vetting and choosing the right team for the unique time, expertise, or do their role." />
                    <Step number={3} title="Tech architecture" description="We break monolithic apps into microservices. Decoupling the code allows teams to move faster and easier." />
                    <Step number={5} title="Code reviews" description="Reviews before release help detect issues like memory leaks, performance gags, and general bad smells." />
                </div>

                {/* Even Steps */}
                <div className="flex flex-wrap justify-around mb-8">
                    <Step number={2} title="Sprint planning" description="Sprint rolling is a collective planning effort. Teams collaborate to clarify goals and ensure everyone is on the same page." />
                    <Step number={4} title="Standups & weekly demos" description="Standups, weekly demos, and reviews allow teams to ensure their work is in the same page and can raise concerns." />
                    <Step number={6} title="Iterative delivery" description="We deliver the implementation process in waves to ensure we meet checkpoints rather than deliver all at once." />
                </div>
            </div>
        </div>
    );
};

const Step = ({ number, title, description }) => {
    return (
        <div className="bg-white border rounded-lg p-4 shadow-lg mx-4 h-36 w-full md:w-96 flex flex-col justify-between mb-4">
            <div className="flex items-center">
                <h3 className="bg-custom-gradient text-transparent bg-clip-text font-bold text-lg text-xl mr-2">#{number}</h3>
                <h4 className="text-lg font-bold">{title}</h4>
            </div>
            {/* Text adjustment for better wrapping */}
            <p className="text-gray-700 flex-1">{description}</p>
        </div>
    );
};

export default AlkalineDevelopment;
