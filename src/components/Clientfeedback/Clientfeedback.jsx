import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  
import 'swiper/css/autoplay';  
import { Autoplay, Mousewheel } from 'swiper/modules';

const Clientfeedback = () => {
    const [activeFeedback, setActiveFeedback] = useState('');  

    const feedbackData = [
        {
            name: 'Joint',
            role: 'Jonet Cosmetics',
            rating: 5,
            feedback: '1Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.',
            image: 'https://randomuser.me/api/portraits/women/50.jpg'
        },
        {
            name: 'Sutta',
            role: 'Software Engineer',
            rating: 3,
            feedback: '2Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.',
            image: 'https://randomuser.me/api/portraits/men/60.jpg'
        },
        {
            name: 'Ganja',
            role: 'Jonet Cosmetics',
            rating: 5,
            feedback: '3Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.',
            image: 'https://randomuser.me/api/portraits/women/51.jpg'
        },
        {
            name: 'Sasta Nasha',
            role: 'Software Engineer',
            rating: 4,
            feedback: '4Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.',
            image: 'https://randomuser.me/api/portraits/men/61.jpg'
        },
        {
            name: 'drugs',
            role: 'Jonet Cosmetics',
            rating: 4.5,
            feedback: '5Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.',
            image: 'https://randomuser.me/api/portraits/women/52.jpg'
        },
        {
            name: 'steroids',
            role: 'Software Engineer',
            rating: 5,
            feedback: '6Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.',
            image: 'https://randomuser.me/api/portraits/men/62.jpg'
        },
        {
            name: 'chai',
            role: 'Software Engineer',
            rating: 5,
            feedback: '6Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.',
            image: 'https://randomuser.me/api/portraits/men/63.jpg'
        },
    ];

    const handleSlideChange = (swiper) => {
        const realIndex = swiper.realIndex;  
        setActiveFeedback(feedbackData[realIndex].feedback); 
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4">
            <div className="text-center w-full max-w-screen-lg">
                <h2 className="text-3xl mb-4">
                    Why customers love <br /> 
                    <span className="font-bold">working with us</span>
                </h2>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto leading-relaxed mt-16">
                    {activeFeedback} 
                </p>
            
                <div className="relative w-full">
                    <Swiper
                        modules={[Autoplay, Mousewheel]}  
                        spaceBetween={10}  
                        slidesPerView={1}  
                        mousewheel={true}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ 
                            delay: 5000,  
                            disableOnInteraction: false  
                        }}
                        onSlideChange={handleSlideChange}  
                        className="feedback-slider w-full"
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 10 },  // Mobile
                            768: { slidesPerView: 2, spaceBetween: 15 },  // Tablet Portrait
                            1024: { slidesPerView: 3, spaceBetween: 20 },  // Tablet Landscape
                            1280: { slidesPerView: 5, spaceBetween: 30 },  // Desktop
                        }}
                    >
                        {feedbackData.map((client, index) => (
                            <SwiperSlide key={index} className="feedback-slide bg-transparent">
                                <div className="flex flex-col items-center">
                                    <img 
                                        src={client.image} 
                                        alt={client.name} 
                                        className="w-20 h-20 rounded-full mx-auto mb-4" 
                                    />
                                    <h3 className="text-xl font-semibold">{client.name}</h3>
                                    <p className="text-gray-500 italic mb-2">{client.role}</p>
                                    
                                    <div className="text-yellow-500">
                                        {'★'.repeat(client.rating)}{'☆'.repeat(5 - client.rating)}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Clientfeedback;
