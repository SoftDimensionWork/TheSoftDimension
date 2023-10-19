import React from 'react'

export default function ContactSection() {
    return (
        <>
            <div className='w-full h-auto t-black'>
                <div className='w-full h-auto container mx-auto py-40 pt-20'>
                    <div className='text-[40px] text-center mb-20 text-white'>
                        Contact Us
                    </div>
                    <div className='flex justify-center items-center h-auto w-full px-5'>
                        <div className='w-full md:h-[540px] h-auto bg-white max-w-[1000px] rounded-lg shadow-2xl md:p-20 py-10 px-8'>
                            <div className='w-full md:flex'>
                                <div className='md:w-1/2 w-full md:mr-10'>
                                    <div className='mb-5'>
                                        <div className='text-blue'>
                                            First Name
                                        </div>
                                        <div>
                                            <input type="text" className='w-full h-[48px] border border-blue rounded-md outline-blue px-2' />
                                        </div>
                                    </div>
                                    <div className='mb-5'>
                                        <div className='text-blue'>
                                            Last Name
                                        </div>
                                        <div>
                                            <input type="text" className='w-full h-[48px] border border-blue rounded-md outline-blue px-2' />
                                        </div>
                                    </div>
                                </div>
                                <div className='md:w-1/2 w-full md:ml-5'>
                                    <div className='mb-5'>
                                        <div className='text-blue'>
                                            E-Mail Address
                                        </div>
                                        <div>
                                            <input type="text" className='w-full h-[48px] border border-blue rounded-md outline-blue px-2' />
                                        </div>
                                    </div>
                                    <div className='mb-5'>
                                        <div className='text-blue'>
                                            Budget for your product
                                        </div>
                                        <div>
                                            <input type="text" className='w-full h-[48px] border border-blue rounded-md outline-blue px-2' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='text-blue'>
                                    Your Oponion
                                </div>
                                <textarea name="" id="" className='w-full h-[150px] border border-blue rounded-md outline-blue p-1'></textarea>
                                <div className='w-full flex justify-center'>
                                    <button className='md:w-[146px] w-full h-[42px] bg-blue-01 rounded-full text-white mt-5'>
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