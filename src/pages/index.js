import BackgroundSVG from '@/compnents/Global/BackgroundSVG'
import Navbar from '@/compnents/Global/Navbar'
import HomeSection from '@/compnents/HomePage/HomeSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.png" />
        <title>Soft Dimension || Home</title>
      </Head>
      <BackgroundSVG />
      <Navbar />
      <HomeSection />
    </>
  )
}
