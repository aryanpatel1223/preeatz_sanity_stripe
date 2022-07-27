import React from 'react'
import Head from 'next/head'
import { AiOutlineMinus, AiOutLinePLus, AiFillStar, AioutlineStar, AiOutlinePlus} from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';
import { useState } from 'react';
import { Navbar } from '../../components/components';


const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;  
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();


  return (
    <>
    <Head>
      <title> {name} </title>
    </Head>
    <div>
      <div className="product-detail-container">

        <Navbar />
        <div>
          <div className="image-container">
            <img src={urlFor(image && image [0])} style={{ width: '10%'}} />
            {/* {name} {price}
            {details} */}
          </div>
          {/* <div className="small-images-container">
            {image?.map((item, i) => ( 
              <img 
                src={urlFor(item)}
                className=""
                onMouseEnter=""
              />
            ))}
          </div> */}
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>
              (35)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quanity">
            <h3>Quantity:</h3>
            <p className="quanity-desc">
              <span className="minus" onClick={decQty}>< AiOutlineMinus /></span>
              <span className="num" onClick="">{qty}</span>
              <span className="plus" onClick={incQty}>< AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick="">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type== "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(products);

  return {
    props: { products, product }
  }
}

export default ProductDetails