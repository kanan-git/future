import React, { useState, useEffect, useRef } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function Cart() {
    const navigate = useNavigate()
    return (
        <section className="cart">
            <h3 className="cart__header"> Your Cart </h3>
            <div className="cart__container">
                <table className="cart__container--table">
                    <tr className="cart__container--table_rows">
                        <td className="cart__container--table_rows-cell"> Product </td>
                        <td className="cart__container--table_rows-cell"> Quantity </td>
                        <td className="cart__container--table_rows-cell"> Subtotal </td>
                        <td className="cart__container--table_rows-cell"></td>
                    </tr>
                    <tr className="cart__container--table_rows">
                        <td className="cart__container--table_rows-cell maincell">
                            <img src="/assets/product/cart_01.png" alt="product_01" className="cart__container--table_rows-cell__image" />
                            <span className="cart__container--table_rows-cell__group">
                                <h4 className="cart__container--table_rows-cell__group--ptitle">
                                    Complete set of sofa, pillows and bed sheets
                                </h4>
                                <strong className="cart__container--table_rows-cell__group--cost"> $ 75.00 </strong>
                            </span>
                        </td>
                        <td className="cart__container--table_rows-cell">
                            <div className="cart__container--table_rows-cell__box">
                                <img src="/assets/icon/circle-plus.svg" className="cart__container--table_rows-cell__box--btn" />
                                <p className="cart__container--table_rows-cell__box--counter"> 1 </p>
                                <img src="/assets/icon/circle-minus.svg" className="cart__container--table_rows-cell__box--btn" />
                            </div>
                        </td>
                        <td className="cart__container--table_rows-cell">
                            <strong className="cart__container--table_rows-cell__price"> $ 75.00 </strong>
                        </td>
                        <td className="cart__container--table_rows-cell">
                            <button className="cart__container--table_rows-cell__trash" style={{border: "none"}}>
                                <img src="/assets/icon/trash.svg" className="cart__container--table_rows-cell__trash--icon" />
                            </button>
                        </td>
                    </tr>
                    <tr className="cart__container--table_rows">
                        <td className="cart__container--table_rows-cell maincell">
                            <img src="/assets/product/cart_02.png" alt="product_02" className="cart__container--table_rows-cell__image" />
                            <span className="cart__container--table_rows-cell__group">
                                <h4 className="cart__container--table_rows-cell__group--ptitle">
                                    Teak wood chair
                                </h4>
                                <strong className="cart__container--table_rows-cell__group--cost"> $ 24.00 </strong>
                            </span>
                        </td>
                        <td className="cart__container--table_rows-cell">
                            <div className="cart__container--table_rows-cell__box">
                                <img src="/assets/icon/circle-plus.svg" className="cart__container--table_rows-cell__box--btn" />
                                <p className="cart__container--table_rows-cell__box--counter"> 1 </p>
                                <img src="/assets/icon/circle-minus.svg" className="cart__container--table_rows-cell__box--btn" />
                            </div>
                        </td>
                        <td className="cart__container--table_rows-cell">
                            <strong className="cart__container--table_rows-cell__price"> $ 24.00 </strong>
                        </td>
                        <td className="cart__container--table_rows-cell">
                            <button className="cart__container--table_rows-cell__trash" style={{border: "none"}}>
                                <img src="/assets/icon/trash.svg" className="cart__container--table_rows-cell__trash--icon" />
                            </button>
                        </td>
                    </tr>
                </table>
                <div className="cart__container--check">
                    <h4 className="cart__container--check_header"> Cart Total </h4>
                    <div className="cart__container--check_block">
                        <i className="cart__container--check_block-text"> Subtotal </i>
                        <strong className="cart__container--check_block-price"> $ 99.00 </strong>
                    </div>
                    <div className="cart__container--check_voucher">
                        <input type="text" className="cart__container--check_voucher-input" placeholder="Your Voucher" />
                        <button className="cart__container--check_voucher-btn"> Apply </button>
                    </div>
                    <div className="cart__container--check_rectangle"></div>
                    <div className="cart__container--check_block">
                        <i className="cart__container--check_block-text"> Total </i>
                        <strong className="cart__container--check_block-price"> $ 99.00 </strong>
                    </div>
                    <button className="cart__container--check_btn" onClick={
                        () => {
                            navigate("/checkout")
                        }
                    }> Checkout Now </button>
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

export default Cart