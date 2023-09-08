import React, { useState, useEffect, useRef } from 'react'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function Homepage() {
    const navigate = useNavigate()
    return (
        <section className="home">
            <div className="home__sectors head">
                <div className="head__container">
                    <p className="head__container--title"> Interior Needs </p>
                    <h4 className="head__container--description"> Various <strong className="head__container--colour">
                        new collecitons
                        <img src="/assets/icon/vector.svg" alt="vector" className="head__container--colour_icon" />
                    </strong> of furniture to decorate the corner of your house. </h4>
                    <button className="head__container--btn" onClick={
                        () => {
                            navigate("/shop")
                        }
                    }> Shop Now </button>
                </div>
                <img src="/assets/homepage/nathan-oakley.png" alt="nathan-oakley" className="head__content" />
                {/* replace with Banner */}
            </div>
            <div className="home__sectors partner">
                <h5 className="partner__title"> Various brands have used our products </h5>
                <span className="partner__container">
                    <img src="/assets/brands/squarespace.svg" alt="squarespace" className="partner__container--logo" />
                    <img src="/assets/brands/docusign.svg" alt="docusign" className="partner__container--logo" />
                    <img src="/assets/brands/braze.svg" alt="braze" className="partner__container--logo" />
                    <img src="/assets/brands/attentive.svg" alt="attentive" className="partner__container--logo" />
                    <img src="/assets/brands/opendoor.svg" alt="opendoor" className="partner__container--logo" />
                    <img src="/assets/brands/square.svg" alt="square" className="partner__container--logo" />
                </span>
            </div>
            <div className="home__sectors highlight">
                <span className="highlight__cards">
                    <div className="highlight__cards--container">
                        <p className="highlight__cards--container_title"> Living Room </p>
                        <h4 className="highlight__cards--container_description"> The best foam padded chair </h4>
                        <button className="highlight__cards--container_button" onClick={
                            () => {
                                navigate("/shop")
                            }
                        }> Shop Now </button>
                    </div>
                    <img src="/assets/homepage/sam-moghadam.png" alt="sam-moghadam" className="highlight__cards--image" style={{alignSelf: "center"}} />
                </span>
                <span className="highlight__cards">
                    <div className="highlight__cards--container">
                        <p className="highlight__cards--container_title"> Living Room </p>
                        <h4 className="highlight__cards--container_description"> Latest model chandelier </h4>
                        <button className="highlight__cards--container_button" onClick={
                            () => {
                                navigate("/shop")
                            }
                        }> Shop Now </button>
                    </div>
                    <img src="/assets/homepage/phil-desforges.png" alt="phil-desforges" className="highlight__cards--image" />
                </span>
            </div>
            <div className="home__sectors newproduct">
                <div className="newproduct__info">
                    <h4 className="newproduct__info--title"> Our Newest Product </h4>
                    <p className="newproduct__info--description"> Made of the best materials and with a design that follows the times </p>
                </div>
                <div className="newproduct__container">
                    <div className="productcard" id="product_01" onClick={
                            () => {
                                navigate("/shop")
                            }
                        }>
                        <img src="/assets/product/product_01.png" alt="product-01" className="productcard__image" />
                        <div className="productcard__tag"> New </div>
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
                    <div className="productcard" id="product_02" onClick={
                            () => {
                                navigate("/shop")
                            }
                        }>
                        <img src="/assets/product/product_02.png" alt="product-02" className="productcard__image" />
                        <div className="productcard__tag"> New </div>
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
                    <div className="productcard" id="product_03" onClick={
                            () => {
                                navigate("/shop")
                            }
                        }>
                        <img src="/assets/product/product_03.png" alt="product-03" className="productcard__image" />
                        <div className="productcard__tag"> New </div>
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
                    <div className="productcard" id="product_04" onClick={
                            () => {
                                navigate("/shop")
                            }
                        }>
                        <img src="/assets/product/product_04.png" alt="product-04" className="productcard__image" />
                        <div className="productcard__tag"> New </div>
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
                    <div className="productcard" id="product_05" onClick={
                            () => {
                                navigate("/shop")
                            }
                        }>
                        <img src="/assets/product/product_05.png" alt="product-05" className="productcard__image" />
                        <div className="productcard__tag"> New </div>
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
                    <div className="productcard" id="product_06" onClick={
                            () => {
                                navigate("/shop")
                            }
                        }>
                        <img src="/assets/product/product_06.png" alt="product-06" className="productcard__image" />
                        <div className="productcard__tag"> New </div>
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
                    <div className="productcard" id="product_07">
                        <img src="/assets/product/product_07.png" alt="product-07" className="productcard__image" />
                        <div className="productcard__tag"> New </div>
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
                    <div className="productcard" id="product_08">
                        <img src="/assets/product/product_08.png" alt="product-08" className="productcard__image" />
                        <div className="productcard__tag"> New </div>
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
                    {/* replace with ProductCard */}
                </div>
                <div className="newproduct__pagination">
                    <div className="newproduct__pagination--dots"></div>
                    <div className="newproduct__pagination--dots"></div>
                    <div className="newproduct__pagination--dots"></div>
                </div>
            </div>
            <div className="home__sectors banner">
                <div className="banner__rectangle"></div>
                <div className="banner__container">
                    <p className="banner__container--title"> Interior Modern </p>
                    <h4 className="banner__container--description"> Arrange your home in such a way with our modern interiors </h4>
                    <button className="banner__container--btn" onClick={
                        () => {
                            navigate("/shop")
                        }
                    }> Shop Now </button>
                </div>
                <img src="/assets/homepage/inside-weather.png" alt="inside-weather" className="banner__content" />
                {/* replace with Banner */}
            </div>
            <div className="home__sectors products">
                <div className="products__selections">
                    <button className="products__selections--btn">
                        New Arrival
                        <img src="/assets/icon/selected.svg" alt="rectangle" className="products__selections--btn_icon" />
                    </button>
                    <button className="products__selections--btn">
                        Top Rated
                        {/* <img src="/assets/icon/selected.svg" alt="rectangle" className="products__selections--btn_icon" /> */}
                    </button>
                    <button className="products__selections--btn">
                        Featured
                        {/* <img src="/assets/icon/selected.svg" alt="rectangle" className="products__selections--btn_icon" /> */}
                    </button>
                </div>
                <div className="products__container">
                    <div className="productcard" id="p_01" onClick={
                        () => {
                            navigate("/shop")
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
                            navigate("/shop")
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
                            navigate("/shop")
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
                            navigate("/shop")
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
                            navigate("/shop")
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
                            navigate("/shop")
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
                            navigate("/shop")
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
                            navigate("/shop")
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
                    {/* replace with ProductCard */}
                </div>
            </div>
            <div className="home__sectors aboutdelivery" style={{marginBottom: "50px"}}>
                <div className="aboutdelivery__container">
                    <h4 className="aboutdelivery__container--header"> We guarantee the safety of your shopping </h4>
                    <div className="aboutdelivery__container--group">
                        <div className="aboutdelivery__container--group_cards">
                            <img src="/assets/icon/rocket.svg" className="aboutdelivery__container--group_cards-image" />
                            <h5 className="aboutdelivery__container--group_cards-title"> Fast Shipping </h5>
                            <p className="aboutdelivery__container--group_cards-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quisquam excepturi, laborum corporis praesentium perspiciatis sapiente.</p>
                        </div>
                        <div className="aboutdelivery__container--group_cards">
                            <img src="/assets/icon/lock.svg" className="aboutdelivery__container--group_cards-image" />
                            <h5 className="aboutdelivery__container--group_cards-title"> Safe Delivery </h5>
                            <p className="aboutdelivery__container--group_cards-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quisquam excepturi, laborum corporis praesentium perspiciatis sapiente.</p>
                        </div>
                        <div className="aboutdelivery__container--group_cards">
                            <img src="/assets/icon/return.svg" className="aboutdelivery__container--group_cards-image" />
                            <h5 className="aboutdelivery__container--group_cards-title"> 365 Days Return </h5>
                            <p className="aboutdelivery__container--group_cards-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quisquam excepturi, laborum corporis praesentium perspiciatis sapiente.</p>
                        </div>
                        <div className="aboutdelivery__container--group_cards">
                            <img src="/assets/icon/support.svg" className="aboutdelivery__container--group_cards-image" />
                            <h5 className="aboutdelivery__container--group_cards-title"> 24 Hours CS </h5>
                            <p className="aboutdelivery__container--group_cards-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quisquam excepturi, laborum corporis praesentium perspiciatis sapiente.</p>
                        </div>
                    </div>
                </div>
                <div className="aboutdelivery__image">
                    <img src="/assets/homepage/delivery-img.png" alt="delivery" className="aboutdelivery__image--content" />
                </div>
            </div>
            <div className="home__sectors blog">
                <div className="blog__info">
                    <h4 className="blog__info--title"> Read Our Latest Blog </h4>
                    <p className="blog__info--description"> We write various things related to furniture, 
                    from tips and what things I need to pay attention to when choosing furniture </p>
                </div>
                <div className="blog__container">
                    <div className="blog__container--cards" onClick={
                        () => {
                            navigate("/blog")
                        }
                    }>
                        <img src="/assets/blog/blog_01.png" alt="blog-01" className="blog__container--cards_image" />
                        <h5 className="blog__container--cards_header"> Why should you choose good wood </h5>
                        <div className="blog__container--cards_details">
                            <span className="blog__container--cards_details-group">
                                <img src="/assets/icon/edit.svg" className="blog__container--cards_details-group__icon" />
                                <p className="blog__container--cards_details-group__creationinfo"> By Admin </p>
                            </span>
                            |
                            <span className="blog__container--cards_details-group">
                                <img src="/assets/icon/calendar.svg" className="blog__container--cards_details-group__icon" />
                                <p className="blog__container--cards_details-group__creationinfo"> August 30, 2023 </p>
                            </span>
                        </div>
                        <p className="blog__container--cards_text">
                            Summary of article. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Accusantium tenetur maxime quo quaerat aliquam deleniti.
                        </p>
                        <button className="blog__container--cards_btn">
                            Read More
                        </button>
                    </div>
                    <div className="blog__container--cards" onClick={
                        () => {
                            navigate("/blog")
                        }
                    }>
                        <img src="/assets/blog/blog_02.png" alt="blog-02" className="blog__container--cards_image" />
                        <h5 className="blog__container--cards_header"> Why should you choose good wood </h5>
                        <div className="blog__container--cards_details">
                            <span className="blog__container--cards_details-group">
                                <img src="/assets/icon/edit.svg" className="blog__container--cards_details-group__icon" />
                                <p className="blog__container--cards_details-group__creationinfo"> By Admin </p>
                            </span>
                            |
                            <span className="blog__container--cards_details-group">
                                <img src="/assets/icon/calendar.svg" className="blog__container--cards_details-group__icon" />
                                <p className="blog__container--cards_details-group__creationinfo"> August 30, 2023 </p>
                            </span>
                        </div>
                        <p className="blog__container--cards_text">
                            Summary of article. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Accusantium tenetur maxime quo quaerat aliquam deleniti.
                        </p>
                        <button className="blog__container--cards_btn">
                            Read More
                        </button>
                    </div>
                    <div className="blog__container--cards" onClick={
                        () => {
                            navigate("/blog")
                        }
                    }>
                        <img src="/assets/blog/blog_03.png" alt="blog-03" className="blog__container--cards_image" />
                        <h5 className="blog__container--cards_header"> Why should you choose good wood </h5>
                        <div className="blog__container--cards_details">
                            <span className="blog__container--cards_details-group">
                                <img src="/assets/icon/edit.svg" className="blog__container--cards_details-group__icon" />
                                <p className="blog__container--cards_details-group__creationinfo"> By Admin </p>
                            </span>
                            |
                            <span className="blog__container--cards_details-group">
                                <img src="/assets/icon/calendar.svg" className="blog__container--cards_details-group__icon" />
                                <p className="blog__container--cards_details-group__creationinfo"> August 30, 2023 </p>
                            </span>
                        </div>
                        <p className="blog__container--cards_text">
                            Summary of article. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Accusantium tenetur maxime quo quaerat aliquam deleniti.
                        </p>
                        <button className="blog__container--cards_btn">
                            Read More
                        </button>
                    </div>
                </div>
                {/* replace with BlogCard */}
            </div>
            <div className="home__sectors subscribe">
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

export default Homepage