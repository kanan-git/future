import React from 'react'

function BlogCard(props) {
    const {title, imgPath, summary, authord, date} = props

    return (
        <div className="blogcard">
            <img src="/assets/blog/#.jpg" alt="cover" className="blogcard__image" />
            <h3 className="blogcard__header"> Why should you choose good wood </h3>
            <div className="blogcard__details">
                <span className="blogcard__details--group">
                    <img src="/assets/icon/#.svg" className="blogcard__details--group_icon" />
                    <p className="blogcard__details--group_creationinfo"> By Admin </p>
                </span>
                <span className="blogcard__details--group">
                    <img src="/assets/icon/#.svg" className="blogcard__details--group_icon" />
                    <p className="blogcard__details--group_creationinfo"> August 30, 2023 </p>
                </span>
            </div>
            <p className="blogcard__text">
                Summary of article. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Accusantium tenetur maxime quo quaerat aliquam deleniti.
            </p>
            <button className="blogcard__btn">
                Read More
            </button>
        </div>
    )
}

export default BlogCard