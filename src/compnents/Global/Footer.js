import ButtonLight from "./ButtonLight"
import {
  FaFacebook, FaLinkedin, FaYoutube
} from "react-icons/fa"
import Hyperlink from "./Hyperlink"

export default function Footer() {

  return <>

    <div className='w-full h-auto bg-white'>
      <div className="container w-full h-full mx-auto py-10 lg:flex items-center px-7 2xl:px-0">
        <div className='lg:w-1/2 flex flex-col items-center lg:items-start'>
          <h1 className='text-3xl text-blue mb-5 font-semibold'>Soft Dimension</h1>
          <p className='mb-5 text-lg font-medium'>
            All Rights Reserve @ Soft Dimension
          </p>
          <p className='max-w-[450px] mb-5 text-base text-slate-500 text-center md:text-start'>
            We are here to provide you the best of the best service to you.
            To make full satisfaction our client is the main target of us and we
            always focus on it.</p>
          <div className='flex text-base mb-5'>
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
          <div className='text-base font-semibold'>
            <span className='text-blue'>Email Address : </span> tamzidkabirt@gmail.com
          </div>
        </div>


        <div className='lg:w-1/2 md:h-[200px] h-auto flex xl:justify-end justify-center items-center'>
          <div className='w-auto px-16 md:h-[160px] h-auto mt-10 md:mt-0 bg-blue py-5 md:py-0 flex flex-col justify-center rounded-xl'>
            <div className='sm:text-2xl text-xl text-white'>
              Get Update Before You Sleep
            </div>
            <div className='mt-5 md:flex'>
              <input type="text" className='md:w-[220px] w-full h-[40px] rounded-full outline-none px-5' placeholder='hello@gmail.com' /><br/>
              <button className='bg-white md:w-auto w-full h-[40px] px-4 mt-5 md:mt-0 rounded-full ml-0 md:ml-5 shadow-2xl font-semibold text-blue'>
                Drive In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>

}