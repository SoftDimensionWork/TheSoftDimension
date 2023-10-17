import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';

import '../../styles/Swiper.module.css';
import Testimonial_card from './Testimonial_card';
function SwiperTestomonial() {
    return (
        <>
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}

                pagination={{ clickable: true }}
                loop={true}
                slidesPerView={1}
                modules={[Navigation]}
                className="mySwiper container mx-auto max-w-[1015px] h-[457px]"
            >
                <SwiperSlide className='bg-white w-full h-[457px]'>
                    <Testimonial_card
                        image="/logo.png"
                        name="Jonathon"
                        comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit"
                    />
                </SwiperSlide>
                <SwiperSlide className='bg-white'>
                    <Testimonial_card
                        image="/logo.png"
                        name="John Git"
                        comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit"
                    />
                </SwiperSlide>
                <SwiperSlide className='bg-white'>
                    <Testimonial_card
                        image="/logo.png"
                        name="Morol Git"
                        comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit"
                    />
                </SwiperSlide>
                <div className="swiper-button-next" style={{ color: '#199AE2' }} />
                <div className="swiper-button-prev" style={{ color: '#199AE2' }} />
            </Swiper>
        </>
    )
}

export default SwiperTestomonial