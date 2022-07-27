import React from 'react';
import Head from 'next/head';

import { Footer, Navbar } from './components';


const Layout = ({ children }) => {
  return (
    <div className="Layout">
        <head>
            <title>PreEatz Store</title>
        </head>
        {/* <header>
            <Navbar />
        </header> */}
        <main className="main-container">
           {children}
        </main>
        {/* <footer>
            <Footer />
        </footer> */}
    </div>
  )
}

export default Layout