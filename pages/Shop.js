import React from 'react'
import Head from 'next/head'
import { Navbar } from '../components/components'

const Shop = () => {
  return (
    <>
        <Head>
            <title>
                ShopEatz
            </title>
        </Head>
        <main>
            <Navbar />
            <h1>Are you hungry?</h1>
        </main>
    </>
  )
  
}

export default Shop