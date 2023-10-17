import BackgroundSVG from '@/compnents/Global/BackgroundSVG'
import Footer from '@/compnents/Global/Footer'
import Navbar from '@/compnents/Global/Navbar'
import PortfolioSection from '@/compnents/Portfolio/PortfolioSection'
import React from 'react'

export default function portfolio() {
    return (
        <>
            <BackgroundSVG />
            <Navbar />
            <div className='Portfolio__Section w-full min-h-screen z-50 t-black pt-20'>
                <div className='w-full h-full'>
                    <div className='w-full h-auto text-white text-4xl text-center mb-14'>
                        Our Projects
                    </div>
                    <PortfolioSection inductryName="Industrial : " />
                    <PortfolioSection inductryName="Food : " />
                    <PortfolioSection inductryName="E-Commerce : " />
                </div>
                <Footer />
            </div>
        </>
    )
}
