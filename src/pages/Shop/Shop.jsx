import React, { useState, useEffect, useRef } from 'react'
import './Shop.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function Shop() {
    const navigate = useNavigate()
    return (
        <section className="shop">
            <div className="shop__banner">
                <img src="/assets/shop/banner-shop.png" alt="cover" className="shop__banner--image" />
                <div className="shop__banner--container">
                    <p className="shop__banner--container_title"> Best Room Decor Items </p>
                    <h3 className="shop__banner--container_header"> Our goods have the best quality and materials in the world </h3>
                    <button className="shop__banner--container_btn"> Shop Now </button>
                    <div className="shop__banner--container_group">
                        <div className="shop__banner--container_group-dots"></div>
                        <div className="shop__banner--container_group-dots"></div>
                        <div className="shop__banner--container_group-dots"></div>
                    </div>
                </div>
            </div>
            
            <div className="shop__container">
                <aside className="shop__container--filter">
                    <div className="shop__container--filter_types">
                        Filter By Price
                        <div className="shop__container--filter_types-price">
                            <div className="shop__container--filter_types-price__numbers">
                                <input type="number" name="pricemin" id="pricemin" min="0" max="2000" step="1" placeholder="$0" 
                                className="shop__container--filter_types-price__numbers--input" /> - <input type="number" name="pricemax" id="pricemax" 
                                min="0" max="2000" step="1" placeholder="$2000" className="shop__container--filter_types-price__numbers--input" />
                            </div>
                            <div className="shop__container--filter_types-price__slider">
                                <div className="shop__container--filter_types-price__slider--bar" id="price_bar">
                                    <div className="shop__container--filter_types-price__slider--bar_rectangle" id="price_rectangle"></div>
                                    <div className="shop__container--filter_types-price__slider--bar_point" id="price_left"></div>
                                    <div className="shop__container--filter_types-price__slider--bar_point" id="price_right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shop__container--filter_types">
                        Filter By Color
                        <div className="shop__container--filter_types-color">
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#000201"}} onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                    }
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#808080"}} onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                    }
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#D96D6D"}} onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                    }
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#BA4164"}} onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                    }
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#56A1AD"}} onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                    }
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#5848CA"}} onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                    }
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#F6F6F6"}} onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                    }
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#A8BD84"}} onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                    }
                                }
                            }></div>
                        </div>
                    </div>
                    <div className="shop__container--filter_types">
                        Product Categories
                        <div className="shop__container--filter_types-categ">
                            <button className="shop__container--filter_types-categ__list"> Chair (9) </button>
                            <button className="shop__container--filter_types-categ__list"> Lamp (10) </button>
                            <button className="shop__container--filter_types-categ__list"> Table (12) </button>
                            <button className="shop__container--filter_types-categ__list"> Sofa (6) </button>
                            <button className="shop__container--filter_types-categ__list"> Table (12) </button>
                            <button className="shop__container--filter_types-categ__list"> Clock (5) </button>
                            <button className="shop__container--filter_types-categ__list"> Pillow (3) </button>
                        </div>
                    </div>
                    <div className="shop__container--filter_types">
                        Product Tag
                        <div className="shop__container--filter_types-tags">
                            <button className="shop__container--filter_types-tags__btn"> Chair </button>
                            <button className="shop__container--filter_types-tags__btn"> Lamp </button>
                            <button className="shop__container--filter_types-tags__btn"> Minimalist </button>
                            <button className="shop__container--filter_types-tags__btn"> Sofa </button>
                            <button className="shop__container--filter_types-tags__btn"> New </button>
                            <button className="shop__container--filter_types-tags__btn"> Clock </button>
                            <button className="shop__container--filter_types-tags__btn"> Pillow </button>
                        </div>
                    </div>
                    <div className="shop__container--filter_discount">
                        <img src="/assets/shop/discount.png" alt="discount" className="shop__container--filter_discount-img" />
                        <div className="shop__container--filter_discount-info">
                            Make a purchase now and get 50% discount
                            <button className="shop__container--filter_discount-info__btn"> Buy Now </button>
                        </div>
                    </div>
                </aside>
                <main className="shop__container--main">
                    <div className="shop__container--main_top">
                        <span className="shop__container--main_top-search">
                            <input type="search" name="searching" id="searching" className="shop__container--main_top-search__input" placeholder="Find Products..." />
                            <button className="shop__container--main_top-search__btn"> Search </button>
                        </span>
                        <span className="shop__container--main_top-sort" 
                        onMouseEnter={() => {document.getElementById("sort_dopdown").style.display = `flex`}} 
                        onMouseLeave={() => {document.getElementById("sort_dopdown").style.display = `none`}}>
                            Sort By
                            <img src="/assets/icon/chevron-down.svg" className="shop__container--main_top-sort__icon" />
                            <ul className="shop__container--main_top-sort__dopdown" id="sort_dopdown">
                                <li className="shop__container--main_top-sort__dopdown--list"> Featured </li>
                                <li className="shop__container--main_top-sort__dopdown--list"> Newest </li>
                                <li className="shop__container--main_top-sort__dopdown--list"> Price High-Low </li>
                                <li className="shop__container--main_top-sort__dopdown--list"> Price Low-High </li>
                            </ul>
                        </span>
                    </div>
                    <div className="shop__container--main_cards">
                        <div className="productcard" id="p_01" onClick={
                        () => {
                            navigate("/shop/details")
                            window.scrollTo(0,0)
                        }
                    }>
                            <img src="/assets/product/product_01.png" alt="product-01" className="productcard__image" />
                            <div className="productcard__group">
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                </button>
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                </button>
                            </div>
                            <div className="productcard__info">
                                <div className="productcard__info--category"> Living Room </div>
                                <div className="productcard__info--main">
                                    <p className="productcard__info--main_name"> Teak wood chair </p>
                                    <strong className="productcard__info--main_price"> $24 </strong>
                                </div>
                            </div>
                        </div>
                        <div className="productcard" id="p_02" onClick={
                        () => {
                            navigate("/shop/details")
                            window.scrollTo(0,0)
                        }
                    }>
                            <img src="/assets/product/product_02.png" alt="product-02" className="productcard__image" />
                            <div className="productcard__group">
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                </button>
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                </button>
                            </div>
                            <div className="productcard__info">
                                <div className="productcard__info--category"> Living Room </div>
                                <div className="productcard__info--main">
                                    <p className="productcard__info--main_name"> Teak wood chair </p>
                                    <strong className="productcard__info--main_price"> $24 </strong>
                                </div>
                            </div>
                        </div>
                        <div className="productcard" id="p_03" onClick={
                        () => {
                            navigate("/shop/details")
                            window.scrollTo(0,0)
                        }
                    }>
                            <img src="/assets/product/product_03.png" alt="product-03" className="productcard__image" />
                            <div className="productcard__group">
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                </button>
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                </button>
                            </div>
                            <div className="productcard__info">
                                <div className="productcard__info--category"> Living Room </div>
                                <div className="productcard__info--main">
                                    <p className="productcard__info--main_name"> Teak wood chair </p>
                                    <strong className="productcard__info--main_price"> $24 </strong>
                                </div>
                            </div>
                        </div>
                        <div className="productcard" id="p_04" onClick={
                        () => {
                            navigate("/shop/details")
                            window.scrollTo(0,0)
                        }
                    }>
                            <img src="/assets/product/product_04.png" alt="product-04" className="productcard__image" />
                            <div className="productcard__group">
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                </button>
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                </button>
                            </div>
                            <div className="productcard__info">
                                <div className="productcard__info--category"> Living Room </div>
                                <div className="productcard__info--main">
                                    <p className="productcard__info--main_name"> Teak wood chair </p>
                                    <strong className="productcard__info--main_price"> $24 </strong>
                                </div>
                            </div>
                        </div>
                        <div className="productcard" id="p_05" onClick={
                        () => {
                            navigate("/shop/details")
                            window.scrollTo(0,0)
                        }
                    }>
                            <img src="/assets/product/product_05.png" alt="product-05" className="productcard__image" />
                            <div className="productcard__group">
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                </button>
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                </button>
                            </div>
                            <div className="productcard__info">
                                <div className="productcard__info--category"> Living Room </div>
                                <div className="productcard__info--main">
                                    <p className="productcard__info--main_name"> Teak wood chair </p>
                                    <strong className="productcard__info--main_price"> $24 </strong>
                                </div>
                            </div>
                        </div>
                        <div className="productcard" id="p_06" onClick={
                        () => {
                            navigate("/shop/details")
                            window.scrollTo(0,0)
                        }
                    }>
                            <img src="/assets/product/product_06.png" alt="product-06" className="productcard__image" />
                            <div className="productcard__group">
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                </button>
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                </button>
                            </div>
                            <div className="productcard__info">
                                <div className="productcard__info--category"> Living Room </div>
                                <div className="productcard__info--main">
                                    <p className="productcard__info--main_name"> Teak wood chair </p>
                                    <strong className="productcard__info--main_price"> $24 </strong>
                                </div>
                            </div>
                        </div>
                        <div className="productcard" id="p_07" onClick={
                        () => {
                            navigate("/shop/details")
                            window.scrollTo(0,0)
                        }
                    }>
                            <img src="/assets/product/product_07.png" alt="product-07" className="productcard__image" />
                            <div className="productcard__group">
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                </button>
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                </button>
                            </div>
                            <div className="productcard__info">
                                <div className="productcard__info--category"> Living Room </div>
                                <div className="productcard__info--main">
                                    <p className="productcard__info--main_name"> Teak wood chair </p>
                                    <strong className="productcard__info--main_price"> $24 </strong>
                                </div>
                            </div>
                        </div>
                        <div className="productcard" id="p_08" onClick={
                        () => {
                            navigate("/shop/details")
                            window.scrollTo(0,0)
                        }
                    }>
                            <img src="/assets/product/product_08.png" alt="product-08" className="productcard__image" />
                            <div className="productcard__group">
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                </button>
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                </button>
                            </div>
                            <div className="productcard__info">
                                <div className="productcard__info--category"> Living Room </div>
                                <div className="productcard__info--main">
                                    <p className="productcard__info--main_name"> Teak wood chair </p>
                                    <strong className="productcard__info--main_price"> $24 </strong>
                                </div>
                            </div>
                        </div>
                        <div className="productcard" id="p_09" onClick={
                        () => {
                            navigate("/shop/details")
                            window.scrollTo(0,0)
                        }
                    }>
                            <img src="/assets/product/product_01.png" alt="product-09" className="productcard__image" />
                            <div className="productcard__group">
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                </button>
                                <button className="productcard__group--btn">
                                    <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                </button>
                            </div>
                            <div className="productcard__info">
                                <div className="productcard__info--category"> Living Room </div>
                                <div className="productcard__info--main">
                                    <p className="productcard__info--main_name"> Teak wood chair </p>
                                    <strong className="productcard__info--main_price"> $24 </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shop__container--main_pagination">
                        <img src="/assets/icon/chevron-left.svg" alt="left" id="left" className="shop__container--main_pagination-btn" />
                        <button className="shop__container--main_pagination-pg"> 1 </button>
                        <button className="shop__container--main_pagination-pg"> 2 </button>
                        <button className="shop__container--main_pagination-pg"> 3 </button>
                        <button className="shop__container--main_pagination-pg"> ... </button>
                        <img src="/assets/icon/chevron-right.svg" alt="right" id="right" className="shop__container--main_pagination-btn" />
                    </div>
                </main>
            </div>

            <div className="subscribe" style={{width: "110%"}}>
                <div className="subscribe__rectangle"></div>
                <div className="subscribe__container">
                    <h4 className="subscribe__container--header"> Subscribe now and get 10% off all items </h4>
                    <p className="subscribe__container--description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ducimus odio ratione sequi harum officia corporis sunt vero rerum fuga, facere totam cum. </p>
                    <span className="subscribe__container--group">
                        <input type="email" name="subscribe" id="subscribe" className="subscribe__container--group_input" placeholder="Your email here." />
                        <button className="subscribe__container--group_btn"> Subscribe </button>
                    </span>
                </div>
                <img src="/assets/homepage/subscribe.png" alt="subscribe" className="subscribe__image" />
                {/* replace with Subscribe */}
            </div>
        </section>
    )
}

export default Shop