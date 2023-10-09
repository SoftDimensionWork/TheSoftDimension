import ButtonLight from "./ButtonLight"
import {
  FaFacebook, FaLinkedin, FaYoutube
} from "react-icons/fa"
import Hyperlink from "./Hyperlink"

export default function Footer() {

  return <>
  
  <footer className="bg-white">

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
          {/* use formik here */}
          <div className="mt-3 flex">
            <input type="text" className="flex-1 w-full p-1 px-3 rounded-l-full" placeholder="Your Email" />
            <ButtonLight className="rounded-r-full">Subscribe!</ButtonLight>
          </div>
        </div>
        <div className="my-3 flex gap-2">
          <Hyperlink href="https://facebook.com">
            <FaFacebook className="text-blue-600 text-2xl"/>
          </Hyperlink>
          <Hyperlink href="https://linkedin.com">
            <FaLinkedin className="text-blue-700 text-2xl"/>
          </Hyperlink>
          <Hyperlink href="https://youtube.com">
            <FaYoutube className="text-red-600 text-2xl"/>
          </Hyperlink>
        </div>
        <footer></footer>
        <div className="text-gray-500">Copyright © {new Date().getFullYear()} Soft Dimension</div>
      </div>

    </div>

  </footer>
  
  </>

}