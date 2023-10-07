import React, { useState, useEffect, useRef } from 'react'
import './Team.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function Team() {
    const navigate = useNavigate()
    const [team, setTeam] = useState([0, 1, 2, 3, 4, 5])
    return (
        <section className="team">
            <h3 className="team__header"> Meet Our Team </h3>
            <p className="team__summary"> We write various things related to furniture, from tips and what 
            things I need to pay attention to when choosing furniture </p>
            <div className="team__container">
                {
                    team.map(
                        (index) => 
                            <div className="team__container--teamcard" key={index} id={`tm_${index}`}>
                                <div className="team__container--teamcard_image">
                                    <img src={`/assets/team/team_${index+1}.png`} alt={`Profile-${index+1}`} className="team__container--teamcard_image-content" />
                                    <div className="team__container--teamcard_image-buttons" id={`grp_${index}`} 
                                    style={{
                                        display: index == 0 ? 'flex' : 'none'
                                    }}>
                                        <img src="/assets/icon/teaM_linkedin.svg" alt="linkedin" className="team__container--teamcard_image-buttons__iconbtn" />
                                        <img src="/assets/icon/teaM_facebook.svg" alt="facebook" className="team__container--teamcard_image-buttons__iconbtn" />
                                        <img src="/assets/icon/teaM_twitter.svg" alt="twitter" className="team__container--teamcard_image-buttons__iconbtn" />
                                    </div>
                                </div>
                                <div className="team__container--teamcard_info">
                                    <h4 className="team__container--teamcard_info-name">
                                        {index == 0 || index == 3 ? "Make Jhane" : ""}
                                        {index == 1 || index == 4 ? "Jinny Owen" : ""}
                                        {index == 2 || index == 5 ? "Mia Lobey" : ""}
                                    </h4>
                                    <p className="team__container--teamcard_info-title">
                                        {index == 0 || index == 3 ? "Finance Manager" : ""}
                                        {index == 1 || index == 4 ? "Marketing Manager" : ""}
                                        {index == 2 || index == 5 ? "Accountant" : ""}
                                    </p>
                                </div>
                            </div>
                    )
                }
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

export default Team