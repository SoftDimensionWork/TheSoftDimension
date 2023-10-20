import Image from 'next/image'


export default function Testimonial_card({
  image, name, comment, className, children
}) {

  return <>

    <div className={`flex w-full h-full rounded shadow ${className}`}>
      <div className='bg-white p-4 text-center'>
        <div className='w-full h-[190px] flex justify-center'>
          <div className='w-[190px] h-full bg-blue rounded-full overflow-hidden p-2'>
            <img src={`/Images/Testomonial/${image}`} className='w-full rounded-full' alt="" />
          </div>
        </div>
        
        <h3 className="text-2xl text-blue-500 text-blue font-semibold my-2">{name}</h3>
        <p className="text-gray-500 md:px-10 px-5 py-5">
          <span className="text-2xl">"</span>
          {comment}"
        </p>
      </div>
    </div>

  </>
}