import { useRouter } from "next/router"
import ButtonLight from "./ButtonLight"
import Navlink from "./Navlink"
import {
  FaBars
} from "react-icons/fa"

import {
  PiDropboxLogoBold
} from "react-icons/pi"
import { useState } from "react"
import { RxCross2 } from 'react-icons/rx';


export default function Navbar() {

  const [SideNavbar, setSideNavbar] = useState(false)

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
            <img src="/SVG/HomepageSVG/SoftDimensionLogo.svg" alt="Logo" className="h-10" />
          </Navlink>
        </div>

        <button
          className="block md:hidden p-3 rounded-full bg-white text-slate-500"
          onClick={() => { setSideNavbar(true) }}
        >
          <FaBars />
        </button>

        <div className="hidden w-full h-full md:flex md:items-center md:w-auto flex-1 justify-center">
          <ul className="
          pt-4
          text-slate-200
          md:flex
          md:pt-0"
          >
            <Navlink href="/" className={router.pathname === "/" ? "font-bold" : null}>Home</Navlink>
            <Navlink href="/services" className={router.pathname === "/service" ? "font-bold" : null}>Quote</Navlink>
            <Navlink href="/portfolio" className={router.pathname === "/portfolio" ? "font-bold" : null}>Portfolio</Navlink>
            <Navlink href="/aboutus" className={router.pathname === "/aboutus" ? "font-bold" : null}>About</Navlink>
            <Navlink href="/contact" className={router.pathname === "/contact" ? "font-bold" : null}>Contact</Navlink>
          </ul>
        </div>

        <div className={`w-full h-screen SideNavbar fixed top-0 md:hidden duration-500 z-50 ${SideNavbar === true ? "left-0" : "left-[-900px]"}`} onClick={() => { setSideNavbar(false) }}>
          <div className="h-full w-[90%] SideNavbar flex flex-col justify-center items-center">
            <div><Navlink href="/" className={`mb-10 ${router.pathname === "/" ? "font-bold" : null}`}>Home</Navlink></div>
            <div><Navlink href="/services" className={`mb-10 ${router.pathname === "/service" ? "font-bold" : null}`}>Quote</Navlink></div>
            <div><Navlink href="/portfolio" className={`mb-10 ${router.pathname === "/portfolio" ? "font-bold" : null}`}>Portfolio</Navlink></div>
            <div><Navlink href="/aboutus" className={`mb-10 ${router.pathname === "/aboutus" ? "font-bold" : null}`}>About</Navlink></div>
            <div><Navlink href="/contact" className={`mb-10 ${router.pathname === "/contact" ? "font-bold" : null}`}>Contact</Navlink></div>
            <div className="w-[35px] text-xl text-white h-[35px] rounded-full flex justify-center items-center bg-rose-500 absolute right-3 top-3" onClick={() => { setSideNavbar(false) }}>
              <RxCross2 />
            </div>
          </div>

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