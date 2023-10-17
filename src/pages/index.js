import BackgroundSVG from '@/compnents/Global/BackgroundSVG'
import Navbar from '@/compnents/Global/Navbar'
import Homepage from '@/compnents/HomePage/Homepage'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <BackgroundSVG />
      <Navbar />
      <Homepage />
    </>
  )
}
