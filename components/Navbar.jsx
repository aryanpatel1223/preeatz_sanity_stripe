import React from 'react'
import Link from 'next/link';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';
// import {  AiOutLineShopping } from 'react-icons/ai';

const logo2 = new URL('../assets/img/logo-2.jpg', import.meta.url)

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  
  return (

    <section id="homeNav" className="navParent">
      <Link href="/">
        <img src={logo2} className="logo" alt="" srcset="" />
      </Link>

      <div>
        <ul id="Navbar">
          <Link href='/'>
            <li><a className="active">Home</a></li>
          </Link>
          <Link href='/Shop'>
            <li><a>Shop</a></li>
          </Link>
          <Link href='/ContactUs'>
            <li><a>Contact Us</a></li>
          </Link>
          <Link href='/AboutUs'>
            <li><a>About Us</a></li>
          </Link>
          <Link href='/Membership'>
            <li><a href="">Membership</a></li>
          </Link>
          <Link href='/Cart'>
            <li><a href=""><></><i className="fa-solid fa-cart-shopping"></i></a></li>
          </Link>  
      {/*     <button type="button" className="cart-icon" onClick={() =>
          setShowCart(true)}>
            <AiOutLineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
          {showCart && <Cart />}   */}
        </ul>
      </div>
      <div>
        {showCart && <Cart />}
      </div>

    </section>
  )
}

export default Navbar