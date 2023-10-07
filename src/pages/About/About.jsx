import React, { useState, useEffect, useRef } from 'react'
import './About.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()
    const [teamCard, setTeamCard] = useState([1, 2, 3])
    const [servPg, setServPg] = useState(1)
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
                <div className="team__container" style={{gap: '5px', flexWrap: 'nowrap', marginBottom: '50px'}}>
                    {
                        teamCard.map(
                            (ID) => 
                                <div className="team__container--teamcard" id={`m_${ID}`} key={ID}>
                                    <div className="team__container--teamcard_image">
                                        <img src={`/assets/team/team_${ID}.png`} alt={`member_${ID}`} className="team__container--teamcard_image-content" />
                                        <div className="team__container--teamcard_image-buttons" style={{
                                            display: ID == 1 ? 'flex' : 'none'
                                        }}>
                                            <img src="/assets/icon/teaM_linkedin.svg" alt="linkedin" className="team__container--teamcard_image-buttons__iconbtn" />
                                            <img src="/assets/icon/teaM_facebook.svg" alt="facebook" className="team__container--teamcard_image-buttons__iconbtn" />
                                            <img src="/assets/icon/teaM_twitter.svg" alt="twitter" className="team__container--teamcard_image-buttons__iconbtn" />
                                        </div>
                                    </div>
                                    <div className="team__container--teamcard_info">
                                        <h4 className="team__container--teamcard_info-name">
                                            {ID == 1 || ID == 4 || ID == 7 ? "Make Jhane" : ""}
                                            {ID == 2 || ID == 5 || ID == 8 ? "Jinny Owen" : ""}
                                            {ID == 3 || ID == 6 || ID == 9 ? "Mia Lobey" : ""}
                                        </h4>
                                        <p className="team__container--teamcard_info-title">
                                            {ID == 1 || ID == 4 || ID == 7 ? "Finance Manager" : ""}
                                            {ID == 2 || ID == 5 || ID == 8 ? "Marketing Manager" : ""}
                                            {ID == 3 || ID == 6 || ID == 9 ? "Accountant" : ""}
                                        </p>
                                    </div>
                                </div>
                        )
                    }
                </div>
                <div className="team__pagination">
                    <div className="team__pagination--dots" id="teamSlotBtn_1" onClick={(e) => {
                        e.target.style.backgroundColor = `var(--darkslategray)`
                        document.getElementById("teamSlotBtn_2").style.backgroundColor = `#DBEFED`
                        document.getElementById("teamSlotBtn_3").style.backgroundColor = `#DBEFED`
                        setTeamCard([1, 2, 3])
                    }}></div>
                    <div className="team__pagination--dots" id="teamSlotBtn_2" onClick={(e) => {
                        e.target.style.backgroundColor = `var(--darkslategray)`
                        document.getElementById("teamSlotBtn_1").style.backgroundColor = `#DBEFED`
                        document.getElementById("teamSlotBtn_3").style.backgroundColor = `#DBEFED`
                        setTeamCard([4, 5, 6])
                    }}></div>
                    <div className="team__pagination--dots" id="teamSlotBtn_3" onClick={(e) => {
                        e.target.style.backgroundColor = `var(--darkslategray)`
                        document.getElementById("teamSlotBtn_1").style.backgroundColor = `#DBEFED`
                        document.getElementById("teamSlotBtn_2").style.backgroundColor = `#DBEFED`
                        setTeamCard([7, 8, 9])
                    }}></div>
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
                                <h5 className="about__serv--container_cards-block__group--name"> Dagruel Manulo {servPg} </h5>
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
                                <h5 className="about__serv--container_cards-block__group--name"> Zambi Owel {servPg} </h5>
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
                                <h5 className="about__serv--container_cards-block__group--name"> Mario {servPg} </h5>
                                <p className="about__serv--container_cards-block__group--location"> Sydney, Australia </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="about__serv--pagination">
                    <div className="about__serv--pagination_dots" id="servBtn_1" onClick={(e) => {
                        setServPg(1)
                        e.target.style.backgroundColor = `var(--darkslategray)`
                        document.getElementById("servBtn_2").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_3").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_4").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_5").style.backgroundColor = `#DBEFED`
                    }}></div>
                    <div className="about__serv--pagination_dots" id="servBtn_2" onClick={(e) => {
                        setServPg(2)
                        e.target.style.backgroundColor = `var(--darkslategray)`
                        document.getElementById("servBtn_1").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_3").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_4").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_5").style.backgroundColor = `#DBEFED`
                    }}></div>
                    <div className="about__serv--pagination_dots" id="servBtn_3" onClick={(e) => {
                        setServPg(3)
                        e.target.style.backgroundColor = `var(--darkslategray)`
                        document.getElementById("servBtn_1").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_2").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_4").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_5").style.backgroundColor = `#DBEFED`
                    }}></div>
                    <div className="about__serv--pagination_dots" id="servBtn_4" onClick={(e) => {
                        setServPg(4)
                        e.target.style.backgroundColor = `var(--darkslategray)`
                        document.getElementById("servBtn_1").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_2").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_3").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_5").style.backgroundColor = `#DBEFED`
                    }}></div>
                    <div className="about__serv--pagination_dots" id="servBtn_5" onClick={(e) => {
                        setServPg(5)
                        e.target.style.backgroundColor = `var(--darkslategray)`
                        document.getElementById("servBtn_1").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_2").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_3").style.backgroundColor = `#DBEFED`
                        document.getElementById("servBtn_4").style.backgroundColor = `#DBEFED`
                    }}></div>
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