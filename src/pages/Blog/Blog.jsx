import React, { useState, useEffect, useRef } from 'react'
import './Blog.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function Blog() {
    return (
        <section className="blog">
            <h3 className="blog__header"> Read Our Latest Blog </h3>
            <p className="blog__summary"> We write various things related to furniture, from tips and 
            what things I need to pay attention to when choosing furniture </p>
            <div className="blog__container">
                <div className="blog__container--cards">
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
                <div className="blog__container--cards">
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
                <div className="blog__container--cards">
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
                <div className="blog__container--cards">
                    <img src="/assets/blog/blog_04.png" alt="blog-04" className="blog__container--cards_image" />
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
                <div className="blog__container--cards">
                    <img src="/assets/blog/blog_05.png" alt="blog-05" className="blog__container--cards_image" />
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
                <div className="blog__container--cards">
                    <img src="/assets/blog/blog_06.png" alt="blog-06" className="blog__container--cards_image" />
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
                <div className="blog__container--cards">
                    <img src="/assets/blog/blog_07.png" alt="blog-07" className="blog__container--cards_image" />
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
                <div className="blog__container--cards">
                    <img src="/assets/blog/blog_08.png" alt="blog-08" className="blog__container--cards_image" />
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
                <div className="blog__container--cards">
                    <img src="/assets/blog/blog_09.png" alt="blog-09" className="blog__container--cards_image" />
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
            <div className="blog__pagination">
                <img src="/assets/icon/chevron-left.svg" className="blog__pagination--chevrons" />
                <button className="blog__pagination--button"> 1 </button>
                <button className="blog__pagination--button"> 2 </button>
                <button className="blog__pagination--button"> 3 </button>
                <button className="blog__pagination--button"> ... </button>
                <img src="/assets/icon/chevron-right.svg" className="blog__pagination--chevrons" />
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

export default Blog