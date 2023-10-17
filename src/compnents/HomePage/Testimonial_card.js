import Image from 'next/image'


export default function Testimonial_card({
  image, name, comment, className, children
}) {

  return <>

    <div className={`flex w-full rounded shadow ${className}`}>
      <div className='bg-white p-4 text-center'>
        <Image
          src={image}
          width={80}
          height={80}
          className="
            bg-gray-500 mx-auto rounded-full
            border-8 border-blue-500
            my-2
          "
        />
        <h3 className="font-bold text-2xl text-blue-500">{name}</h3>
        <p className="my-4 text-gray-500 md:px-10">
          <span className="text-2xl">"</span>
          {comment}"
        </p>
      </div>
    </div>

  </>
}