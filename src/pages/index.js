import Navbar from '@/compnents/Global/Navbar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='w-screen h-screen bg-blue'>
        <Navbar />
      </div>
    </>
  )
}
