import React, { useState, useEffect, useRef } from 'react'
import './Wishlist.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function Wishlist() {
    const navigate = useNavigate()

    function handleTableRows() {
        const titles = [
            "-", // -
            "Teak wood chair", // 1
            "Table lamp", // 2
            "Table", // 3
            "Sofa", // 4
            "Clock", // 5
            "Pillow", // 6
            "Lorem", // 7
            "Ipsum", // 8
            "Dolor", // 9
            "Sit", // 10
            "Amet", // 11
            "Elit", // 12
            "Explicabo", // 13
            "Consectetur", // 14
            "Adipisicing", // 15
            "Similique", // 16
            "Abc", // 17
            "Test", // 18
            "Why so serious", // 19
            "So donde esta la biblioteca", // 20
            "Shelf", // 21
            "Door", // 22
            "Window", // 23
            "Laptop" // 24
        ]
        const prices = [
            0, // -
            24, // 1
            100, // 2
            1, // 3
            5, // 4
            999, // 5
            1500, // 6
            50, // 7
            961, // 8
            14, // 9
            62, // 10
            789, // 11
            1100, // 12
            6, // 13
            700, // 14
            1850, // 15
            93, // 16
            44, // 17
            555, // 18
            112, // 19
            7, // 20
            905, // 21
            60, // 22
            22, // 23
            105 // 24
        ]
        const stock = [
            "-", // -
            "Out Stock", // 1
            "In Stock", // 2
            "In Stock", // 3
            "In Stock", // 4
            "In Stock", // 5
            "In Stock", // 6
            "In Stock", // 7
            "In Stock", // 8
            "In Stock", // 9
            "In Stock", // 10
            "In Stock", // 11
            "In Stock", // 12
            "Out Stock", // 13
            "Out Stock", // 14
            "Out Stock", // 15
            "Out Stock", // 16
            "In Stock", // 17
            "Out Stock", // 18
            "Out Stock", // 19
            "Out Stock", // 20
            "Out Stock", // 21
            "Out Stock", // 22
            "In Stock", // 23
            "Out Stock" // 24
        ]
        const rowsArr = []
        if(JSON.parse(localStorage.getItem("wishlist")).length > 0) {
            JSON.parse(localStorage.getItem("wishlist")).map(
                (index) => {
                    rowsArr.push(
                        <tr className="wishlist__table--row" key={index} id={`wr_${index}`}>
                            <td className="wishlist__table--row_cell">
                                <button className="wishlist__table--row_cell-btn" onClick={() => {
                                    var changedWishlist = []
                                    var storedWishlist = JSON.parse(localStorage.getItem("wishlist"))
                                    for(var y=0; y<storedWishlist.length; y++) {
                                        if(storedWishlist[y] != index) {
                                            changedWishlist.push(storedWishlist[y])
                                        }
                                    }
                                    localStorage.setItem("wishlist", JSON.stringify(changedWishlist))
                                    window.location.reload()
                                }}>
                                    <img src="/assets/icon/trash.svg" className="wishlist__table--row_cell-btn__icon" />
                                </button>
                            </td>
                            <td className="wishlist__table--row_cell productcell">
                                <img src={`/assets/product/product_${index}.png`} alt="fav_1" className="wishlist__table--row_cell-image" />
                                <div className="wishlist__table--row_cell-container">
                                    <h4 className="wishlist__table--row_cell-container__prodtitle"> {titles[index]} </h4>
                                    <strong className="wishlist__table--row_cell-container__cost"> $ {prices[index]} </strong>
                                </div>
                            </td>
                            <td className="wishlist__table--row_cell"> $ 75.00 </td>
                            <td className="wishlist__table--row_cell" style={{color: stock[index] == 'In Stock' ? 'var(--darkslategray)' : '#ff0000'}}> {stock[index]} </td>
                            <td className="wishlist__table--row_cell">
                                <button className="wishlist__table--row_cell-add2cart"> Add to Cart </button>
                            </td>
                        </tr>
                    )
                }
            )
        } else {
            return <p> YOUR WISHLIST IS EMPTY </p>
        }
        return rowsArr
    }
    
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
                {/* <tr className="wishlist__table--row">
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
                </tr> */}
                {handleTableRows()}
            </table>
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

export default Wishlist