import React from 'react'
import './global.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'
import Shop from './pages/Shop/Shop'
import ShopDetails from './pages/ShopDetails/ShopDetails'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Wishlist from './pages/Wishlist/Wishlist'
import Team from './pages/Team/Team'
import Blog from './pages/Blog/Blog'
import BlogArticle from './pages/BlogArticle/BlogArticle'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'

function App() {
  
  window.scrollTo(0, 0)
  // const isMobile = false
  // window.innerWidth >= '1280px' ? isMobile = false : isMobile = true

  return (
    <div className="App">
      <Header />
      
      {/* 01 ShopDetail (description + review parts) | HTML & SCSS + Links */}
      {/* 02 Cart | HTML & SCSS */}
      {/* 03 Checkout | HTML & SCSS */}
      {/* 04 Wishlist | HTML & SCSS */}
      {/* 05 Team | HTML & SCSS */}
      {/* 06 Blog | HTML & SCSS */}
      {/* 07 BlogDetails | HTML & SCSS */}
      {/* 08 Contact | HTML & SCSS */}
      {/* 09 About | HTML & SCSS */}
      {/* 10 Homepage | add Link routes for some buttons, lists, logo, icon also HTTP link for Social Media */}
      {/* 11 Shop | add Link routes for some buttons, lists, logo, icon also HTTP link for Social Media */}

      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/shop/details" element={ <ShopDetails /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/wishlist" element={ <Wishlist /> } />
        <Route path="/team" element={ <Team /> } />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/blog/article" element={ <BlogArticle /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>

      <Footer />
    </div>
  )
}

export default App