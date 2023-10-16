import React from 'react'
import PortfolioCard from './PortfolioCard'

export default function PortfolioSection({inductryName}) {
    return (
        <>
            <div className='w-full min-h-[400px] container mx-auto pb-20 px-5 md:px-0'>
                        <div className='text-3xl font-semibold text-black z-[100]'>
                            {inductryName}
                        </div>
                        <div className='flex flex-wrap flex-col lg:flex-row w-full  justify-between items-center mx-auto'>
                            {/* Card Components */}
                            <PortfolioCard />
                            <PortfolioCard />
                            <PortfolioCard />
                        </div>
                        <div className='mt-10 flex items-center justify-center'>
                            <div className='w-[255px] h-[1px] bg-white Portfolio__SeeMore'>

                            </div>
                            <h1 className='mx-10 font-semibold text-lg text-white Portfolio__Shadow'>
                                See More
                            </h1>
                            <div className='w-[255px] h-[1px] bg-white Portfolio__SeeMore'>

                            </div>
                        </div>
                    </div>
        </>
    )
}
