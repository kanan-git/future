import React, { useState, useEffect, useRef } from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function Contact() {
    const navigate = useNavigate()
    return (
        <section className="contact">
            <div className="shop__banner">
                <img src="/assets/shop/banner-shop.png" alt="cover" className="shop__banner--image" />
                <div className="shop__banner--container">
                    <p className="shop__banner--container_title"> Best Room Decor Items </p>
                    <h3 className="shop__banner--container_header"> Our goods have the best quality and materials in the world </h3>
                    <button className="shop__banner--container_btn" onClick={
                        () => {
                            navigate("/shop")
                        }
                    }> Shop Now </button>
                    <div className="shop__banner--container_group">
                        <div className="shop__banner--container_group-dots"></div>
                        <div className="shop__banner--container_group-dots"></div>
                        <div className="shop__banner--container_group-dots"></div>
                    </div>
                </div>
            </div>

            <div className="contact__container">
                <div className="contact__container--faq">
                    <h3 className="contact__container--faq_header"> Frequently asked questions </h3>
                    <button className="contact__container--faq_btn">
                        <p className="contact__container--faq_btn-question">
                            How to buy a product?
                        </p>
                        <img src="/assets/icon/plus.svg" 
                        className="contact__container--faq_btn-icon" />
                    </button>
                    <div className="contact__container--faq_answer"></div>
                    <button className="contact__container--faq_btn">
                        <p className="contact__container--faq_btn-question">
                            How can I make refund from your website?
                        </p>
                        <img src="/assets/icon/plus.svg" 
                        className="contact__container--faq_btn-icon" />
                    </button>
                    <div className="contact__container--faq_answer"></div>
                    <button className="contact__container--faq_btn">
                        <p className="contact__container--faq_btn-question" style={{color: "var(--darkslategray)"}}>
                            How to buy a product?
                        </p>
                        <img src="/assets/icon/minus.svg" 
                        className="contact__container--faq_btn-icon" />
                    </button>
                    <div className="contact__container--faq_answer">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Id a enim, consectetur cursus. At mattis nulla in pretium. 
                        Condimentum sagittis mauris augue maecenas fusce commodo 
                        neque purus et. Integer eu amet at pretium id ultrices 
                        faucibus. In vestibulum pretium, potenti molestie.
                    </div>
                    <button className="contact__container--faq_btn">
                        <p className="contact__container--faq_btn-question">
                            Why can’t I select next day delivery?
                        </p>
                        <img src="/assets/icon/plus.svg" 
                        className="contact__container--faq_btn-icon" />
                    </button>
                    <div className="contact__container--faq_answer"></div>
                </div>
                <div className="contact__container--contactus">
                    <h3 className="contact__container--contactus_header"> Contact Us </h3>
                    <div className="contact__container--contactus_group1">
                        <span className="contact__container--contactus_group1-labels">
                            Your Name
                            <input type="text" 
                            className="contact__container--contactus_group1-labels__input" 
                            placeholder="Write your name here..." />
                        </span>
                        <span className="contact__container--contactus_group1-labels">
                            Your Email
                            <input type="email" 
                            className="contact__container--contactus_group1-labels__input" 
                            placeholder="Write your email here..." />
                        </span>
                    </div>
                    <div className="contact__container--contactus_group2">
                        Your Message
                        <textarea name="message" id="message" cols="30" rows="10" 
                        className="contact__container--contactus_group2-message" 
                        placeholder="Write your review here..."></textarea>
                    </div>
                    <button className="contact__container--contactus_send"> Send </button>
                </div>
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

export default Contact