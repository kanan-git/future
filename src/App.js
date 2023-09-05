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

      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/shop/details" element={ <ShopDetails /> } />          {/* ShopDetail (description + review parts) | HTML & SCSS */}
        <Route path="/cart" element={ <Cart /> } />          {/* Cart | HTML & SCSS */}
        <Route path="/checkout" element={ <Checkout /> } />          {/* Checkout | HTML & SCSS */}
        <Route path="/wishlist" element={ <Wishlist /> } />          {/* Wishlist | HTML & SCSS */}
        <Route path="/team" element={ <Team /> } />          {/* Team | HTML & SCSS */}
        <Route path="/blog" element={ <Blog /> } />          {/* Blog | HTML & SCSS */}
        <Route path="/blog/article" element={ <BlogArticle /> } />          {/* BlogDetails | HTML & SCSS */}
        <Route path="/contact" element={ <Contact /> } />          {/* Contact | HTML & SCSS */}
        <Route path="/about" element={ <About /> } />          {/* About | HTML & SCSS */}
      </Routes>

      <Footer />
    </div>
  )
}

export default App