import React, { useState, useEffect, useRef } from 'react'
import './BlogArticle.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function BlogArticle() {
    return (
        <section className="article">
            <h3 className="article__header"> Why should you choose good wood </h3>
            <div className="article__block">
                <span className="article__block--group">
                    <img src="/assets/icon/edit.svg" className="article__block--group_icon" />
                    <p className="article__block--group_text"> By Admin </p>
                </span>
                |
                <span className="article__block--group">
                    <img src="/assets/icon/calendar.svg" className="article__block--group_icon" />
                    <p className="article__block--group_text"> December 10, 2022 </p>
                </span>
            </div>
            <p className="article__summary"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever. </p>
            <img src="/assets/blog/cover.png" alt="cover" className="article__cover" />
            <div className="article__container">
                <main className="article__container--main">
                    <h4 className="article__container--main_head"> How to choose the best chair </h4>
                    <article className="article__container--main_textcontent">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula augue elementum 
                        quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo est aliquam, facilisi consequat 
                        ligula vivamus faucibus ac sociis cubilia neque, felis fringilla aenean hac eleifend tellus pellentesque quis 
                        suspendisse. Sociosqu suscipit sodales taciti rutrum condimentum conubia volutpat cubilia mi, velit curabitur 
                        consequat proin neque commodo interdum eleifend dui, ac magna leo ridiculus facilisi duis sapien etiam.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula augue elementum 
                        quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo est aliquam, facilisi consequat 
                        ligula vivamus faucibus ac sociis cubilia neque.
                    </article>
                    <img src="/assets/blog/details.png" alt="details" className="article__container--main_img" />
                    <article className="article__container--main_textcontent">
                        Massa mus mattis natoque ante sapien venenatis nisl, mauris malesuada parturient fringilla dignissim tortor 
                        morbi, imperdiet quam faucibus id nunc cum. Suscipit lectus curae cum in taciti ullamcorper accumsan luctus, 
                        euismod ornare fames aenean ultrices odio ultricies et mus, gravida condimentum senectus hendrerit lobortis 
                        sociis quam. Blandit placerat cras suscipit egestas arcu nam ligula rhoncus, tortor purus proin nulla 
                        faucibus odio molestie semper, venenatis urna mollis libero praesent cum nec.
                    </article>
                    <div className="article__container--main_moreimages">
                        <img src="/assets/product/product_01.png" alt="p1" className="article__container--main_moreimages-content" />
                        <img src="/assets/product/product_02.png" alt="p2" className="article__container--main_moreimages-content" />
                    </div>
                    <div className="article__container--main_tags">
                        Tag:
                        <button className="article__container--main_tags-btn"> Chair </button>
                        <button className="article__container--main_tags-btn"> Lamp </button>
                        <button className="article__container--main_tags-btn"> Minimalist </button>
                    </div>
                    <div className="article__container--main_comment">
                        <h4 className="article__container--main_comment-top"> Leave a Comment </h4>
                        <h5 className="article__container--main_comment-title"> Your Comment </h5>
                        <textarea name="com2blog" id="com2blog" cols="30" rows="10" 
                        className="article__container--main_comment-textbox" placeholder="Write your review here..."></textarea>
                        <div className="article__container--main_comment-inputs">
                            <span className="article__container--main_comment-inputs__grp">
                                Your Name
                                <br />
                                <input type="text" placeholder="Write your name here..." 
                                className="article__container--main_comment-inputs__grp--label" />
                            </span>
                            <span className="article__container--main_comment-inputs__grp">
                                Your Email
                                <br />
                                <input type="email" placeholder="Write your email here..." 
                                className="article__container--main_comment-inputs__grp--label" />
                            </span>
                        </div>
                        <div className="article__container--main_comment-aggree">
                            <input type="checkbox" className="article__container--main_comment-aggree__checkbox" />
                            Save my name, email, and website in this browser for the next time I comment.
                        </div>
                        <button className="article__container--main_comment-submit"> Submit </button>
                    </div>
                </main>
                <aside className="article__container--navigation">
                    <div className="article__container--navigation_search">
                        <input type="search" name="search" id="search" placeholder="Find Something..." 
                        className="article__container--navigation_search-label" />
                        <button className="article__container--navigation_search-btn"> Search </button>
                    </div>
                    <div className="article__container--navigation_post">
                        <h4 className="article__container--navigation_post-header"> Recent Post </h4>
                        <div className="article__container--navigation_post-card">
                            <img src="/assets/blog/recent_01" alt="recent_01" className="article__container--navigation_post-card__img" />
                            <span className="article__container--navigation_post-card__info">
                                <h5 className="article__container--navigation_post-card__info--name"> How to choose a chair at home </h5>
                                <p className="article__container--navigation_post-card__info--date"> December 27, 2021 </p>
                            </span>
                        </div>
                        <div className="article__container--navigation_post-card">
                            <img src="/assets/blog/recent_02" alt="recent_02" className="article__container--navigation_post-card__img" />
                            <span className="article__container--navigation_post-card__info">
                                <h5 className="article__container--navigation_post-card__info--name"> How to choose a chair at home </h5>
                                <p className="article__container--navigation_post-card__info--date"> December 27, 2021 </p>
                            </span>
                        </div>
                        <div className="article__container--navigation_post-card">
                            <img src="/assets/blog/recent_03" alt="recent_03" className="article__container--navigation_post-card__img" />
                            <span className="article__container--navigation_post-card__info">
                                <h5 className="article__container--navigation_post-card__info--name"> How to choose a chair at home </h5>
                                <p className="article__container--navigation_post-card__info--date"> December 27, 2021 </p>
                            </span>
                        </div>
                        <div className="article__container--navigation_post-card">
                            <img src="/assets/blog/recent_04" alt="recent_04" className="article__container--navigation_post-card__img" />
                            <span className="article__container--navigation_post-card__info">
                                <h5 className="article__container--navigation_post-card__info--name"> How to choose a chair at home </h5>
                                <p className="article__container--navigation_post-card__info--date"> December 27, 2021 </p>
                            </span>
                        </div>
                    </div>
                    <div className="article__container--navigation_social">
                        Follow Us
                        <div className="article__container--navigation_social-block">
                            <button className="article__container--navigation_social-block__btn">
                                <img src="/assets/icon/instagram.svg" alt="instagram" className="article__container--navigation_social-block__btn--icon" />
                            </button>
                            <button className="article__container--navigation_social-block__btn">
                                <img src="/assets/icon/facebook.svg" alt="facebook" className="article__container--navigation_social-block__btn--icon" />
                            </button>
                            <button className="article__container--navigation_social-block__btn">
                                <img src="/assets/icon/twitter.svg" alt="twitter" className="article__container--navigation_social-block__btn--icon" />
                            </button>
                            <button className="article__container--navigation_social-block__btn">
                                <img src="/assets/icon/tiktok.svg" alt="tiktok" className="article__container--navigation_social-block__btn--icon" />
                            </button>
                        </div>
                    </div>
                    <div className="article__container--navigation_gallery">
                        Our Gallery
                        <div className="article__container--navigation_gallery-images">
                            <img src="/assets/gallery/gallery_01.png" className="article__container--navigation_gallery-images__content" />
                            <img src="/assets/gallery/gallery_02.png" className="article__container--navigation_gallery-images__content" />
                            <img src="/assets/gallery/gallery_03.png" className="article__container--navigation_gallery-images__content" />
                            <img src="/assets/gallery/gallery_04.png" className="article__container--navigation_gallery-images__content" />
                            <img src="/assets/gallery/gallery_05.png" className="article__container--navigation_gallery-images__content" />
                            <img src="/assets/gallery/gallery_06.png" className="article__container--navigation_gallery-images__content" />
                        </div>
                    </div>
                    <div className="article__container--navigation_tags">
                        Tags
                        <div className="article__container--navigation_tags">
                            <button className="article__container--navigation_tags-btn"> Chair </button>
                            <button className="article__container--navigation_tags-btn"> Lamp </button>
                            <button className="article__container--navigation_tags-btn"> Minimalist </button>
                            <button className="article__container--navigation_tags-btn"> Sofa </button>
                            <button className="article__container--navigation_tags-btn"> New </button>
                            <button className="article__container--navigation_tags-btn"> Clock </button>
                            <button className="article__container--navigation_tags-btn"> Pillow </button>
                        </div>
                    </div>
                </aside>
            </div>

            <div className="blog">
                <div className="blog__info">
                    <h3 className="blog__info--title articleheader"> Other Blogs </h3>
                </div>
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

export default BlogArticle