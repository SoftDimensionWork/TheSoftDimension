import ButtonLight from "./ButtonLight"
import {
  FaFacebook, FaLinkedin, FaYoutube
} from "react-icons/fa"
import Hyperlink from "./Hyperlink"

export default function Footer() {

  return <>

    {/* <footer className="bg-white">

      <div className="
      container mx-auto
      md:grid grid-cols-2 lg:grid-cols-3 gap-4
      justify-between
      text-sm
      text-gray-800
      w-full
      p-4
      py-10
    ">

        <div className="col-span-1">
          <div className="text-xl font-bold mb-2">
            <a href="#">
              Soft Dimension
            </a>
          </div>
          <p className="mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quas dicta placeat perferendis facilis excepturi consequatur natus? Odit.
          </p>
          <p>
            <strong>Phone: </strong>
            <span>+88 013 4534 5234</span>
          </p>
          <p>
            <strong>Email: </strong>
            <span>softdimension@gmail.com</span>
          </p>
        </div>

        <div className="hidden lg:block col-span-1"></div>

        <div className="col-span-1">
          <div className="bg-blue-500 rounded-md p-3 py-5 my-4 md:mt-0">
            <div className="text-xl text-white font-bold">Get updates before you die!</div>
            
            <div className="mt-3 flex">
              <input type="text" className="flex-1 w-full p-1 px-3 rounded-l-full" placeholder="Your Email" />
              <ButtonLight className="rounded-r-full">Subscribe!</ButtonLight>
            </div>
          </div>
          <div className="my-3 flex gap-2">
            <Hyperlink href="https://facebook.com">
              <FaFacebook className="text-blue-600 text-2xl" />
            </Hyperlink>
            <Hyperlink href="https://linkedin.com">
              <FaLinkedin className="text-blue-700 text-2xl" />
            </Hyperlink>
            <Hyperlink href="https://youtube.com">
              <FaYoutube className="text-red-600 text-2xl" />
            </Hyperlink>
          </div>
          <footer></footer>
          <div className="text-gray-500">Copyright © {new Date().getFullYear()} Soft Dimension</div>
        </div>

      </div>

    </footer> */}

    <div className='w-full h-auto bg-white'>
      <div className="container w-full h-full mx-auto py-10 lg:flex items-center">
        <div className='lg:w-1/2 flex flex-col items-center lg:items-start'>
          <h1 className='text-3xl text-blue mb-5 font-semibold'>Soft Dimension</h1>
          <p className='mb-5 text-lg font-medium'>
            All Rights Reserve @ Soft Dimension
          </p>
          <p className='max-w-[450px] mb-5 text-lg'>
            We are here to provide you the best of the best service to you.
            To make full satisfaction our client is the main target of us and we
            always focus on it.</p>
          <div className='flex text-lg mb-5'>
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
          <div className='text-lg font-semibold'>
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