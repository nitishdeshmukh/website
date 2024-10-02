import React from 'react';
import Button from './Button';

const AboutUs = () => {
    return (
        <div className='pt-20 m-5 lg:pt-30'>
            <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full">
                {/* Left Side */}
                <div className="max-w-3xl lg:ml-14">
                    <div>
                        <p className="text-2xl lg:text-6xl text-start space-y-1">
                            <span className='font-light leading-normal mr-4'>Exceptional</span>
                            <span className="bg-custom-gradient text-transparent bg-clip-text font-extrabold inline-block leading-normal mr-4">Product</span>
                            <span className='font-light inline-block leading-normal'>starts</span>
                        </p>
                        <p className="text-2xl lg:text-6xl text-start space-y-1">
                            <span className="font-extrabold leading-normal mr-4">with</span>
                            <span className="font-extrabold leading-normal mr-4">Exceptional</span>
                            <span className="bg-custom-gradient text-transparent bg-clip-text font-extrabold leading-normal">teams</span>
                        </p>
                        <div className="text-lg lg:text-lg text-balance w-full lg:w-11/12 text-gray-700 mt-4 lg:mt-10 mb-8">
                            <span className='leading-loose'>
                            At RDK Technologies, we specialize in building and managing top-tier
                            development teams dedicated to turning your vision into reality. Our
                            world-class developers are experts in their fields, ensuring that your
                            project benefits from cutting-edge technology and innovative
                            solutions.
                            </span>
                        </div>
                    </div>
                    <div className='mt-28'>
                        <Button >Let’s get started today!</Button>
                    </div>
                    
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/2 lg:-mr-14 mt-5">
                    <div className="relative p-0.5 rounded-2xl border-transparent bg-gradient-to-br from-[#005398] to-[#00A7F7] bg-clip-border">
                        <div className="bg-white pl-8 rounded-2xl">
                            <div>
                                <img
                                    src="../web-development.png"
                                    alt="Web Development"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
