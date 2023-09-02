import React from 'react'
import './global.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'

function App() {
  // const isMobile = false
  // window.scrollTo(0, 0)
  // window.innerWidth >= '1280px' ? isMobile = false : isMobile = true

  return (
    <div className="App">
      <Header />

      <Homepage />

      {/* 01 Homepage scss */}
      {/* 02 Shop html */}
      {/* 03 Shop scss */}
      {/* 04 ShopDetail & review part html */}
      {/* 05 ShopDetail & review part scss */}
      {/* 06 Cart html */}
      {/* 07 Cart scss */}
      {/* 08 Checkout html */}
      {/* 09 Checkout scss */}
      {/* 10 Whishlist html */}
      {/* 11 Whishlist scss */}
      {/* 12 Blog html */}
      {/* 13 Blog scss */}
      {/* 14 BlogDetails html */}
      {/* 15 BlogDetails scss */}
      {/* 16 Contact html */}
      {/* 17 Contact scss */}
      {/* 18 About html */}
      {/* 19 About scss */}
      {/* 20 overall routing & unique links */}
      {/* 21 responsivity and mobile version */}
      {/* 22 footer image hover overlay icon + header search button */}

      <Footer />
    </div>
  )
}

export default App