import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';


const products = ({ product: { image, name, slug, price } }) => {
  return (

    <section id="Product1" className="section-p1">
      <div>
        {/* <Link href={'/product/${slug.current}'}>
          <div className="product-card">
            <h1>{name}</h1>
            {price}
            <img
              src={urlFor(image && image[0])}
              width={250}
              height={250}
              className="product-image"
            />
          </div>
        </Link> */}
      </div>
      <Link href={`/product/${slug.current}`}>
        {/* <div className="pro-container" /> */}
        <div className='pro'>
          <img src={urlFor(image[0])} alt="" />

          <div className="des">
            <span>PreEatz</span>
            <h5>{name}</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>${price}</h4>
          </div>
          <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
        </div>
      </Link>
    </section >
  )
}

export default products