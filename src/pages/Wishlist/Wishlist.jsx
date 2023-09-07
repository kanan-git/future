import React, { useState, useEffect, useRef } from 'react'
import './Wishlist.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function Wishlist() {
    return (
        <section className="wishlist">
            <h3 className="wishlist__header"> Wishlist </h3>
            <table className="wishlist__table">
                <tr className="wishlist__table--row">
                    <td className="wishlist__table--row_cell"></td>
                    <td className="wishlist__table--row_cell"> Product </td>
                    <td className="wishlist__table--row_cell"> Subtotal </td>
                    <td className="wishlist__table--row_cell"> Stock </td>
                    <td className="wishlist__table--row_cell"> Action </td>
                </tr>
                <tr className="wishlist__table--row">
                    <td className="wishlist__table--row_cell">
                        <button className="wishlist__table--row_cell-btn">
                            <img src="/assets/icon/trash.svg" className="wishlist__table--row_cell-btn__icon" />
                        </button>
                    </td>
                    <td className="wishlist__table--row_cell productcell">
                        <img src="/assets/product/cart_01.png" alt="fav_1" className="wishlist__table--row_cell-image" />
                        <div className="wishlist__table--row_cell-container">
                            <h4 className="wishlist__table--row_cell-container__prodtitle"> Complete set of sofa, pillows and bed sheets </h4>
                            <strong className="wishlist__table--row_cell-container__cost"> $ 75.00 </strong>
                        </div>
                    </td>
                    <td className="wishlist__table--row_cell"> $ 75.00 </td>
                    <td className="wishlist__table--row_cell" style={{color: 'var(--darkslategray)'}}> In Stock </td>
                    <td className="wishlist__table--row_cell">
                        <button className="wishlist__table--row_cell-add2cart"> Add to Cart </button>
                    </td>
                </tr>
                <tr className="wishlist__table--row">
                    <td className="wishlist__table--row_cell">
                        <button className="wishlist__table--row_cell-btn">
                            <img src="/assets/icon/trash.svg" className="wishlist__table--row_cell-btn__icon" />
                        </button>
                    </td>
                    <td className="wishlist__table--row_cell productcell">
                        <img src="/assets/product/cart_02.png" alt="fav_2" className="wishlist__table--row_cell-image" />
                        <div className="wishlist__table--row_cell-container">
                            <h4 className="wishlist__table--row_cell-container__prodtitle"> Teak wood chair </h4>
                            <strong className="wishlist__table--row_cell-container__cost"> $ 24.00 </strong>
                        </div>
                    </td>
                    <td className="wishlist__table--row_cell"> $ 24.00 </td>
                    <td className="wishlist__table--row_cell" style={{color: '#ff0000'}}> Out Stock </td>
                    <td className="wishlist__table--row_cell">
                        <button className="wishlist__table--row_cell-add2cart inactive"> Add to Cart </button>
                    </td>
                </tr>
            </table>
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

export default Wishlist