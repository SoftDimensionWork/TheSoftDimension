import AboutUsSection from '@/compnents/AboutUs/AboutUsSection'
import BackgroundSVG from '@/compnents/Global/BackgroundSVG'
import Footer from '@/compnents/Global/Footer'
import Navbar from '@/compnents/Global/Navbar'
import React from 'react'

export default function aboutus() {
  return (
    <>
        <BackgroundSVG />
        <Navbar />
        <AboutUsSection />
        <Footer />
    </>
  )
}
