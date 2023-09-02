import React from 'react'

function ProductCard(props) {
    const {productId, isNew, imgPath, categ, title, price} = props
    
    return (
        <div className="productcard">
            <img src="/assets/product/#.png" alt="product-01" className="productcard__image" />
            <div className="productcard__tag"> New </div>
            <div className="productcard__group">
                <button className="productcard__group--btn">
                    <img src="/assets/icon/#.svg" alt="fav" className="productcard__group--btn_icon" />
                </button>
                <button className="productcard__group--btn">
                    <img src="/assets/icon/#.svg" alt="cart" className="productcard__group--btn_icon" />
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
    )
}

export default ProductCard