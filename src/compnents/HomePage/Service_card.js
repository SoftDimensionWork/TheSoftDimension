import Image from 'next/image'
import ButtonLight from '../Global/ButtonLight'


export default function Service_card({
  image, name, href, className, children
}) {

  return <>

    <div className={`rounded overflow-hidden shadow ${className} bg-blue-01`}>
      <div className="w-full h-56 bg-slate-50 p-4 flex items-center justify-center">
        <Image
          src={image}
          width={140}
          height={200}
        />
      </div>
      <div className="w-full bg-blue-400 p-4 text-center">
        <h3 className="font-bold text-white text-2xl">{name}</h3>
        {children}
        <ButtonLight
          className="rounded-full my-4 px-5"
          href={href}
        >
          Read More
        </ButtonLight>
      </div>
    </div>

  </>
}