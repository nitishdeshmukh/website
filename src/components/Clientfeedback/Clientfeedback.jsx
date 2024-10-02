import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  
import 'swiper/css/autoplay';  
import { Autoplay, Mousewheel,Navigation } from 'swiper/modules';

const Clientfeedback = () => {
    const [activeFeedback, setActiveFeedback] = useState('');  

    const feedbackData = [
        {
            name: 'Rema',
            role: 'Jonet Cosmetics',
            rating: 5,
            feedback: '1Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.',
            image: 'https://randomuser.me/api/portraits/women/50.jpg'
        },
        {
            name: 'Tom',
            role: 'Software Engineer',
            rating: 3,
            feedback: '2Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.',
            image: 'https://randomuser.me/api/portraits/men/60.jpg'
        },
        {
            name: 'Sara',
            role: 'Jonet Cosmetics',
            rating: 5,
            feedback: '3Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.',
            image: 'https://randomuser.me/api/portraits/women/51.jpg'
        },
        {
            name: 'Sam',
            role: 'Software Engineer',
            rating: 4,
            feedback: '4Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.',
            image: 'https://randomuser.me/api/portraits/men/61.jpg'
        },
        {
            name: 'Jara',
            role: 'Jonet Cosmetics',
            rating: 4.5,
            feedback: '5Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.',
            image: 'https://randomuser.me/api/portraits/women/52.jpg'
        },
        {
            name: 'Tom',
            role: 'Software Engineer',
            rating: 5,
            feedback: '6Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.',
            image: 'https://randomuser.me/api/portraits/men/62.jpg'
        },
        {
            name: 'Travis',
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
        <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4 pt-20">
            <div className="text-center w-full max-w-screen-lg">
                <div className='flex flex-col items-center'>
                    <div className='bg-[linear-gradient(to_right,_#004589,_#00A1F1)] to-pink-500 w-24 h-1.5 mb-10'>
                    </div>
                    <h2 className="text-4xl leading-relaxed block">Why customers love</h2>
                    <span className="text-4xl font-bold leading-relaxed">working with us</span>
                </div>
                <div className='relative'>
                    <div className='absolute lg:top-0 lg:left-40 top-0 left-0'>
                        <img src="./qoute1.svg" alt="quote icon" />
                    </div>
                    <p className="text-xl text-custom-text-bg mb-6 max-w-lg mx-auto leading-loose mt-16">
                        {activeFeedback} 
                    </p>
                    <div className='absolute lg:bottom-0 lg:right-40 bottom-0 right-0'>
                        <img src="./qoute2.svg" alt="quote icon" />
                    </div>
                </div>
                <div className="relative w-full">
                    <Swiper
                        modules={[Autoplay, Mousewheel, Navigation]}  
                        spaceBetween={10}  
                        slidesPerView={1}  
                        mousewheel={false}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ 
                            delay: 5000,  
                            disableOnInteraction: false  
                        }}
                        onSlideChange={handleSlideChange} 
                        navigation ={true}  
                        // navigation={{ 
                        //     prevEl: '.swiper-button-prev', 
                        //     nextEl: '.swiper-button-next' 
                        //  }}
                        className="feedback-slider w-full"
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 10 },  // Mobile
                            768: { slidesPerView: 2, spaceBetween: 15 },  // Tablet Portrait
                            1024: { slidesPerView: 3, spaceBetween: 20 },  // Tablet Landscape
                            1280: { slidesPerView: 5, spaceBetween: 30 },  // Desktop
                        }}
                    >
                        {feedbackData.map((client, index) => (
                            <div>
                                <SwiperSlide key={index} className="feedback-slide bg-transparent">
                                    <div className="flex flex-col items-center">
                                        <img 
                                            src={client.image} 
                                            alt={client.name} 
                                            className="w-20 h-20 rounded-full mx-auto mb-4" 
                                        />
                                        <h3 className="text-xl font-semibold bg-custom-gradient text-transparent bg-clip-text">{client.name}</h3>
                                        <p className="text-gray-500 italic mb-2">{client.role}</p>
                                        
                                        <div className="text-yellow-500">
                                            {'★'.repeat(client.rating)}{'☆'.repeat(5 - client.rating)}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                            
                        ))}
                    </Swiper>
                </div>
                <div className="flex justify-between w-full mt-8 items-center relative">
                    <div className=" hidden lg:flex lg:items-center lg:cursor-pointer lg:relative">
                        <img src="./Deco-img-arrow.svg" alt="Arrow left"className=" mr-2 "/>
                        <img src="Ellipse.svg" alt="Ellipse 1" className=" absolute left-56 bottom-0"/>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:cursor-pointer ">
                        <img src="./Deco-img-arrow1.svg" alt="Arrow right" className="ml-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clientfeedback;

// import React, { useState } from 'react';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import 'swiper/css';

// // import required modules
// import { Pagination, Navigation } from 'swiper/modules';

// export default function Clientfeedback() {
//   return (
//     <>
//       <Swiper
//         pagination={true}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
