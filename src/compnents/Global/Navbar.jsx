import ButtonLight from "./ButtonLight"
import Navlink from "./Navlink"
import {
  FaBars
} from "react-icons/fa"

import {
  PiDropboxLogoBold
} from "react-icons/pi"

export default function Navbar() {

  const toggleNavbar = () => {

    console.log("Hello");

  }

  return <>
  
  <header className="bg-white">

    <nav className="
      container mx-auto
      flex flex-wrap
      items-center
      justify-between
      w-full
      p-4 md:py-2
    ">

      <div className="w-2/12 bg-slate-700">
        <a href="#" className="font-bold text-xl text-white">
          <PiDropboxLogoBold />
        </a>
      </div>

      <ButtonLight 
        className="block md:hidden py-2 rounded-full"
      >
        <FaBars/>
      </ButtonLight>

      <div className="hidden w-full h-full md:flex md:items-center md:w-auto bg-red-500 flex-1 justify-center">
        <ul className="
          pt-4
          text-slate-200
          md:flex
          md:pt-0"
        >
          <Navlink href="/" active={true}>Home</Navlink>
          <Navlink href="/">Services</Navlink>
          <Navlink href="/">Portfolio</Navlink>
          <Navlink href="/">About</Navlink>
          <Navlink href="/">Contact</Navlink>
        </ul>
      </div>

      <div className="hidden md:flex py-3 w-2/12 justify-end bg-cyan-950">
        <ButtonLight
          className="rounded-full"
        >
          Log In
        </ButtonLight>
      </div>

    </nav>

  </header>
  
  </>

}