import Image from 'next/image'
import ButtonLight from "../ButtonLight"

export default function Service_card({
  image, name, href, className, children
}) {

  return <>

    <div className={`rounded overflow-hidden shadow ${className}`}>
      <div className="w-full h-48 bg-slate-200 p-4 flex items-center justify-center">
        <Image
          src={image}
          width={120}
          height={120}
        />
      </div>
      <div className="w-full bg-blue-400 p-4 text-center">
        <h3 className="font-bold text-2xl">{name}</h3>
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