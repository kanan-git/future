import React from "react"
import './Header.css'

function Header() {
    return (
        <header className="header">
            <title>test </title>
            <div className="header__line"></div>
            <navbar className="header__navbar">
                <span className="header__navbar--logo">
                    <img src="/assets/icon/logo.svg" alt="logo" className="header__navbar--logo_content" />
                </span>
                <span className="header__navbar--list">
                    <span className="header__navbar--list_menu">
                        Home
                        <img src="/assets/icon/chevron-down.svg" alt="chevron" className="header__navbar--list_menu-icon" />
                        <div className="header__navbar--list_menu-dropdown">
                            ...
                        </div>
                    </span>
                    <span className="header__navbar--list_menu"> Shop </span>
                    <span className="header__navbar--list_menu"> Blog </span>
                    <span className="header__navbar--list_menu">
                        Page
                        <img src="/assets/icon/chevron-down.svg" alt="chevron" className="header__navbar--list_menu-icon" />
                        <div className="header__navbar--list_menu-dropdown">
                            ...
                        </div>
                    </span>
                </span>
                <span className="header__navbar--icons">
                    <button className="header__navbar--icons_btn">
                        <img src="/assets/icon/search.svg" alt="search" className="header__navbar--icons_btn-svg" />
                        <input type="search" name="search" id="search" className="header__navbar--icons_btn-searchbar" placeholder="Search ..." />
                        {/* click to search button to open searchbar with overlay */}
                        {/* click to search button or enter for search */}
                        {/* click to overlay to close searchbar again */}
                    </button>
                    <button className="header__navbar--icons_btn">
                        <img src="/assets/icon/user.svg" alt="user" className="header__navbar--icons_btn-svg" />
                    </button>
                    <button className="header__navbar--icons_btn">
                        <img src="/assets/icon/cart.svg" alt="cart" className="header__navbar--icons_btn-svg" />
                        <div className="header__navbar--icons_btn-notification"></div>
                    </button>
                </span>
            </navbar>
            <section className="header__contact">
                <span className="header__contact--info">
                    <button className="header__contact--info_btn">
                        <img src="/assets/icon/envelope.svg" alt="envelope" className="header__contact--info_btn-svg" />
                        future.info@gmail.com
                    </button>
                    <button className="header__contact--info_btn">
                        <img src="/assets/icon/phone.svg" alt="phone" className="header__contact--info_btn-svg" />
                        +1363-343-677
                    </button>
                </span>
                <span className="header__contact--social">
                    <button className="header__contact--social_btn">
                        <img src="/assets/icon/instagram.svg" alt="instagram" className="header__contact--social_btn-img" />
                    </button>
                    <button className="header__contact--social_btn">
                        <img src="/assets/icon/facebook.svg" alt="facebook" className="header__contact--social_btn-img" />
                    </button>
                    <button className="header__contact--social_btn">
                        <img src="/assets/icon/twitter.svg" alt="twitter" className="header__contact--social_btn-img" />
                    </button>
                    <button className="header__contact--social_btn">
                        <img src="/assets/icon/tiktok.svg" alt="tiktok" className="header__contact--social_btn-img" />
                    </button>
                </span>
            </section>
        </header>
    )
}

export default Header