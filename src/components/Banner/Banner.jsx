import React from 'react'

function Banner(props) {
    const {productId, isNew, imgPath, categ, title, price} = props

    return (
        <div className="banner">
            <img src="/assets/images/#.jpg" alt="cover" className="banner__content" />
            <div className="banner__container">
                <p className="banner__container--title"> Interior Needs </p>
                <h4 className="banner__container--description"> Various new collecitons of furniture to decorate the corner of your house. </h4>
                <button className="banner__container--btn"> Shop Now </button>
            </div>
        </div>
    )
}

export default Banner