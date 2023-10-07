import React, { useState, useEffect, useRef } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function Cart() {
    const navigate = useNavigate()

    // const [countss, setCountss] = useState(JSON.parse(localStorage.getItem("cartcounts")))
    const [countss, setCountss] = useState([])

    // localStorage.setItem("cartcounts", JSON.stringify([]))
    localStorage.setItem("cartcounts", JSON.stringify(countss))

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
        const rowsArr = []
        if(JSON.parse(localStorage.getItem("cart")).length > 0) {
            JSON.parse(localStorage.getItem("cart")).map(
                (index, indexOfArray) => {
                    rowsArr.push(
                        <tr className="cart__container--table_rows" key={index} id={`cr_${index}`}>
                            <td className="cart__container--table_rows-cell maincell">
                                <img src="/assets/product/cart_01.png" alt="product_01" className="cart__container--table_rows-cell__image" />
                                <span className="cart__container--table_rows-cell__group">
                                    <h4 className="cart__container--table_rows-cell__group--ptitle">
                                        {titles[index]}
                                    </h4>
                                    <strong className="cart__container--table_rows-cell__group--cost"> $ {prices[index]} </strong>
                                </span>
                            </td>
                            <td className="cart__container--table_rows-cell">
                                <div className="cart__container--table_rows-cell__box">
                                    <img src="/assets/icon/circle-plus.svg" className="cart__container--table_rows-cell__box--btn" onClick={
                                        () => {
                                            var changedArray = []
                                            JSON.parse(localStorage.getItem("cartcounts")).map(
                                                (ii, indexOfNew) => {
                                                    if(indexOfNew == indexOfArray) {
                                                        changedArray.push(ii+1)
                                                    } else {
                                                        changedArray.push(ii)
                                                    }
                                                }
                                            )
                                            // localStorage.setItem("cartcounts", JSON.stringify(changedArray))
                                            setCountss(changedArray)
                                        }
                                    } />
                                    <p className="cart__container--table_rows-cell__box--counter">
                                        {
                                            // onload set default count 1 for each index
                                            JSON.parse(localStorage.getItem("cart")).map(
                                                (element, i) => {
                                                    var newArrFromStorage = JSON.parse(localStorage.getItem("cartcounts"))
                                                    if(newArrFromStorage.length < JSON.parse(localStorage.getItem("cart")).length) {
                                                        if(newArrFromStorage.includes(i) == false) {
                                                            newArrFromStorage.push(1)
                                                        }
                                                        // localStorage.setItem("cartcounts", JSON.stringify(newArrFromStorage))
                                                        setCountss(newArrFromStorage)
                                                    }
                                                }
                                            )
                                        }
                                        {
                                            // return count from localStorage array
                                            countss[indexOfArray]
                                        }
                                    </p>
                                    <img src="/assets/icon/circle-minus.svg" className="cart__container--table_rows-cell__box--btn" onClick={
                                        () => {
                                            var changedArray = []
                                            JSON.parse(localStorage.getItem("cartcounts")).map(
                                                (ii, indexOfNew) => {
                                                    if(indexOfNew == indexOfArray) {
                                                        if(ii-1 > 0) {
                                                            changedArray.push(ii-1)
                                                        }
                                                    } else {
                                                        changedArray.push(ii)
                                                    }
                                                }
                                            )
                                            // localStorage.setItem("cartcounts", JSON.stringify(changedArray))
                                            setCountss(changedArray)
                                        }
                                    } />
                                </div>
                            </td>
                            <td className="cart__container--table_rows-cell">
                                <strong className="cart__container--table_rows-cell__price"> $ {prices[index] * countss[indexOfArray]} </strong>
                            </td>
                            <td className="cart__container--table_rows-cell">
                                <button className="cart__container--table_rows-cell__trash" style={{border: "none"}} onClick={() => {
                                    var changedCart = []
                                    var storedCart = JSON.parse(localStorage.getItem("cart"))
                                    for(var y=0; y<storedCart.length; y++) {
                                        if(storedCart[y] != index) {
                                            changedCart.push(storedCart[y])
                                        }
                                    }
                                    localStorage.setItem("cart", JSON.stringify(changedCart))
                                    window.location.reload()
                                }}>
                                    <img src="/assets/icon/trash.svg" className="cart__container--table_rows-cell__trash--icon" />
                                </button>
                            </td>
                        </tr>
                    )
                }
            )
        } else {
            return <p> YOUR CART IS EMPTY </p>
        }
        return rowsArr
    }

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
                    {/* <tr className="cart__container--table_rows">
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
                    </tr> */}
                    {handleTableRows()}
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