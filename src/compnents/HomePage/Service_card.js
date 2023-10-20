import Image from 'next/image'
import ButtonLight from '../Global/ButtonLight'


export default function Service_card({
  image, name, href, className, children
}) {

  return <>

    <div className={`rounded overflow-hidden shadow ${className} bg-blue-01 h`}>
      <div className="w-full h-56 bg-slate-50 p-4 flex items-center justify-center">
        <Image
          src={image}
          width={140}
          height={200}
        />
      </div>
      <div className="w-full bg-blue-400 text-center flex flex-col items-center py-4 justify-between h-[120px]">
        <h3 className="text-white text-xl">{name}</h3>
        {children}
        <button className='w-[74px] h-[28px] bg-white text-blue text-[14px] rounded-full mt-7'>
          Details
        </button>
      </div>
    </div>

  </>
}