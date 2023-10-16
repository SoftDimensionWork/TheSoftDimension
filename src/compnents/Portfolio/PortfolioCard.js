import React from 'react'

export default function PortfolioCard() {
  return (
    <>
    
      <div className='h-[385px] w-auto flex justify-center mt-10 '>
        <div className='w-full md:w-[395px] max-w-[395px] h-full bg-white rounded overflow-hidden Portfolio__Card'>
          <div className='w-full h-[208px]'>
            <img src="/Images/Portfolio_One.png" className='w-auto h-full object-cover' alt="" />
          </div>

          <div className='w-full h-[177px] p-4'>
            <div className='text-2xl text-blue'>
              House Haven
            </div>
            <div className='text-blue text-sm my-2'>
              A good product description should give all relevant details, convince the buyer of its benefits, and pack an emotional punch.
            </div>
            <div>
              <button className='w-[100px] h-[35px] bg-blue-01 rounded-full text-white Portfolio__Button'>
                Live View
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
