import React from 'react'

export default function QuoteSection() {
    return (
        <>
            <div className='w-full h-auto t-black'>
                <div className='w-full h-auto container mx-auto py-40 pt-20'>
                    <div className='text-[40px] text-center mb-20 text-white'>
                        Tell Us About Your Project
                    </div>
                    <div className='flex justify-center items-center h-auto w-full px-5'>
                        <div className='w-full h-auto bg-lite-white max-w-[1000px] rounded-lg shadow-2xl md:p-20 py-10 px-8'>
                            <div className='w-full flex'>
                                <div className='w-1/2'>
                                    <div className='mb-5'>
                                        <div className='text-white'>
                                            Full Name
                                        </div>
                                        <div>
                                            <input type="text" className='w-full h-[48px] border border-blue rounded-md outline-blue px-2' />
                                        </div>
                                    </div>
                                    <div className='mb-5'>
                                        <div className='text-white'>
                                            Email Address
                                        </div>
                                        <div>
                                            <input type="text" className='w-full h-[48px] border border-blue rounded-md outline-blue px-2' />
                                        </div>
                                    </div>
                                    <div className='mb-5'>
                                        <div className='text-white'>
                                            Maximum Time For The Project
                                        </div>
                                        <div>
                                            <input type="text" className='w-full h-[48px] border border-blue rounded-md outline-blue px-2' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/2 ml-0 md:ml-10'>
                                    <div className='mb-5 flex-1'>
                                        <div className='text-white'>
                                            E-Mail Address
                                        </div>
                                        <div>
                                            <input type="text" className='w-full h-[48px] border border-blue rounded-md outline-blue px-2' />
                                        </div>
                                    </div>
                                    <div className='mb-5 flex-1 ml-0'>
                                        <div className='text-white'>
                                            Budget for your product
                                        </div>
                                        <div>
                                            <input type="text" className='w-full h-[48px] border border-blue rounded-md outline-blue px-2' />
                                        </div>
                                    </div>
                                    <div className='mb-5'>
                                        <div className='text-white'>
                                            First Name
                                        </div>
                                        <div>
                                            <input type="text" className='w-full h-[48px] border border-blue rounded-md outline-blue px-2' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='mb-5 flex-1 ml-0'>
                                    <div className='text-white'>
                                        Budget for your product
                                    </div>
                                    <div>
                                        <input type="text" className='w-full h-[48px] border border-blue rounded-md outline-blue px-2' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='text-white'>
                                    Your Oponion
                                </div>
                                <textarea name="" id="" className='w-full h-[150px] border border-blue rounded-md outline-blue p-1'></textarea>
                                <div className='w-full flex justify-center'>
                                    <button className='md:w-[146px] w-full h-[42px] bg-white text-blue-01 rounded-full mt-5'>
                                        Submit
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
