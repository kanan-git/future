import React, { useState, useEffect, useRef } from 'react'
import './Team.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function Team() {
    return (
        <section className="team">
            <h3 className="team__header"> Meet Our Team </h3>
            <p className="team__summary"> We write various things related to furniture, from tips and what 
            things I need to pay attention to when choosing furniture </p>
            <div className="team__container">
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
                <div className="team__container--teamcard">
                    <div className="team__container--teamcard_image">
                        <img src="/assets/team/team_4.png" className="team__container--teamcard_image-content" />
                        <div className="team__container--teamcard_image-buttons" style={{display: 'none'}}>
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
                        <img src="/assets/team/team_5.png" className="team__container--teamcard_image-content" />
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
                        <img src="/assets/team/team_6.png" className="team__container--teamcard_image-content" />
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

export default Team