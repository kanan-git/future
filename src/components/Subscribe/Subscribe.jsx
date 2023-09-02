import React from 'react'

function Subscribe(props) {
    const {thereIsNotPropsIguess} = props

    return (
        <div className="subscribe">
            <img src="/assets/images/#.jpg" alt="image" className="subscribe__image" />
            <div className="subscribe__container">
                <h4 className="subscribe__container--header"> Subscribe now and get 10% off all items </h4>
                <p className="subscribe__container--description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ducimus odio ratione sequi harum officia corporis sunt vero rerum fuga, facere totam cum. </p>
                <span className="subscribe__container--group">
                    <input type="email" name="subscribe" id="subscribe" className="subscribe__container--group_input" placeholder="Your email here." />
                    <button className="subscribe__container--group_btn"> Subscribe </button>
                </span>
            </div>
        </div>
    )
}

export default Subscribe