import React, { useState, useEffect, useRef } from 'react'
import './ShopDetails.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function ShopDetails() {
    return (
        <section className="details">
            <div className="details__sector">
                <div className="details__sector--image">
                    <img src="/assets/shop/sofa.png" alt="product" className="details__sector--image_content" />
                </div>
                <div className="details__sector--info">
                    <h3 className="details__sector--info_title"> Complete set of sofa, pillows and bed sheet </h3>
                    <div className="details__sector--info_rating">
                        <span className="details__sector--info_rating-stars">
                            <img src="/assets/icon/star-full.svg" className="details__sector--info_rating-stars__icon" />
                            <img src="/assets/icon/star-full.svg" className="details__sector--info_rating-stars__icon" />
                            <img src="/assets/icon/star-full.svg" className="details__sector--info_rating-stars__icon" />
                            <img src="/assets/icon/star-full.svg" className="details__sector--info_rating-stars__icon" />
                            <img src="/assets/icon/star-full.svg" className="details__sector--info_rating-stars__icon" />
                        </span>
                        (1 review)
                    </div>
                    <strong className="details__sector--info_price"> $ 75.00 </strong>
                    <ul className="details__sector--info_price-list">
                        <li className="details__sector--info_list-line"> <i>Stock:</i> 18 </li>
                        <li className="details__sector--info_list-line"> <i>SKU:</i> BA65 </li>
                        <li className="details__sector--info_list-line"> <i>Categories:</i> Chair, New Arrivals, Special </li>
                        <li className="details__sector--info_list-line"> <i>Tags:</i> Black, Chair </li>
                    </ul>
                    <div className="details__sector--info_description">
                        In order to sit comfortably for long periods, people need freedom of movement. The Form rocking chair has a molded 
                        plastic shell with a wide, curved seat, which gives plenty of opportunity for changing one’s sitting position.
                    </div>
                    <div className="details__sector--info_buttons">
                        <span className="details__sector--info_buttons-quantity">
                            <img src="/assets/icon/circle-plus.svg" className="details__sector--info_buttons-quantity__btn" />
                            <p className="details__sector--info_buttons-quantity__counter"> 1 </p>
                            <img src="/assets/icon/circle-minus.svg" className="details__sector--info_buttons-quantity__btn" />
                        </span>
                        <button className="details__sector--info_buttons-cart"> Add to Cart </button>
                        <button className="details__sector--info_buttons-fav">
                            <img src="/assets/icon/fav.svg" className="details__sector--info_buttons-fav__btn" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="details__sector">
                <div className="details__sector--information">
                    <div className="details__sector--information_selections">
                        <button className="details__sector--information_selections-btn">
                            Description
                            <img src="/assets/icon/selected.svg" className="details__sector--information_selections-btn__rectangle" />
                        </button>
                        <button className="details__sector--information_selections-btn">
                            Review
                            {/* <img src="/assets/icon/selected.svg" className="details__sector--information_selections-btn__rectangle" /> */}
                        </button>
                    </div>
                    {/* <p className="details__sector--information_paragraph">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries,
                    </p>
                    <p className="details__sector--information_paragraph">
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum
                    </p> */}
                    <div className="details__sector--information_review">
                        <div className="details__sector--information_review-card">
                            <img src="/assets/users/user_comment.png" alt="user" className="details__sector--information_review-card__profile" />
                            <div className="details__sector--information_review-card__text">
                                <span>
                                    <p> Ralph Edwards </p>
                                    <i> 2 minutes ago </i>
                                </span>
                                <div>
                                    <img src="/assets/icon/star-full.svg" />
                                    <img src="/assets/icon/star-full.svg" />
                                    <img src="/assets/icon/star-full.svg" />
                                    <img src="/assets/icon/star-full.svg" />
                                    <img src="/assets/icon/star-full.svg" />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa 
                                    tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.
                                </p>
                            </div>
                        </div>
                        <div className="details__sector--information_review-card">
                            <img src="/assets/users/user_comment.png" alt="user" className="details__sector--information_review-card__profile" />
                            <div className="details__sector--information_review-card__text">
                                <span>
                                    <p> Ralph Edwards </p>
                                    <i> 2 minutes ago </i>
                                </span>
                                <div>
                                    <img src="/assets/icon/star-full.svg" />
                                    <img src="/assets/icon/star-full.svg" />
                                    <img src="/assets/icon/star-full.svg" />
                                    <img src="/assets/icon/star-full.svg" />
                                    <img src="/assets/icon/star-full.svg" />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa 
                                    tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.
                                </p>
                            </div>
                        </div>
                        <h3 className="details__sector--information_review-header"> Write your review </h3>
                        <div className="comment">
                            <div className="comment__rating">
                                Your Rating
                                <div className="comment__rating--group">
                                    <img src="/assets/icon/star-full.svg" className="comment__rating--group_icon" />
                                    <img src="/assets/icon/star-full.svg" className="comment__rating--group_icon" />
                                    <img src="/assets/icon/star-empty.svg" className="comment__rating--group_icon" />
                                    <img src="/assets/icon/star-empty.svg" className="comment__rating--group_icon" />
                                    <img src="/assets/icon/star-empty.svg" className="comment__rating--group_icon" />
                                </div>
                            </div>
                            <div className="comment__content">
                                Your Review
                                <br />
                                <textarea name="commentbox" id="commentbox" cols="30" rows="10" 
                                className="comment__content--box" placeholder="Write your review here..."></textarea>
                            </div>
                            <div className="comment__auth">
                                <span className="comment__auth--group">
                                    Your Name
                                    <br />
                                    <input type="text" className="comment__auth--group_input" placeholder="Write your name here..." />
                                </span>
                                <span className="comment__auth--group">
                                    Your Email
                                    <br />
                                    <input type="email" className="comment__auth--group_input" placeholder="Write your email here..." />
                                </span>
                            </div>
                            <div className="comment__agreement">
                                <input type="checkbox" name="agree" id="agree" className="comment__agreement--checkbox" />
                                Save my name, email, and website in this browser for the next time I comment.
                            </div>
                            <button className="comment__submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="details__sector--cover">
                    <div className="details__sector--cover_group">
                        <div className="details__sector--cover_group-inf">
                            <p className="details__sector--cover_group-inf__tag"> Living Room </p>
                            <h3 className="details__sector--cover_group-inf__text"> The best foam padded chair </h3>
                            <button className="details__sector--cover_group-inf__btn"> Shop Now </button>
                        </div>
                        <img src="/assets/homepage/sam-moghadam.png" alt="cover" className="details__sector--cover_group-image" />
                    </div>
                    <div className="details__sector--cover_pagination">
                        <div className="details__sector--cover_pagination-dots"></div>
                        <div className="details__sector--cover_pagination-dots"></div>
                        <div className="details__sector--cover_pagination-dots"></div>
                    </div>
                </div>
            </div>
            <div className="details__sector">
                <h3 className="details__sector--related">
                    Related Products
                </h3>
                <div className="details__sector--cards">
                    <div className="productcard" id="rp_01">
                        <img src="/assets/product/product_01.png" alt="product-01" className="productcard__image" />
                        <div className="productcard__tag"> New </div>
                        <div className="productcard__group">
                            <button className="productcard__group--btn">
                                <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                            </button>
                            <button className="productcard__group--btn">
                                <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                            </button>
                        </div>
                        <div className="productcard__info">
                            <div className="productcard__info--category"> Living Room </div>
                            <div className="productcard__info--main">
                                <p className="productcard__info--main_name"> Teak wood chair </p>
                                <strong className="productcard__info--main_price"> $24 </strong>
                            </div>
                        </div>
                    </div>
                    <div className="productcard" id="rp_02">
                        <img src="/assets/product/product_02.png" alt="product-02" className="productcard__image" />
                        <div className="productcard__tag"> New </div>
                        <div className="productcard__group">
                            <button className="productcard__group--btn">
                                <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                            </button>
                            <button className="productcard__group--btn">
                                <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                            </button>
                        </div>
                        <div className="productcard__info">
                            <div className="productcard__info--category"> Living Room </div>
                            <div className="productcard__info--main">
                                <p className="productcard__info--main_name"> Teak wood chair </p>
                                <strong className="productcard__info--main_price"> $24 </strong>
                            </div>
                        </div>
                    </div>
                    <div className="productcard" id="rp_03">
                        <img src="/assets/product/product_03.png" alt="product-03" className="productcard__image" />
                        <div className="productcard__tag"> New </div>
                        <div className="productcard__group">
                            <button className="productcard__group--btn">
                                <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                            </button>
                            <button className="productcard__group--btn">
                                <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                            </button>
                        </div>
                        <div className="productcard__info">
                            <div className="productcard__info--category"> Living Room </div>
                            <div className="productcard__info--main">
                                <p className="productcard__info--main_name"> Teak wood chair </p>
                                <strong className="productcard__info--main_price"> $24 </strong>
                            </div>
                        </div>
                    </div>
                    <div className="productcard" id="rp_04">
                        <img src="/assets/product/product_04.png" alt="product-04" className="productcard__image" />
                        <div className="productcard__tag"> New </div>
                        <div className="productcard__group">
                            <button className="productcard__group--btn">
                                <img src="/assets/icon/add2fav.svg" alt="fav" className="productcard__group--btn_icon" />
                            </button>
                            <button className="productcard__group--btn">
                                <img src="/assets/icon/add2cart.svg" alt="cart" className="productcard__group--btn_icon" />
                            </button>
                        </div>
                        <div className="productcard__info">
                            <div className="productcard__info--category"> Living Room </div>
                            <div className="productcard__info--main">
                                <p className="productcard__info--main_name"> Teak wood chair </p>
                                <strong className="productcard__info--main_price"> $24 </strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details__sector--pagination">
                    <div className="details__sector--pagination_dots"></div>
                    <div className="details__sector--pagination_dots"></div>
                    <div className="details__sector--pagination_dots"></div>
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

export default ShopDetails