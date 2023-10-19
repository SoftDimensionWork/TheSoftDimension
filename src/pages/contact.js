import Footer from '@/compnents/Global/Footer'
import Navbar from '@/compnents/Global/Navbar'
import Head from 'next/head'
import React from 'react'

export default function contact() {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon/favicon.png" />
                <title>Soft Dimension || Contact</title>
            </Head>
            <Navbar />
            <Footer />
        </>
    )
}
