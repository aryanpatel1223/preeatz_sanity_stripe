import React from 'react'
import {
  Navbar,
  Herowelcome,
  Products,
  Newsletter,
  Footer,
} from '../components/components'
import Head from 'next/head'
import { client } from '../Lib/client';
import products from '../components/Products';


export const beef = new URL('../assets/img/Beef.jpg', import.meta.url)

const home = ({ products, bannerData }) => {
  return (
    <>
      <Head>
        <title>PreEatz</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        <link rel="stylesheet" href="../style/style.css" />
      </Head>

      <main>
        <section>
          <Navbar />
        </section>
        <Herowelcome />
        <div>
          <h2>Best Seller</h2>
          <p>These are our best selling products</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {products?.map((product) => <Products key={product._id} product={product} />)}
        </div>

        {/* /> */}
        <div style={{ width: '100%' }}>
          <Newsletter />

        </div>
        <Footer class="section-p1" />
      </main>
    </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}


export default home
