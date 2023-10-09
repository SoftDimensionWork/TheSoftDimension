import ButtonLight from "./ButtonLight"
import Navlink from "./Navlink"
import {
  FaBars
} from "react-icons/fa"

export default function Navbar() {

  const toggleNavbar = () => {

    console.log("Hello");

  }

  return <>
  
  <header className="">

    <nav className="
      container mx-auto
      flex flex-wrap
      items-center
      justify-between
      w-full
      p-4 md:py-2
    ">

      <div>
        <a href="#" className="font-bold text-xl">
          Soft Dimension
        </a>
      </div>

      <ButtonLight 
        className="block md:hidden py-2 rounded-full"
      >
        <FaBars/>
      </ButtonLight>

      <div className="hidden w-full h-full md:flex md:items-center md:w-auto">
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

      <div className="hidden md:flex py-3">
        <ButtonLight
          className="rounded-full"
        >
          Sign Up
        </ButtonLight>
      </div>

    </nav>

  </header>
  
  </>

}