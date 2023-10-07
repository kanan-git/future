import React, { useState, useEffect, useRef } from 'react'
import './Shop.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function Shop() {
    const navigate = useNavigate()
    const btnPrev = useRef()
    const btnNext = useRef()
    // const minPrice = useRef()
    // const maxPrice = useRef()

    const arrayOfProducts = [
        "Teak wood chair", // 0
        "Table lamp", // 1
        "Table", // 2
        "Sofa", // 3
        "Clock", // 4
        "Pillow", // 5
        "Lorem", // 6
        "Ipsum", // 7
        "Dolor", // 8
        "Sit", // 9
        "Amet", // 10
        "Elit", // 11
        "Explicabo", // 12
        "Consectetur", // 13
        "Adipisicing", // 14
        "Similique", // 15
        "Abc", // 16
        "Test", // 17
        "Why so serious", // 18
        "So donde esta la biblioteca", // 19
        "Shelf", // 20
        "Door", // 21
        "Window", // 22
        "Laptop" // 23
    ]
    const arrayOfPrices = [
        24, // 0
        100, // 1
        1, // 2
        5, // 3
        999, // 4
        1500, // 5
        50, // 6
        961, // 7
        14, // 8
        62, // 9
        789, // 10
        1100, // 11
        6, // 12
        700, // 13
        1850, // 14
        93, // 15
        44, // 16
        555, // 17
        112, // 18
        7, // 19
        905, // 20
        60, // 21
        22, // 22
        105 // 23
    ]
    const colorId = {
        black: [0,1,2], 
        gray: [3,4,5], 
        orange: [6,7,8], 
        red: [9,10,11], 
        blue: [12,13,14], 
        purple: [15,16,17], 
        white: [18,19,20], 
        green: [21,22,23]
    }
    const productTags = {
        chair: [1,2,3,4,5], 
        lamp: [6,7,11], 
        table: [12,14,15,16,17], 
        sofa: [18,19,22], 
        clock: [13], 
        pillow: [21,23], 
        minimalist: [0,20], 
        new: [8,9,10]
    }

    const [isPaginationAvailable, setIsPaginationAvailable] = useState(true)
    const [testArray, setTestArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23])
    const [products, setProducts] = useState([])
    const [titles, setTitles] = useState(arrayOfProducts)
    const [prices, setPrices] = useState(arrayOfPrices)
    const [totalCount, setTotalCount] = useState(24)
    const [countPerPage, setCountPerPage] = useState(9)
    const [currentPage, setCurrentPage] = useState(1)
    const [isActiveWish, setIsActiveWish] = useState()

    function handleFilterByColor(filterTag) {
        const emptyCFA = []
        if(filterTag == 'black') {
            var filteredArr = colorId.black
        } else if(filterTag == 'gray') {
            var filteredArr = colorId.gray
        } else if(filterTag == 'orange') {
            var filteredArr = colorId.orange
        } else if(filterTag == 'red') {
            var filteredArr = colorId.red
        } else if(filterTag == 'blue') {
            var filteredArr = colorId.blue
        } else if(filterTag == 'purple') {
            var filteredArr = colorId.purple
        } else if(filterTag == 'white') {
            var filteredArr = colorId.white
        } else if(filterTag == 'green') {
            var filteredArr = colorId.green
        } else if(filterTag == 'chair') {
            var filteredArr = productTags.chair
        } else if(filterTag == 'lamp') {
            var filteredArr = productTags.lamp
        } else if(filterTag == 'table') {
            var filteredArr = productTags.table
        } else if(filterTag == 'sofa') {
            var filteredArr = productTags.sofa
        } else if(filterTag == 'clock') {
            var filteredArr = productTags.clock
        } else if(filterTag == 'pillow') {
            var filteredArr = productTags.pillow
        } else if(filterTag == 'minimalist') {
            var filteredArr = productTags.minimalist
        } else if(filterTag == 'new') {
            var filteredArr = productTags.new
        } else {
            console.log("SOMETHING WRONG")
        }
        filteredArr.map(
            (id) => {
                emptyCFA.push(
                    <div className="productcard living_room" id={`p_${id+1}`} key={id+1}>
                        <img src={`/assets/product/product_${id+1}.png`} alt={"product-0" + (id+1)} 
                        className="productcard__image" onClick={() => {
                            navigate("/shop/details")
                            window.scrollTo(0,0)
                        }} />
                        <div className="productcard__group">
                            <button className="productcard__group--btn" id={`Add2wish_${id+1}`} onClick={() => {handleWishlist(id+1)}} onLoad={
                                (e) => {
                                    JSON.parse(localStorage.getItem("wishlist")).map(
                                        (wish) => {
                                            if(id+1 == wish) {
                                                e.currentTarget.style.filter = `invert(1) drop-shadow(0 0 10px #ff0000)`
                                                e.currentTarget.style.backgroundColor = `#000000`
                                            }
                                        }
                                    )
                                }
                            }>
                                <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                            </button>
                            <button className="productcard__group--btn" id={`Add2cart_${id+1}`} onClick={() => {handleCart(id+1)}} onLoad={
                                (e) => {
                                    JSON.parse(localStorage.getItem("cart")).map(
                                        (wish) => {
                                            if(id+1 == wish) {
                                                e.currentTarget.style.filter = `brightness(1.1) drop-shadow(0 0 5px #000000)`
                                            }
                                        }
                                    )
                                }
                            }>
                                <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                            </button>
                        </div>
                        <div className="productcard__info">
                            <div className="productcard__info--category"> Living Room </div>
                            <div className="productcard__info--main">
                                <p className="productcard__info--main_name" id={`title_${id+1}`} onClick={() => {
                                    navigate("/shop/details")
                                    window.scrollTo(0,0)
                                }}>
                                    {arrayOfProducts[id]} {id+1}
                                </p>
                                <strong className="productcard__info--main_price" id={`price_${id+1}`}>
                                    ${arrayOfPrices[id]}
                                </strong>
                            </div>
                        </div>
                    </div>
                )
            }
        )
        setProducts(emptyCFA)
    }

    function filterByPrice(min, max) {
        var arr4res = []
        const selectedPriceItems = []
        const indexA = (currentPage - 1) * countPerPage
        const indexZ = indexA + countPerPage

        var inputMinValue = min // 0
        var inputMaxValue = max // 2000
        var resCount = 0

        if(inputMinValue == "") {
            var inputMinValue = 0
        }
        if(inputMaxValue == "") {
            var inputMaxValue = 2000
        }

        for(var i=0; i<totalCount; i++) {
            if(prices[i] >= inputMinValue && prices[i] <= inputMaxValue) {
                arr4res.push(i)
                resCount++
            }
        }

        if(arr4res.length > 9) {
            let finalArr = arr4res.slice(indexA, indexZ)
            var arr4res = finalArr
        }

        if(resCount == 0) {
            selectedPriceItems.push(
                "No match found."
            )
        } else {
            arr4res.map(
                (id) => {
                    selectedPriceItems.push(
                        <div className="productcard living_room" id={`p_${id+1}`} key={id+1}>
                            <img src={`/assets/product/product_${id+1}.png`} alt={"product-0" + (id+1)} 
                            className="productcard__image" onClick={() => {
                                navigate("/shop/details")
                                window.scrollTo(0,0)
                            }} />
                            <div className="productcard__group">
                                <button className="productcard__group--btn" id={`Add2wish_${id+1}`} onClick={() => {handleWishlist(id+1)}} onLoad={
                                    (e) => {
                                        JSON.parse(localStorage.getItem("wishlist")).map(
                                            (wish) => {
                                                if(id+1 == wish) {
                                                    e.currentTarget.style.filter = `invert(1) drop-shadow(0 0 10px #ff0000)`
                                                    e.currentTarget.style.backgroundColor = `#000000`
                                                }
                                            }
                                        )
                                    }
                                }>
                                    <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                </button>
                                <button className="productcard__group--btn" id={`Add2cart_${id+1}`} onClick={() => {handleCart(id+1)}} onLoad={
                                    (e) => {
                                        JSON.parse(localStorage.getItem("cart")).map(
                                            (wish) => {
                                                if(id+1 == wish) {
                                                    e.currentTarget.style.filter = `brightness(1.1) drop-shadow(0 0 5px #000000)`
                                                }
                                            }
                                        )
                                    }
                                }>
                                    <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                </button>
                            </div>
                            <div className="productcard__info">
                                <div className="productcard__info--category"> Living Room </div>
                                <div className="productcard__info--main">
                                    <p className="productcard__info--main_name" id={`title_${id+1}`} onClick={() => {
                                        navigate("/shop/details")
                                        window.scrollTo(0,0)
                                    }}>
                                        {arrayOfProducts[id]} {id+1}
                                    </p>
                                    <strong className="productcard__info--main_price" id={`price_${id+1}`}>
                                        ${arrayOfPrices[id]}
                                    </strong>
                                </div>
                            </div>
                        </div>
                    )
                }
            )
        }

        setProducts(selectedPriceItems)
    }

    useEffect(
        () => {
            // pagination
            const firstIndex = (currentPage - 1) * countPerPage
            const lastIndex = firstIndex + countPerPage
            const currentElements = testArray.slice(firstIndex, lastIndex)
            const tempArray = []
            currentElements.map(
                (id) => {
                    tempArray.push(
                        <div className="productcard living_room" id={`p_${id+1}`} key={id+1}>
                            <img src={`/assets/product/product_${id+1}.png`} alt={"product-0" + (id+1)} 
                            className="productcard__image" onClick={() => {
                                navigate("/shop/details")
                                window.scrollTo(0,0)
                            }} />
                            <div className="productcard__group">
                                <button className="productcard__group--btn" id={`Add2wish_${id+1}`} onClick={() => {handleWishlist(id+1)}} onLoad={
                                    (e) => {
                                        JSON.parse(localStorage.getItem("wishlist")).map(
                                            (wish) => {
                                                if(id+1 == wish) {
                                                    e.currentTarget.style.filter = `invert(1) drop-shadow(0 0 10px #ff0000)`
                                                    e.currentTarget.style.backgroundColor = `#000000`
                                                }
                                            }
                                        )
                                    }
                                }>
                                    <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                </button>
                                <button className="productcard__group--btn" id={`Add2cart_${id+1}`} onClick={() => {handleCart(id+1)}} onLoad={
                                    (e) => {
                                        JSON.parse(localStorage.getItem("cart")).map(
                                            (wish) => {
                                                if(id+1 == wish) {
                                                    e.currentTarget.style.filter = `brightness(1.1) drop-shadow(0 0 5px #000000)`
                                                }
                                            }
                                        )
                                    }
                                }>
                                    <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                </button>
                            </div>
                            <div className="productcard__info">
                                <div className="productcard__info--category"> Living Room </div>
                                <div className="productcard__info--main">
                                    <p className="productcard__info--main_name" id={`title_${id+1}`} onClick={() => {
                                        navigate("/shop/details")
                                        window.scrollTo(0,0)
                                    }}>
                                        {arrayOfProducts[id]} {id+1}
                                    </p>
                                    <strong className="productcard__info--main_price" id={`price_${id+1}`}>
                                        ${arrayOfPrices[id]}
                                    </strong>
                                </div>
                            </div>
                        </div>
                    )
                }
            )
            setProducts(tempArray)
        }, []
    )

    // function for add/check/remove items (wishlist)
    function handleWishlist(id) {
        var isNew = true
        var currentWishlist = JSON.parse(localStorage.getItem("wishlist"))
        var array4decrease = []
        for(var i=0; i<currentWishlist.length; i++) {
            if(currentWishlist[i] == id) {
                isNew = false
            } else {
                array4decrease.push(currentWishlist[i])
            }
        }
        if(isNew == true) {
            var tempArr4wish = []
            tempArr4wish = currentWishlist
            tempArr4wish.push(id)
            localStorage.setItem("wishlist", JSON.stringify(tempArr4wish))
            document.getElementById(`Add2wish_${id}`).style.filter = `invert(1) drop-shadow(0 0 10px #ff0000)`
            document.getElementById(`Add2wish_${id}`).style.backgroundColor = `#000000`
        } else {
            localStorage.setItem("wishlist", JSON.stringify(array4decrease))
            document.getElementById(`Add2wish_${id}`).style.filter = `invert(0) drop-shadow(0 0 0px #ff0000)`
            document.getElementById(`Add2wish_${id}`).style.backgroundColor = `#000201`
        }
    }

    // function for add/check/remove items (card)
    function handleCart(id) {
        var isNewId = true
        var currentCart = JSON.parse(localStorage.getItem("cart"))
        var arrayForDecrease = []
        for(var j=0; j<currentCart.length; j++) {
            if(currentCart[j] == id) {
                isNewId = false
            } else {
                arrayForDecrease.push(currentCart[j])
            }
        }
        if(isNewId == true) {
            var tempArrayCart = []
            tempArrayCart = currentCart
            tempArrayCart.push(id)
            localStorage.setItem("cart", JSON.stringify(tempArrayCart))
            document.getElementById(`Add2cart_${id}`).style.filter = `brightness(1.1) drop-shadow(0 0 5px #000000)`
        } else {
            localStorage.setItem("cart", JSON.stringify(arrayForDecrease))
            document.getElementById(`Add2cart_${id}`).style.filter = `brightness(1.0) drop-shadow(0 0 0px #000000)`
        }
    }

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
                                className="shop__container--filter_types-price__numbers--input" onChange={() => {
                                    const X = document.getElementById("pricemin").value
                                    const Y = document.getElementById("pricemax").value
                                    filterByPrice(X, Y)
                                }} /> - <input type="number" name="pricemax" id="pricemax" 
                                min="0" max="2000" step="1" placeholder="$2000" className="shop__container--filter_types-price__numbers--input" onChange={() => {
                                    const X = document.getElementById("pricemin").value
                                    const Y = document.getElementById("pricemax").value
                                    filterByPrice(X, Y)
                                }} />
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
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#000201"}} id="color_1" onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                        document.getElementById("color_2").style.border = `none`
                                        document.getElementById("color_3").style.border = `none`
                                        document.getElementById("color_4").style.border = `none`
                                        document.getElementById("color_5").style.border = `none`
                                        document.getElementById("color_6").style.border = `none`
                                        document.getElementById("color_7").style.border = `none`
                                        document.getElementById("color_8").style.border = `none`
                                    }
                                    handleFilterByColor('black')
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#808080"}} id="color_2" onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                        document.getElementById("color_1").style.border = `none`
                                        document.getElementById("color_3").style.border = `none`
                                        document.getElementById("color_4").style.border = `none`
                                        document.getElementById("color_5").style.border = `none`
                                        document.getElementById("color_6").style.border = `none`
                                        document.getElementById("color_7").style.border = `none`
                                        document.getElementById("color_8").style.border = `none`
                                    }
                                    handleFilterByColor('gray')
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#D96D6D"}} id="color_3" onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                        document.getElementById("color_1").style.border = `none`
                                        document.getElementById("color_2").style.border = `none`
                                        document.getElementById("color_4").style.border = `none`
                                        document.getElementById("color_5").style.border = `none`
                                        document.getElementById("color_6").style.border = `none`
                                        document.getElementById("color_7").style.border = `none`
                                        document.getElementById("color_8").style.border = `none`
                                    }
                                    handleFilterByColor('orange')
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#BA4164"}} id="color_4" onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                        document.getElementById("color_1").style.border = `none`
                                        document.getElementById("color_2").style.border = `none`
                                        document.getElementById("color_3").style.border = `none`
                                        document.getElementById("color_5").style.border = `none`
                                        document.getElementById("color_6").style.border = `none`
                                        document.getElementById("color_7").style.border = `none`
                                        document.getElementById("color_8").style.border = `none`
                                    }
                                    handleFilterByColor('red')
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#56A1AD"}} id="color_5" onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                        document.getElementById("color_1").style.border = `none`
                                        document.getElementById("color_2").style.border = `none`
                                        document.getElementById("color_3").style.border = `none`
                                        document.getElementById("color_4").style.border = `none`
                                        document.getElementById("color_6").style.border = `none`
                                        document.getElementById("color_7").style.border = `none`
                                        document.getElementById("color_8").style.border = `none`
                                    }
                                    handleFilterByColor('blue')
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#5848CA"}} id="color_6" onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                        document.getElementById("color_1").style.border = `none`
                                        document.getElementById("color_2").style.border = `none`
                                        document.getElementById("color_3").style.border = `none`
                                        document.getElementById("color_4").style.border = `none`
                                        document.getElementById("color_5").style.border = `none`
                                        document.getElementById("color_7").style.border = `none`
                                        document.getElementById("color_8").style.border = `none`
                                    }
                                    handleFilterByColor('purple')
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#F6F6F6"}} id="color_7" onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                        document.getElementById("color_1").style.border = `none`
                                        document.getElementById("color_2").style.border = `none`
                                        document.getElementById("color_3").style.border = `none`
                                        document.getElementById("color_4").style.border = `none`
                                        document.getElementById("color_5").style.border = `none`
                                        document.getElementById("color_6").style.border = `none`
                                        document.getElementById("color_8").style.border = `none`
                                    }
                                    handleFilterByColor('white')
                                }
                            }></div>
                            <div className="shop__container--filter_types-color__pickcircles" style={{backgroundColor: "#A8BD84"}} id="color_8" onClick={
                                (e) => {
                                    if(e.target.style.border == `4px solid var(--darkslategray)`) {
                                        e.target.style.border = `none`
                                    } else {
                                        e.target.style.border = `4px solid var(--darkslategray)`
                                        document.getElementById("color_1").style.border = `none`
                                        document.getElementById("color_2").style.border = `none`
                                        document.getElementById("color_3").style.border = `none`
                                        document.getElementById("color_4").style.border = `none`
                                        document.getElementById("color_5").style.border = `none`
                                        document.getElementById("color_6").style.border = `none`
                                        document.getElementById("color_7").style.border = `none`
                                    }
                                    handleFilterByColor('green')
                                }
                            }></div>
                        </div>
                    </div>
                    <div className="shop__container--filter_types">
                        Product Categories
                        <div className="shop__container--filter_types-categ">
                            <button className="shop__container--filter_types-categ__list" onClick={() => { handleFilterByColor('chair') }}> Chair (9) </button>
                            <button className="shop__container--filter_types-categ__list" onClick={() => { handleFilterByColor('lamp') }}> Lamp (10) </button>
                            <button className="shop__container--filter_types-categ__list" onClick={() => { handleFilterByColor('table') }}> Table (12) </button>
                            <button className="shop__container--filter_types-categ__list" onClick={() => { handleFilterByColor('sofa') }}> Sofa (6) </button>
                            <button className="shop__container--filter_types-categ__list" onClick={() => { handleFilterByColor('table') }}> Table (12) </button>
                            <button className="shop__container--filter_types-categ__list" onClick={() => { handleFilterByColor('clock') }}> Clock (5) </button>
                            <button className="shop__container--filter_types-categ__list" onClick={() => { handleFilterByColor('pillow') }}> Pillow (3) </button>
                        </div>
                    </div>
                    <div className="shop__container--filter_types">
                        Product Tag
                        <div className="shop__container--filter_types-tags">
                            <button className="shop__container--filter_types-tags__btn" onClick={() => { handleFilterByColor('chair') }}> Chair </button>
                            <button className="shop__container--filter_types-tags__btn" onClick={() => { handleFilterByColor('lamp') }}> Lamp </button>
                            <button className="shop__container--filter_types-tags__btn" onClick={() => { handleFilterByColor('minimalist') }}> Minimalist </button>
                            <button className="shop__container--filter_types-tags__btn" onClick={() => { handleFilterByColor('sofa') }}> Sofa </button>
                            <button className="shop__container--filter_types-tags__btn" onClick={() => { handleFilterByColor('new') }}> New </button>
                            <button className="shop__container--filter_types-tags__btn" onClick={() => { handleFilterByColor('clock') }}> Clock </button>
                            <button className="shop__container--filter_types-tags__btn" onClick={() => { handleFilterByColor('pillow') }}> Pillow </button>
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
                            <button className="shop__container--main_top-search__btn" id="searchBtn" onClick={() => {
                                const inputSearch = document.getElementById("searching").value.toLowerCase()
                                const resultsID = []
                                const searchedElementsArr = []
                                const startIndex = (currentPage - 1) * countPerPage
                                const endIndex = startIndex + countPerPage
                                var resultCounter = 0

                                if(inputSearch == "") {
                                    testArray.map(
                                        (index) => {
                                            resultsID.push(index)
                                        }
                                    )
                                } else {
                                    for(var i=0; i<totalCount; i++) {
                                        var tempTitle = titles[i].toLowerCase().split(" ")
                                        for(var j=0; j<tempTitle.length; j++) {
                                            if(tempTitle[j] == inputSearch) {
                                                resultsID.push(i)
                                                resultCounter++
                                            }
                                        }
                                    }
                                    if(resultCounter == 0) {
                                        searchedElementsArr.push("No match found")
                                    }
                                }

                                if(resultsID.length < 9) {
                                    var currentProducts = resultsID
                                    setIsPaginationAvailable(false)
                                } else {
                                    var currentProducts = resultsID.slice(startIndex, endIndex)
                                    setIsPaginationAvailable(true)
                                }
                                
                                currentProducts.map(
                                    (id) => {
                                        searchedElementsArr.push(
                                            <div className="productcard living_room" id={`p_${id+1}`} key={id+1}>
                                                <img src={`/assets/product/product_${id+1}.png`} alt={"product-0" + (id+1)} 
                                                className="productcard__image" onClick={() => {
                                                    navigate("/shop/details")
                                                    window.scrollTo(0,0)
                                                }} />
                                                <div className="productcard__group">
                                                    <button className="productcard__group--btn" id={`Add2wish_${id+1}`} onClick={() => {handleWishlist(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("wishlist")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `invert(1) drop-shadow(0 0 10px #ff0000)`
                                                                        e.currentTarget.style.backgroundColor = `#000000`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                                    </button>
                                                    <button className="productcard__group--btn" id={`Add2cart_${id+1}`} onClick={() => {handleCart(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("cart")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `brightness(1.1) drop-shadow(0 0 5px #000000)`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                                    </button>
                                                </div>
                                                <div className="productcard__info">
                                                    <div className="productcard__info--category"> Living Room </div>
                                                    <div className="productcard__info--main">
                                                        <p className="productcard__info--main_name" id={`title_${id+1}`} onClick={() => {
                                                            navigate("/shop/details")
                                                            window.scrollTo(0,0)
                                                        }}>
                                                            {titles[id]} {id+1}
                                                        </p>
                                                        <strong className="productcard__info--main_price" id={`price_${id+1}`}>
                                                            ${prices[id]}
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )

                                setProducts(searchedElementsArr)
                            }}> Search </button>
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
                        {products}
                    </div>
                    <div className="shop__container--main_pagination">
                        <img src="/assets/icon/chevron-left.svg" alt="left" id="left" ref={btnPrev} 
                        className="shop__container--main_pagination-btn" onClick={() => {
                            if(currentPage == 3) {
                                document.getElementById("pgBtn_1").style.backgroundColor = `var(--scarlet)`
                                document.getElementById("pgBtn_1").style.color = `var(--default)`
                                document.getElementById("pgBtn_2").style.backgroundColor = `var(--darkslategray)`
                                document.getElementById("pgBtn_2").style.color = `var(--defaultwhite)`
                                document.getElementById("pgBtn_3").style.backgroundColor = `var(--scarlet)`
                                document.getElementById("pgBtn_3").style.color = `var(--default)`
                                var tempArr = [9,10,11,12,13,14,15,16,17]
                                var emptyArr = []
                                emptyArr.push(
                                    tempArr.map(
                                        (id) => 
                                            <div className="productcard living_room" id={`p_${id+1}`} key={id+1}>
                                                <img src={`/assets/product/product_${id+1}.png`} alt={"product-0" + (id+1)} 
                                                className="productcard__image" onClick={() => {
                                                    navigate("/shop/details")
                                                    window.scrollTo(0,0)
                                                }} />
                                                <div className="productcard__group">
                                                <button className="productcard__group--btn" id={`Add2wish_${id+1}`} onClick={() => {handleWishlist(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("wishlist")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `invert(1) drop-shadow(0 0 10px #ff0000)`
                                                                        e.currentTarget.style.backgroundColor = `#000000`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                                    </button>
                                                    <button className="productcard__group--btn" id={`Add2cart_${id+1}`} onClick={() => {handleCart(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("cart")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `brightness(1.1) drop-shadow(0 0 5px #000000)`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                                    </button>
                                                </div>
                                                <div className="productcard__info">
                                                    <div className="productcard__info--category"> Living Room </div>
                                                    <div className="productcard__info--main">
                                                        <p className="productcard__info--main_name" id={`title_${id+1}`} onClick={() => {
                                                            navigate("/shop/details")
                                                            window.scrollTo(0,0)
                                                        }}>
                                                            {arrayOfProducts[id]} {id+1}
                                                        </p>
                                                        <strong className="productcard__info--main_price" id={`price_${id+1}`}>
                                                            ${arrayOfPrices[id]}
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                )
                                setCurrentPage(2)
                                setProducts(emptyArr)
                            } else if(currentPage == 2) {
                                document.getElementById("pgBtn_1").style.backgroundColor = `var(--darkslategray)`
                                document.getElementById("pgBtn_1").style.color = `var(--defaultwhite)`
                                document.getElementById("pgBtn_2").style.backgroundColor = `var(--scarlet)`
                                document.getElementById("pgBtn_2").style.color = `var(--default)`
                                document.getElementById("pgBtn_3").style.backgroundColor = `var(--scarlet)`
                                document.getElementById("pgBtn_3").style.color = `var(--default)`
                                var tempArr = [0,1,2,3,4,5,6,7,8]
                                var emptyArr = []
                                emptyArr.push(
                                    tempArr.map(
                                        (id) => 
                                            <div className="productcard living_room" id={`p_${id+1}`} key={id+1}>
                                                <img src={`/assets/product/product_${id+1}.png`} alt={"product-0" + (id+1)} 
                                                className="productcard__image" onClick={() => {
                                                    navigate("/shop/details")
                                                    window.scrollTo(0,0)
                                                }} />
                                                <div className="productcard__group">
                                                <button className="productcard__group--btn" id={`Add2wish_${id+1}`} onClick={() => {handleWishlist(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("wishlist")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `invert(1) drop-shadow(0 0 10px #ff0000)`
                                                                        e.currentTarget.style.backgroundColor = `#000000`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                                    </button>
                                                    <button className="productcard__group--btn" id={`Add2cart_${id+1}`} onClick={() => {handleCart(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("cart")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `brightness(1.1) drop-shadow(0 0 5px #000000)`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                                    </button>
                                                </div>
                                                <div className="productcard__info">
                                                    <div className="productcard__info--category"> Living Room </div>
                                                    <div className="productcard__info--main">
                                                        <p className="productcard__info--main_name" id={`title_${id+1}`} onClick={() => {
                                                            navigate("/shop/details")
                                                            window.scrollTo(0,0)
                                                        }}>
                                                            {arrayOfProducts[id]} {id+1}
                                                        </p>
                                                        <strong className="productcard__info--main_price" id={`price_${id+1}`}>
                                                            ${arrayOfPrices[id]}
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                )
                                setCurrentPage(1)
                                setProducts(emptyArr)
                            }
                        }} />
                        <button className="shop__container--main_pagination-pg" id="pgBtn_1" onClick={() => {
                            document.getElementById("pgBtn_1").style.backgroundColor = `var(--darkslategray)`
                            document.getElementById("pgBtn_1").style.color = `var(--defaultwhite)`
                            document.getElementById("pgBtn_2").style.backgroundColor = `var(--scarlet)`
                            document.getElementById("pgBtn_2").style.color = `var(--default)`
                            document.getElementById("pgBtn_3").style.backgroundColor = `var(--scarlet)`
                            document.getElementById("pgBtn_3").style.color = `var(--default)`
                            var tempArr = [0,1,2,3,4,5,6,7,8]
                            var emptyArr = []
                            emptyArr.push(
                                tempArr.map(
                                    (id) => 
                                        <div className="productcard living_room" id={`p_${id+1}`} key={id+1}>
                                            <img src={`/assets/product/product_${id+1}.png`} alt={"product-0" + (id+1)} 
                                            className="productcard__image" onClick={() => {
                                                navigate("/shop/details")
                                                window.scrollTo(0,0)
                                            }} />
                                            <div className="productcard__group">
                                            <button className="productcard__group--btn" id={`Add2wish_${id+1}`} onClick={() => {handleWishlist(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("wishlist")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `invert(1) drop-shadow(0 0 10px #ff0000)`
                                                                        e.currentTarget.style.backgroundColor = `#000000`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                                    </button>
                                                    <button className="productcard__group--btn" id={`Add2cart_${id+1}`} onClick={() => {handleCart(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("cart")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `brightness(1.1) drop-shadow(0 0 5px #000000)`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                                    </button>
                                            </div>
                                            <div className="productcard__info">
                                                <div className="productcard__info--category"> Living Room </div>
                                                <div className="productcard__info--main">
                                                    <p className="productcard__info--main_name" id={`title_${id+1}`} onClick={() => {
                                                        navigate("/shop/details")
                                                        window.scrollTo(0,0)
                                                    }}>
                                                        {arrayOfProducts[id]} {id+1}
                                                    </p>
                                                    <strong className="productcard__info--main_price" id={`price_${id+1}`}>
                                                        ${arrayOfPrices[id]}
                                                    </strong>
                                                </div>
                                            </div>
                                        </div>
                                )
                            )
                            setCurrentPage(1)
                            setProducts(emptyArr)
                        }}> 1 </button>
                        <button className="shop__container--main_pagination-pg" id="pgBtn_2" onClick={() => {
                            document.getElementById("pgBtn_1").style.backgroundColor = `var(--scarlet)`
                            document.getElementById("pgBtn_1").style.color = `var(--default)`
                            document.getElementById("pgBtn_2").style.backgroundColor = `var(--darkslategray)`
                            document.getElementById("pgBtn_2").style.color = `var(--defaultwhite)`
                            document.getElementById("pgBtn_3").style.backgroundColor = `var(--scarlet)`
                            document.getElementById("pgBtn_3").style.color = `var(--default)`
                            var tempArr = [9,10,11,12,13,14,15,16,17]
                            var emptyArr = []
                            emptyArr.push(
                                tempArr.map(
                                    (id) => 
                                        <div className="productcard living_room" id={`p_${id+1}`} key={id+1}>
                                            <img src={`/assets/product/product_${id+1}.png`} alt={"product-0" + (id+1)} 
                                            className="productcard__image" onClick={() => {
                                                navigate("/shop/details")
                                                window.scrollTo(0,0)
                                            }} />
                                            <div className="productcard__group">
                                            <button className="productcard__group--btn" id={`Add2wish_${id+1}`} onClick={() => {handleWishlist(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("wishlist")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `invert(1) drop-shadow(0 0 10px #ff0000)`
                                                                        e.currentTarget.style.backgroundColor = `#000000`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                                    </button>
                                                    <button className="productcard__group--btn" id={`Add2cart_${id+1}`} onClick={() => {handleCart(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("cart")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `brightness(1.1) drop-shadow(0 0 5px #000000)`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                                    </button>
                                            </div>
                                            <div className="productcard__info">
                                                <div className="productcard__info--category"> Living Room </div>
                                                <div className="productcard__info--main">
                                                    <p className="productcard__info--main_name" id={`title_${id+1}`} onClick={() => {
                                                        navigate("/shop/details")
                                                        window.scrollTo(0,0)
                                                    }}>
                                                        {arrayOfProducts[id]} {id+1}
                                                    </p>
                                                    <strong className="productcard__info--main_price" id={`price_${id+1}`}>
                                                        ${arrayOfPrices[id]}
                                                    </strong>
                                                </div>
                                            </div>
                                        </div>
                                )
                            )
                            setCurrentPage(2)
                            setProducts(emptyArr)
                        }}> 2 </button>
                        <button className="shop__container--main_pagination-pg" id="pgBtn_3" onClick={() => {
                            document.getElementById("pgBtn_1").style.backgroundColor = `var(--scarlet)`
                            document.getElementById("pgBtn_1").style.color = `var(--default)`
                            document.getElementById("pgBtn_2").style.backgroundColor = `var(--scarlet)`
                            document.getElementById("pgBtn_2").style.color = `var(--default)`
                            document.getElementById("pgBtn_3").style.backgroundColor = `var(--darkslategray)`
                            document.getElementById("pgBtn_3").style.color = `var(--defaultwhite)`
                            var tempArr = [18,19,20,21,22,23]
                            var emptyArr = []
                            emptyArr.push(
                                tempArr.map(
                                    (id) => 
                                        <div className="productcard living_room" id={`p_${id+1}`} key={id+1}>
                                            <img src={`/assets/product/product_${id+1}.png`} alt={"product-0" + (id+1)} 
                                            className="productcard__image" onClick={() => {
                                                navigate("/shop/details")
                                                window.scrollTo(0,0)
                                            }} />
                                            <div className="productcard__group">
                                            <button className="productcard__group--btn" id={`Add2wish_${id+1}`} onClick={() => {handleWishlist(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("wishlist")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `invert(1) drop-shadow(0 0 10px #ff0000)`
                                                                        e.currentTarget.style.backgroundColor = `#000000`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                                    </button>
                                                    <button className="productcard__group--btn" id={`Add2cart_${id+1}`} onClick={() => {handleCart(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("cart")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `brightness(1.1) drop-shadow(0 0 5px #000000)`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                                    </button>
                                            </div>
                                            <div className="productcard__info">
                                                <div className="productcard__info--category"> Living Room </div>
                                                <div className="productcard__info--main">
                                                    <p className="productcard__info--main_name" id={`title_${id+1}`} onClick={() => {
                                                        navigate("/shop/details")
                                                        window.scrollTo(0,0)
                                                    }}>
                                                        {arrayOfProducts[id]} {id+1}
                                                    </p>
                                                    <strong className="productcard__info--main_price" id={`price_${id+1}`}>
                                                        ${arrayOfPrices[id]}
                                                    </strong>
                                                </div>
                                            </div>
                                        </div>
                                )
                            )
                            setCurrentPage(3)
                            setProducts(emptyArr)
                        }}> 3 </button>
                        <button className="shop__container--main_pagination-pg" style={{opacity: '0.5', cursor: 'default'}}> ... </button>
                        <img src="/assets/icon/chevron-right.svg" alt="right" id="right" ref={btnNext} 
                        className="shop__container--main_pagination-btn" onClick={() => {
                            if(currentPage == 1) {
                                document.getElementById("pgBtn_1").style.backgroundColor = `var(--scarlet)`
                                document.getElementById("pgBtn_1").style.color = `var(--default)`
                                document.getElementById("pgBtn_2").style.backgroundColor = `var(--darkslategray)`
                                document.getElementById("pgBtn_2").style.color = `var(--defaultwhite)`
                                document.getElementById("pgBtn_3").style.backgroundColor = `var(--scarlet)`
                                document.getElementById("pgBtn_3").style.color = `var(--default)`
                                var tempArr = [9,10,11,12,13,14,15,16,17]
                                var emptyArr = []
                                emptyArr.push(
                                tempArr.map(
                                    (id) => 
                                        <div className="productcard living_room" id={`p_${id+1}`} key={id+1}>
                                            <img src={`/assets/product/product_${id+1}.png`} alt={"product-0" + (id+1)} 
                                            className="productcard__image" onClick={() => {
                                                navigate("/shop/details")
                                                window.scrollTo(0,0)
                                            }} />
                                            <div className="productcard__group">
                                            <button className="productcard__group--btn" id={`Add2wish_${id+1}`} onClick={() => {handleWishlist(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("wishlist")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `invert(1) drop-shadow(0 0 10px #ff0000)`
                                                                        e.currentTarget.style.backgroundColor = `#000000`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                                    </button>
                                                    <button className="productcard__group--btn" id={`Add2cart_${id+1}`} onClick={() => {handleCart(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("cart")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `brightness(1.1) drop-shadow(0 0 5px #000000)`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                                    </button>
                                            </div>
                                            <div className="productcard__info">
                                                <div className="productcard__info--category"> Living Room </div>
                                                <div className="productcard__info--main">
                                                    <p className="productcard__info--main_name" id={`title_${id+1}`} onClick={() => {
                                                        navigate("/shop/details")
                                                        window.scrollTo(0,0)
                                                    }}>
                                                        {arrayOfProducts[id]} {id+1}
                                                    </p>
                                                    <strong className="productcard__info--main_price" id={`price_${id+1}`}>
                                                        ${arrayOfPrices[id]}
                                                    </strong>
                                                </div>
                                            </div>
                                        </div>
                                )
                            )
                                setCurrentPage(2)
                                setProducts(emptyArr)
                            } else if(currentPage == 2) {
                                document.getElementById("pgBtn_1").style.backgroundColor = `var(--scarlet)`
                                document.getElementById("pgBtn_1").style.color = `var(--default)`
                                document.getElementById("pgBtn_2").style.backgroundColor = `var(--scarlet)`
                                document.getElementById("pgBtn_2").style.color = `var(--default)`
                                document.getElementById("pgBtn_3").style.backgroundColor = `var(--darkslategray)`
                                document.getElementById("pgBtn_3").style.color = `var(--defaultwhite)`
                                var tempArr = [18,19,20,21,22,23]
                                var emptyArr = []
                                emptyArr.push(
                                    tempArr.map(
                                        (id) => 
                                            <div className="productcard living_room" id={`p_${id+1}`} key={id+1}>
                                                <img src={`/assets/product/product_${id+1}.png`} alt={"product-0" + (id+1)} 
                                                className="productcard__image" onClick={() => {
                                                    navigate("/shop/details")
                                                    window.scrollTo(0,0)
                                                }} />
                                                <div className="productcard__group">
                                                <button className="productcard__group--btn" id={`Add2wish_${id+1}`} onClick={() => {handleWishlist(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("wishlist")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `invert(1) drop-shadow(0 0 10px #ff0000)`
                                                                        e.currentTarget.style.backgroundColor = `#000000`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                                                    </button>
                                                    <button className="productcard__group--btn" id={`Add2cart_${id+1}`} onClick={() => {handleCart(id+1)}} onLoad={
                                                        (e) => {
                                                            JSON.parse(localStorage.getItem("cart")).map(
                                                                (wish) => {
                                                                    if(id+1 == wish) {
                                                                        e.currentTarget.style.filter = `brightness(1.1) drop-shadow(0 0 5px #000000)`
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }>
                                                        <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                                                    </button>
                                                </div>
                                                <div className="productcard__info">
                                                    <div className="productcard__info--category"> Living Room </div>
                                                    <div className="productcard__info--main">
                                                        <p className="productcard__info--main_name" id={`title_${id+1}`} onClick={() => {
                                                            navigate("/shop/details")
                                                            window.scrollTo(0,0)
                                                        }}>
                                                            {arrayOfProducts[id]} {id+1}
                                                        </p>
                                                        <strong className="productcard__info--main_price" id={`price_${id+1}`}>
                                                            ${arrayOfPrices[id]}
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                )
                                setCurrentPage(3)
                                setProducts(emptyArr)
                            }
                        }} />
                    </div>
                </main>
            </div>
            <div className="subscribe" style={{width: "100%"}}>
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