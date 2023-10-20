import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';

import '../../styles/Swiper.module.css';
import Testimonial_card from './Testimonial_card';
import TestomonialData from '../Data/TestomonialData';

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
                className="mySwiper container mx-auto 2xl:max-w-[1015px] 2xl:h-[457px]  h-auto"
            >
                
                {TestomonialData.map((data, index) => {
                    return (
                        <SwiperSlide key={index} className='bg-white w-full h-[457px]'>
                            <Testimonial_card
                                image={data.image}
                                name={data.name}
                                comment={data.comment}
                            />
                        </SwiperSlide>
                    )
                })}
                <div className="swiper-button-next" style={{ color: '#199AE2' }} />
                <div className="swiper-button-prev" style={{ color: '#199AE2' }} />
            </Swiper>
        </>
    )
}

export default SwiperTestomonial