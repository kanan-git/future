import React, { useState, useEffect, useRef } from 'react'
import './Checkout.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function Checkout() {
    const navigate = useNavigate()
    return (
        <section className="checkout">
            <h3 className="checkout__header"> Checkout </h3>
            <div className="checkout__container">
                <div className="checkout__container--form">
                    <h4 className="checkout__container--form_head"> Contact Information </h4>
                    <div className="checkout__container--form_inputs">
                        <span className="checkout__container--form_inputs-group">
                            <h5 className="checkout__container--form_inputs-group__h5"> First Name </h5>
                            <input type="text" placeholder=" Your first name here." className="checkout__container--form_inputs-group__input" />
                        </span>
                        <span className="checkout__container--form_inputs-group">
                            <h5 className="checkout__container--form_inputs-group__h5"> Last Name </h5>
                            <input type="text" placeholder=" Your last name here." className="checkout__container--form_inputs-group__input" />
                        </span>
                        <span className="checkout__container--form_inputs-group">
                            <h5 className="checkout__container--form_inputs-group__h5"> Phone </h5>
                            <input type="phone" placeholder=" Your phone here." className="checkout__container--form_inputs-group__input" />
                        </span>
                        <span className="checkout__container--form_inputs-group">
                            <h5 className="checkout__container--form_inputs-group__h5"> Email </h5>
                            <input type="email" placeholder=" Your email here." className="checkout__container--form_inputs-group__input" />
                        </span>
                    </div>
                    <h4 className="checkout__container--form_head"> Shipping Method </h4>
                    <div className="checkout__container--form_block">
                        <button className="checkout__container--form_block-btn">
                            <img src="/assets/icon/store.svg" className="checkout__container--form_block-btn__icon" />
                            Store
                        </button>
                        <button className="checkout__container--form_block-btn">
                            <img src="/assets/icon/delivery.svg" className="checkout__container--form_block-btn__icon" />
                            Delivery
                        </button>
                    </div>
                    <div className="checkout__container--form_address">
                        <h5 className="checkout__container--form_address-head"> Country / Region </h5>
                        <select name="country" id="country" className="checkout__container--form_address-input" style={{marginBottom: "30px"}}>
                            <option value="US"> United States (US) </option>
                            <option value="US"> Azerbaijan </option>
                        </select>
                        <h5 className="checkout__container--form_address-head"> Street address </h5>
                        <textarea name="addressline" id="addressline" cols="30" rows="10" 
                        className="checkout__container--form_address-input" placeholder="Write your full address"></textarea>
                    </div>
                    <h4 className="checkout__container--form_head"> Payment Method </h4>
                    <div className="checkout__container--form_payment">
                        <button className="checkout__container--form_payment-btn">
                            <img src="/assets/icon/visa.svg" className="checkout__container--form_payment-btn__icon" />
                        </button>
                        <button className="checkout__container--form_payment-btn">
                            <img src="/assets/icon/google-pay.svg" className="checkout__container--form_payment-btn__icon" />
                        </button>
                        <button className="checkout__container--form_payment-btn">
                            <img src="/assets/icon/paypal.svg" className="checkout__container--form_payment-btn__icon" />
                        </button>
                    </div>
                </div>
                <div className="checkout__container--orderbox">
                        <h4 className="checkout__container--orderbox_head"> Your Order </h4>
                        <div className="checkout__container--orderbox_block">
                            <i className="checkout__container--orderbox_block-text"> Complete set of sofa... 1x </i>
                            <strong className="checkout__container--orderbox_block-price"> $ 75.00 </strong>
                        </div>
                        <div className="checkout__container--orderbox_block">
                            <i className="checkout__container--orderbox_block-text"> Teak wood chair 1x </i>
                            <strong className="checkout__container--orderbox_block-price"> $ 24.00 </strong>
                        </div>
                        <div className="checkout__container--orderbox_rectangle"></div>
                        <div className="checkout__container--orderbox_block">
                            <i className="checkout__container--orderbox_block-text"> Subtotal </i>
                            <strong className="checkout__container--orderbox_block-price"> $ 99.00 </strong>
                        </div>
                        <div className="checkout__container--orderbox_block">
                            <i className="checkout__container--orderbox_block-text"> Discount (30%) </i>
                            <strong className="checkout__container--orderbox_block-price" style={{color: "#ff0000"}}> - $ 29.70 </strong>
                        </div>
                        <div className="checkout__container--orderbox_rectangle"></div>
                        <div className="checkout__container--orderbox_block">
                            <i className="checkout__container--orderbox_block-text"> Total </i>
                            <strong className="checkout__container--orderbox_block-price"> $ 69.30 </strong>
                        </div>
                        <button className="checkout__container--orderbox_confirmbtn"> Place Order </button>
                </div>
            </div>
            <div className="subscribe">
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

export default Checkout