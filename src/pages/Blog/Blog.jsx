import React, { useState, useEffect, useRef } from 'react'
import './Blog.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function Blog() {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1)
    const [blogArticles, setBlogArticles] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    return (
        <section className="blog">
            <h3 className="blog__header"> Read Our Latest Blog </h3>
            <p className="blog__summary"> We write various things related to furniture, from tips and 
            what things I need to pay attention to when choosing furniture </p>
            <div className="blog__container">
                {
                    blogArticles.map(
                        (i) => 
                            <div className="blog__container--cards" id={`blog_${i}`} key={i} onClick={() => {navigate("/blog/article")}}>
                                <img src={`/assets/blog/blog_${i}.png`} alt="blog-01" className="blog__container--cards_image" />
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
                                    Accusantium tenetur maxime quo quaerat aliquam deleniti. Article № {i}
                                </p>
                                <button className="blog__container--cards_btn">
                                    Read More
                                </button>
                            </div>
                    )
                }
            </div>
            <div className="blog__pagination">
                <img src="/assets/icon/chevron-left.svg" className="blog__pagination--chevrons" id="btnPrev" onClick={(e) => {
                    if(currentPage == 3) {
                        setCurrentPage(currentPage-1)
                        setBlogArticles([10, 11, 12, 13, 14, 15, 16, 17, 18])
                        document.getElementById("btnBlogPg_1").style.backgroundColor = `var(--scarlet)`
                        document.getElementById("btnBlogPg_1").style.color = `#000000`
                        document.getElementById("btnBlogPg_2").style.backgroundColor = `var(--darkslategray)`
                        document.getElementById("btnBlogPg_2").style.color = `var(--defaultwhite)`
                        document.getElementById("btnBlogPg_3").style.backgroundColor = `var(--scarlet)`
                        document.getElementById("btnBlogPg_3").style.color = `#000000`
                    } else if(currentPage == 2) {
                        setCurrentPage(currentPage-1)
                        setBlogArticles([1, 2, 3, 4, 5, 6, 7, 8, 9])
                        document.getElementById("btnBlogPg_1").style.backgroundColor = `var(--darkslategray)`
                        document.getElementById("btnBlogPg_1").style.color = `var(--defaultwhite)`
                        document.getElementById("btnBlogPg_2").style.backgroundColor = `var(--scarlet)`
                        document.getElementById("btnBlogPg_2").style.color = `#000000`
                        document.getElementById("btnBlogPg_3").style.backgroundColor = `var(--scarlet)`
                        document.getElementById("btnBlogPg_3").style.color = `#000000`
                        e.target.style.opacity = `0.5`
                        document.getElementById("btnNext").style.opacity = `1.0`
                    } else {
                        // do nothing
                    }
                }} />
                <button className="blog__pagination--button" id="btnBlogPg_1" onClick={(e) => {
                    e.target.style.backgroundColor = `var(--darkslategray)`
                    e.target.style.color = `var(--defaultwhite)`
                    setBlogArticles([1, 2, 3, 4, 5, 6, 7, 8, 9])
                    setCurrentPage(1)
                    document.getElementById("btnBlogPg_2").style.backgroundColor = `var(--scarlet)`
                    document.getElementById("btnBlogPg_2").style.color = `#000000`
                    document.getElementById("btnBlogPg_3").style.backgroundColor = `var(--scarlet)`
                    document.getElementById("btnBlogPg_3").style.color = `#000000`
                    document.getElementById("btnPrev").style.opacity = `0.5`
                    document.getElementById("btnNext").style.opacity = `1.0`
                }}> 1 </button>
                <button className="blog__pagination--button" id="btnBlogPg_2" onClick={(e) => {
                    e.target.style.backgroundColor = `var(--darkslategray)`
                    e.target.style.color = `var(--defaultwhite)`
                    setBlogArticles([10, 11, 12, 13, 14, 15, 16, 17, 18])
                    setCurrentPage(2)
                    document.getElementById("btnBlogPg_1").style.backgroundColor = `var(--scarlet)`
                    document.getElementById("btnBlogPg_1").style.color = `#000000`
                    document.getElementById("btnBlogPg_3").style.backgroundColor = `var(--scarlet)`
                    document.getElementById("btnBlogPg_3").style.color = `#000000`
                    document.getElementById("btnPrev").style.opacity = `1.0`
                    document.getElementById("btnNext").style.opacity = `1.0`
                }}> 2 </button>
                <button className="blog__pagination--button" id="btnBlogPg_3" onClick={(e) => {
                    e.target.style.backgroundColor = `var(--darkslategray)`
                    e.target.style.color = `var(--defaultwhite)`
                    setBlogArticles([19, 20, 21, 22, 23, 24, 25, 26, 27])
                    setCurrentPage(3)
                    document.getElementById("btnBlogPg_1").style.backgroundColor = `var(--scarlet)`
                    document.getElementById("btnBlogPg_1").style.color = `#000000`
                    document.getElementById("btnBlogPg_2").style.backgroundColor = `var(--scarlet)`
                    document.getElementById("btnBlogPg_2").style.color = `#000000`
                    document.getElementById("btnPrev").style.opacity = `1.0`
                    document.getElementById("btnNext").style.opacity = `0.5`
                }}> 3 </button>
                <button className="blog__pagination--button" style={
                    {
                        cursor: "default",
                        opacity: "0.5"
                    }
                }> ... </button>
                <img src="/assets/icon/chevron-right.svg" className="blog__pagination--chevrons" id="btnNext" onClick={(e) => {
                    if(currentPage == 1) {
                        setCurrentPage(currentPage+1)
                        setBlogArticles([10, 11, 12, 13, 14, 15, 16, 17, 18])
                        document.getElementById("btnBlogPg_1").style.backgroundColor = `var(--scarlet)`
                        document.getElementById("btnBlogPg_1").style.color = `#000000`
                        document.getElementById("btnBlogPg_2").style.backgroundColor = `var(--darkslategray)`
                        document.getElementById("btnBlogPg_2").style.color = `var(--defaultwhite)`
                        document.getElementById("btnBlogPg_3").style.backgroundColor = `var(--scarlet)`
                        document.getElementById("btnBlogPg_3").style.color = `#000000`
                    } else if(currentPage == 2) {
                        setCurrentPage(currentPage+1)
                        setBlogArticles([19, 20, 21, 22, 23, 24, 25, 26, 27])
                        document.getElementById("btnBlogPg_1").style.backgroundColor = `var(--scarlet)`
                        document.getElementById("btnBlogPg_1").style.color = `#000000`
                        document.getElementById("btnBlogPg_2").style.backgroundColor = `var(--scarlet)`
                        document.getElementById("btnBlogPg_2").style.color = `#000000`
                        document.getElementById("btnBlogPg_3").style.backgroundColor = `var(--darkslategray)`
                        document.getElementById("btnBlogPg_3").style.color = `var(--defaultwhite)`
                        e.target.style.opacity = `0.5`
                        document.getElementById("btnPrev").style.opacity = `1.0`
                    } else {
                        // do nothing
                    }
                }} />
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

export default Blog