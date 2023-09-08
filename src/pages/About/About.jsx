import React, { useState, useEffect, useRef } from 'react'
import './About.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()
    return (
        <section className="about">
            <div className="about__top">
                <div className="about__top--container">
                    <h3 className="about__top--container_header">
                        Provide the best quality ingredients for home products
                    </h3>
                    <p className="about__top--container_text">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit 
                        dictumst posuere, lectus dis vehicula augue elementum 
                        quam risus. Placerat dictum lobortis lacinia volutpat 
                        morbi cum justo commodo est aliquam, facilisi consequat 
                        ligula vivamus faucibus
                    </p>
                    <button className="about__top--container_btn" onClick={
                        () => {
                            navigate("/team")
                        }
                    }>
                        Meet our Team
                    </button>
                    <div className="about__top--container_rate">
                        Ratings
                        <img src="/assets/icon/star.svg" className="about__top--container_rate-ico" />
                        5.0
                    </div>
                    <p className="about__top--container_desc">
                        Trusted by many people from all over the world
                    </p>
                    <div className="about__top--container_images">
                        <img src="/assets/users/people_01.png" alt="people_01" 
                        className="about__top--container_images-people" />
                        <img src="/assets/users/people_02.png" alt="people_02" 
                        className="about__top--container_images-people" />
                        <img src="/assets/users/people_03.png" alt="people_03" 
                        className="about__top--container_images-people" />
                        <img src="/assets/users/people_04.png" alt="people_04" 
                        className="about__top--container_images-people" />
                        <div className="about__top--container_images-circle"> 3k+ </div>
                    </div>
                </div>
                <img src="/assets/gallery/aboutus.png" alt="cover" className="about__top--image" />
            </div>

            <div className="home__sectors partner" 
            style={{backgroundColor: 'var(--scarlet)', marginTop: '0', 
            padding: '50px 0px'}}>
                <h5 className="partner__title"> Various brands have used our products </h5>
                <span className="partner__container">
                    <img src="/assets/brands/squarespace.svg" alt="squarespace" className="partner__container--logo" />
                    <img src="/assets/brands/docusign.svg" alt="docusign" className="partner__container--logo" />
                    <img src="/assets/brands/braze.svg" alt="braze" className="partner__container--logo" />
                    <img src="/assets/brands/attentive.svg" alt="attentive" className="partner__container--logo" />
                    <img src="/assets/brands/opendoor.svg" alt="opendoor" className="partner__container--logo" />
                    <img src="/assets/brands/square.svg" alt="square" className="partner__container--logo" />
                </span>
            </div>

            <div className="team">
                <h3 className="team__header"> Meet Our Team </h3>
                <p className="team__summary"> We write various things related to furniture, from tips and what 
                things I need to pay attention to when choosing furniture </p>
                <div className="team__container" 
                style={{gap: '10px', flexWrap: 'nowrap', marginBottom: '50px'}}>
                    <div className="team__container--teamcard">
                        <div className="team__container--teamcard_image">
                            <img src="/assets/team/team_1.png" className="team__container--teamcard_image-content" />
                            <div className="team__container--teamcard_image-buttons" style={{display: 'flex'}}>
                                <img src="/assets/icon/teaM_linkedin.svg" alt="linkedin" className="team__container--teamcard_image-buttons__iconbtn" />
                                <img src="/assets/icon/teaM_facebook.svg" alt="facebook" className="team__container--teamcard_image-buttons__iconbtn" />
                                <img src="/assets/icon/teaM_twitter.svg" alt="twitter" className="team__container--teamcard_image-buttons__iconbtn" />
                            </div>
                        </div>
                        <div className="team__container--teamcard_info">
                            <h4 className="team__container--teamcard_info-name"> Make Jhane </h4>
                            <p className="team__container--teamcard_info-title"> Finance Manager </p>
                        </div>
                    </div>
                    <div className="team__container--teamcard">
                        <div className="team__container--teamcard_image">
                            <img src="/assets/team/team_2.png" className="team__container--teamcard_image-content" />
                            <div className="team__container--teamcard_image-buttons" style={{display: 'none'}}>
                                <img src="/assets/icon/teaM_linkedin.svg" alt="linkedin" className="team__container--teamcard_image-buttons__iconbtn" />
                                <img src="/assets/icon/teaM_facebook.svg" alt="facebook" className="team__container--teamcard_image-buttons__iconbtn" />
                                <img src="/assets/icon/teaM_twitter.svg" alt="twitter" className="team__container--teamcard_image-buttons__iconbtn" />
                            </div>
                        </div>
                        <div className="team__container--teamcard_info">
                            <h4 className="team__container--teamcard_info-name"> Jinny Owen </h4>
                            <p className="team__container--teamcard_info-title"> Marketing Manager </p>
                        </div>
                    </div>
                    <div className="team__container--teamcard">
                        <div className="team__container--teamcard_image">
                            <img src="/assets/team/team_3.png" className="team__container--teamcard_image-content" />
                            <div className="team__container--teamcard_image-buttons" style={{display: 'none'}}>
                                <img src="/assets/icon/teaM_linkedin.svg" alt="linkedin" className="team__container--teamcard_image-buttons__iconbtn" />
                                <img src="/assets/icon/teaM_facebook.svg" alt="facebook" className="team__container--teamcard_image-buttons__iconbtn" />
                                <img src="/assets/icon/teaM_twitter.svg" alt="twitter" className="team__container--teamcard_image-buttons__iconbtn" />
                            </div>
                        </div>
                        <div className="team__container--teamcard_info">
                            <h4 className="team__container--teamcard_info-name"> Mia Labey </h4>
                            <p className="team__container--teamcard_info-title"> Accountant </p>
                        </div>
                    </div>
                </div>
                <div className="team__pagination">
                    <div className="team__pagination--dots"></div>
                    <div className="team__pagination--dots"></div>
                    <div className="team__pagination--dots"></div>
                </div>
            </div>

            <div className="home__sectors banner">
                <div className="banner__rectangle"></div>
                <div className="banner__container">
                    <p className="banner__container--title"> Interior Modern </p>
                    <h4 className="banner__container--description"> Arrange your home in such a way with our modern interiors </h4>
                    <button className="banner__container--btn" onClick={
                        () => {
                            navigate("/shop")
                        }
                    }> Shop Now </button>
                </div>
                <img src="/assets/homepage/inside-weather.png" alt="inside-weather" className="banner__content" />
                {/* replace with Banner */}
            </div>

            <div className="about__serv">
                <h3 className="about__serv--header"> How happy are they with our service </h3>
                <div className="about__serv--container">
                    <div className="about__serv--container_cards">
                        <img src="/assets/icon/quote.svg" className="about__serv--container_cards-icon" />
                        <h5 className="about__serv--container_cards-header"> For the material and the chair as we expected it's good </h5>
                        <p className="about__serv--container_cards-lorem"> Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text ever. </p>
                        <div className="about__serv--container_cards-block">
                            <img src="/assets/users/profile_01.png" alt="prof_1" className="about__serv--container_cards-block__img" />
                            <span className="about__serv--container_cards-block__group">
                                <h5 className="about__serv--container_cards-block__group--name"> Dagruel Manulo </h5>
                                <p className="about__serv--container_cards-block__group--location"> Sydney, Australia </p>
                            </span>
                        </div>
                    </div>
                    <div className="about__serv--container_cards">
                        <img src="/assets/icon/quote.svg" className="about__serv--container_cards-icon" />
                        <h5 className="about__serv--container_cards-header"> For the material and the chair as we expected it's good </h5>
                        <p className="about__serv--container_cards-lorem"> Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text ever. </p>
                        <div className="about__serv--container_cards-block">
                            <img src="/assets/users/profile_02.png" alt="prof_2" className="about__serv--container_cards-block__img" />
                            <span className="about__serv--container_cards-block__group">
                                <h5 className="about__serv--container_cards-block__group--name"> Zambi Owel </h5>
                                <p className="about__serv--container_cards-block__group--location"> Sydney, Australia </p>
                            </span>
                        </div>
                    </div>
                    <div className="about__serv--container_cards">
                        <img src="/assets/icon/quote.svg" className="about__serv--container_cards-icon" />
                        <h5 className="about__serv--container_cards-header"> For the material and the chair as we expected it's good </h5>
                        <p className="about__serv--container_cards-lorem"> Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text ever. </p>
                        <div className="about__serv--container_cards-block">
                            <img src="/assets/users/profile_03.png" alt="prof_3" className="about__serv--container_cards-block__img" />
                            <span className="about__serv--container_cards-block__group">
                                <h5 className="about__serv--container_cards-block__group--name"> Mario </h5>
                                <p className="about__serv--container_cards-block__group--location"> Sydney, Australia </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="about__serv--pagination">
                    <div className="about__serv--pagination_dots"></div>
                    <div className="about__serv--pagination_dots"></div>
                    <div className="about__serv--pagination_dots"></div>
                    <div className="about__serv--pagination_dots"></div>
                    <div className="about__serv--pagination_dots"></div>
                </div>
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

export default About