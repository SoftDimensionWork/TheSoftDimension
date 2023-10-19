import AboutUsSection from '@/compnents/AboutUs/AboutUsSection'
import BackgroundSVG from '@/compnents/Global/BackgroundSVG'
import Footer from '@/compnents/Global/Footer'
import Navbar from '@/compnents/Global/Navbar'
import Head from 'next/head'
import React from 'react'

export default function aboutus() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.png" />
        <title>Soft Dimension || About</title>
      </Head>
      <BackgroundSVG />
      <Navbar />
      <AboutUsSection />
      <Footer />
    </>
  )
}
