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
                className="mySwiper container mx-auto max-w-[1015px] h-[457px]"
            >
                {/* <SwiperSlide className='bg-white w-full h-[457px]'>
                    <Testimonial_card
                        image="person1.gif"
                        name="Jonathon"
                        comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit"
                    />
                </SwiperSlide>
                <SwiperSlide className='bg-white'>
                    <Testimonial_card
                        image="person2.gif"
                        name="Christian"
                        comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit"
                    />
                </SwiperSlide>
                <SwiperSlide className='bg-white'>
                    <Testimonial_card
                        image="person3.gif"
                        name="Brenda"
                        comment="When you think of a great developer, I’m sure someone who writes good comments often is not at the top of the list. However, writing good comments is one of the most important skills a developer can have. Good comments not only help you understand your code better, but they also make it easier for others to read and work with. In this blog post, we’ll look at why writing good comments makes you a great developer and some tips for improving your commenting style. Because if you are mindful in your commenting, it is an indication that you are mindful in your coding!"
                    />
                </SwiperSlide> */}
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