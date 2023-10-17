import React from 'react'
import { SwiperSlide } from 'swiper/react'
import Testimonial_card from './Testimonial_card'

function SwiperCard() {
    return (
        <>
            <SwiperSlide className='bg-white'>
                <Testimonial_card
                    image="/logo.png"
                    name="Jonathon Git"
                    comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit"
                />
            </SwiperSlide>
        </>
    )
}

export default SwiperCard