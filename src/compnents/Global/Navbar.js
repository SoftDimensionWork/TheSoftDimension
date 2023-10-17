import { useRouter } from "next/router"
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

  var router = useRouter()


  return <>
  
  <header className="w-full t-black">

    <nav className="
      container mx-auto
      flex flex-wrap
      items-center
      justify-between
      w-full
      p-4 md:py-2
    ">

      <div className="w-2/12 ">
        <Navlink href="/" className="font-bold text-4xl text-white">
          <img src="/SVG/HomepageSVG/SoftDimensionLogo.svg" alt="Logo" className="h-10"/>
        </Navlink>
      </div>

      <ButtonLight 
        className="block md:hidden py-2 rounded-full"
      >
        <FaBars/>
      </ButtonLight>

      <div className="hidden w-full h-full md:flex md:items-center md:w-auto flex-1 justify-center">
        <ul className="
          pt-4
          text-slate-200
          md:flex
          md:pt-0"
        >
          <Navlink href="/" className={router.pathname === "/" ? "font-bold" :null}>Home</Navlink>
          <Navlink href="/" className={router.pathname === "/service" ? "font-bold" :null}>Services</Navlink>
          <Navlink href="/portfolio" className={router.pathname === "/portfolio" ? "font-bold" :null}>Portfolio</Navlink>
          <Navlink href="/">About</Navlink>
          <Navlink href="/">Contact</Navlink>
        </ul>
      </div>

      <div className="hidden md:flex py-3 w-2/12 justify-end">
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