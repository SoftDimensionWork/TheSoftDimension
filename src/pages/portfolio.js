import PortfolioSection from '@/compnents/Portfolio/PortfolioSection'
import React from 'react'

export default function portfolio() {
    return (
        <>
            <div className='Portfolio__Section w-full min-h-screen bg-blue'>
                <div className='w-full h-full'>
                    <div className='w-full h-auto text-white text-4xl text-center mb-14'>
                        Our Projects
                    </div>
                    <PortfolioSection inductryName="Industrial : " />
                    <PortfolioSection inductryName="Food : " />
                    <PortfolioSection inductryName="E-Commerce : " />
                </div>
                <div className='w-full h-auto bg-white'>
                    <div className="container w-full h-full mx-auto py-10 flex items-center">
                        <div className='w-1/2'>
                            <h1 className='text-3xl text-blue mb-5 font-semibold'>Soft Dimension</h1>
                            <p className='mb-5 text-lg font-medium'>
                                All Rights Reserve @ Soft Dimension
                            </p>
                            <p className='max-w-[450px] mb-5 text-lg'>
                                We are here to provide you the best of the best service to you.
                                To make full satisfaction our client is the main target of us and we
                                always focus on it.</p>
                            <div className='flex text-lg mb-5'>
                                <div className='text-blue font-semibold'>
                                    Phone No :
                                </div>
                                <div>
                                    <p>
                                        +88 01883629676
                                    </p>
                                    <p>
                                        +88 01883629676
                                    </p>
                                </div>
                            </div>
                            <div className='text-lg font-semibold'>
                                <span className='text-blue'>Email Address : </span> tamzidkabirt@gmail.com
                            </div>
                        </div>
                        <div className='w-1/2 h-[200px] flex justify-end items-center'>
                            <div className='w-[550px] h-[160px] bg-blue flex flex-col justify-center items-center rounded-xl'>
                                <div className='text-2xl text-white'>
                                    Get Update Before You Sleep
                                </div>
                                <div className='mt-5'>
                                    <input type="text" className='w-[320px] h-[40px] rounded-full outline-none px-5' placeholder='hello@gmail.com'/>
                                    <button className='bg-white h-[40px] px-4 rounded-full ml-5 shadow-2xl font-semibold text-blue'>
                                        Drive In
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
