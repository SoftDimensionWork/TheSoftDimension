import Footer from '@/compnents/Global/Footer'
import Navbar from '@/compnents/Global/Navbar'
import PortfolioSection from '@/compnents/Portfolio/PortfolioSection'
import React from 'react'

export default function portfolio() {
    return (
        <>
            <div className='w-full h-full fixed z-[-1] top-0 left-[-200px] bg-blue'>
                <img src="/SVG/background.svg" alt="" />
            </div>
            {/* <div className='w-full h-screen absolute right-[10px]'>
                <div className='w-[200px] h-[200px] bg-black'>

                </div>
            </div> */}
            <div className='w-full h-full fixed top-0 right-0 z-[-1]'>
                <img src="/SVG/background.svg" className='absolute right-[-200px] bg-blue' alt="" />
            </div>
            <Navbar />
            <div className='Portfolio__Section w-full min-h-screen z-50'>
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
