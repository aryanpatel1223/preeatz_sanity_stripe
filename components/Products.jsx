import React from 'react'
import Link from 'next/Link';

import { urlFor } from '../Lib/client';


const products = ({ product: { image, name, slug, price } }) => {
  return (

    <section id="Product1" class="section-p1">
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
        {/* <div class="pro-container" /> */}
        <div className='pro'>
          <img src={urlFor(image[0])} alt="" />

          <div class="des">
            <span>PreEatz</span>
            <h5>{name}</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>${price}</h4>
          </div>
          <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
        </div>
      </Link>
    </section >
  )
}

export default products