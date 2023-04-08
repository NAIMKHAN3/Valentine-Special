import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className='flex justify-center items-center mt-4 mb-10'>
                <img className='w-36 ml-5' src="https://i.ibb.co/tpqJV76/red-limited-offer-logo-symbol-banner-promo-clock-last-chance-to-buy-concept-sale-poster-flat-vector.png" alt="" />
                <h1 className=' text-center text-[#962927] font-semibold text-4xl tracking-widest'>SPECIAL OFFER</h1>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-[600px] h-[300px] mx-auto' src="https://i.ibb.co/BG76xHh/valentine-s-special-offer-banner-with-heart-envelope-in-clouds-free-vector.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[600px] h-[300px] mx-auto' src="https://i.ibb.co/McW3CPF/valentine-s-day-special-offer-banner-sale-vector-illustration-106640366.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[600px] h-[300px] mx-auto' src="https://i.ibb.co/wMYbdXF/valentine-s-day-banner-design-template-2d19cb171e977245d49eb8303b9e46ad-screen.jpg" alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;