import React from 'react'

export default function AboutUSCard({number , title}) {
    return (
        <div className='flex flex-col items-center justify-center md:mb-0 mb-16'>
            <div className='xl:w-[144px] w-[100px] h-[100px] xl:h-[144px] rounded-full flex justify-center items-center border-[10px] border-white'>
                <div className='text-[35px] font-semibold text-white'>
                    {number}+
                </div>
            </div>
            <div className='mt-5 text-xl xl:text-[32px] text-white font-semibold'>
                {title}
            </div>
        </div>
    )
}
