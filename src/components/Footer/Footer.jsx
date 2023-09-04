import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__main">
                <span className="footer__main--columns">
                    <img src="/assets/icon/logo.svg" alt="logo" className="footer__main--columns_logo" />
                    <p className="footer__main--columns_about">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat exercitationem eligendi dolor ullam vel tenetur sequi assumenda. 
                        Similique facere quas, illum asperiores et doloremque quia omnis!
                    </p>
                    <div className="footer__main--columns_social">
                        <button className="footer__main--columns_social-btn">
                            <img src="/assets/icon/instagram.svg" alt="instagram" className="footer__main--columns_social-btn__content" />
                        </button>
                        <button className="footer__main--columns_social-btn">
                            <img src="/assets/icon/facebook.svg" alt="facebook" className="footer__main--columns_social-btn__content" />
                        </button>
                        <button className="footer__main--columns_social-btn">
                            <img src="/assets/icon/twitter.svg" alt="twitter" className="footer__main--columns_social-btn__content" />
                        </button>
                        <button className="footer__main--columns_social-btn">
                            <img src="/assets/icon/tiktok.svg" alt="tiktok" className="footer__main--columns_social-btn__content" />
                        </button>
                    </div>
                </span>
                <span className="footer__main--columns">
                    <h3 className="footer__main--columns_headers"> Customer </h3>
                    <p className="footer__main--columns_links"> Order Status </p>
                    <p className="footer__main--columns_links"> Collecitons </p>
                    <p className="footer__main--columns_links"> Our Story </p>
                    <p className="footer__main--columns_links"> Affiliates </p>
                    <p className="footer__main--columns_links"> Security </p>
                </span>
                <span className="footer__main--columns">
                    <h3 className="footer__main--columns_headers"> Information </h3>
                    <p className="footer__main--columns_links"> Customer Service </p>
                    <p className="footer__main--columns_links"> Careers </p>
                    <p className="footer__main--columns_links"> FAQ </p>
                </span>
                <span className="footer__main--columns">
                    <h3 className="footer__main--columns_headers"> Follow Us </h3>
                    <div className="footer__main--columns_gallery">
                        <div className="footer__main--columns_gallery-image" 
                        onMouseEnter={() => {document.getElementById("overlay_01").style.display = `block`}} 
                        onMouseLeave={() => {document.getElementById("overlay_01").style.display = `none`}}>
                            <img src="/assets/gallery/gallery_01.png" alt="img-01" className="footer__main--columns_gallery-image__content" />
                            <div className="footer__main--columns_gallery-image__overlay" id="overlay_01">
                                <img src="/assets/icon/gallery-hover.svg" className="footer__main--columns_gallery-image__overlay--icon" />
                            </div>
                        </div>

                        <div className="footer__main--columns_gallery-image" 
                        onMouseEnter={() => {document.getElementById("overlay_02").style.display = `block`}} 
                        onMouseLeave={() => {document.getElementById("overlay_02").style.display = `none`}}>
                            <img src="/assets/gallery/gallery_02.png" alt="img-02" className="footer__main--columns_gallery-image__content" />
                            <div className="footer__main--columns_gallery-image__overlay" id="overlay_02">
                                <img src="/assets/icon/gallery-hover.svg" className="footer__main--columns_gallery-image__overlay--icon" />
                            </div>
                        </div>

                        <div className="footer__main--columns_gallery-image" 
                        onMouseEnter={() => {document.getElementById("overlay_03").style.display = `block`}} 
                        onMouseLeave={() => {document.getElementById("overlay_03").style.display = `none`}}>
                            <img src="/assets/gallery/gallery_03.png" alt="img-03" className="footer__main--columns_gallery-image__content" />
                            <div className="footer__main--columns_gallery-image__overlay" id="overlay_03">
                                <img src="/assets/icon/gallery-hover.svg" className="footer__main--columns_gallery-image__overlay--icon" />
                            </div>
                        </div>

                        <div className="footer__main--columns_gallery-image" 
                        onMouseEnter={() => {document.getElementById("overlay_04").style.display = `block`}} 
                        onMouseLeave={() => {document.getElementById("overlay_04").style.display = `none`}}>
                            <img src="/assets/gallery/gallery_04.png" alt="img-04" className="footer__main--columns_gallery-image__content" />
                            <div className="footer__main--columns_gallery-image__overlay" id="overlay_04">
                                <img src="/assets/icon/gallery-hover.svg" className="footer__main--columns_gallery-image__overlay--icon" />
                            </div>
                        </div>

                        <div className="footer__main--columns_gallery-image" 
                        onMouseEnter={() => {document.getElementById("overlay_05").style.display = `block`}} 
                        onMouseLeave={() => {document.getElementById("overlay_05").style.display = `none`}}>
                            <img src="/assets/gallery/gallery_05.png" alt="img-05" className="footer__main--columns_gallery-image__content" />
                            <div className="footer__main--columns_gallery-image__overlay" id="overlay_05">
                                <img src="/assets/icon/gallery-hover.svg" className="footer__main--columns_gallery-image__overlay--icon" />
                            </div>
                        </div>

                        <div className="footer__main--columns_gallery-image" 
                        onMouseEnter={() => {document.getElementById("overlay_06").style.display = `block`}} 
                        onMouseLeave={() => {document.getElementById("overlay_06").style.display = `none`}}>
                            <img src="/assets/gallery/gallery_06.png" alt="img-06" className="footer__main--columns_gallery-image__content" />
                            <div className="footer__main--columns_gallery-image__overlay" id="overlay_06">
                                <img src="/assets/icon/gallery-hover.svg" className="footer__main--columns_gallery-image__overlay--icon" />
                            </div>
                        </div>
                    </div>
                </span>
            </section>
            <section className="footer__bottom">
                <span className="footer__bottom--container">
                    © Copyright 2023 | CODERS Az. All Rights Reserved.
                </span>
                <span className="footer__bottom--container">
                    <button className="footer__bottom--container_btn"> Terms of Condition </button>
                    <button className="footer__bottom--container_btn"> Privacy Policy </button>
                </span>
            </section>
        </footer>
    )
}

export default Footer