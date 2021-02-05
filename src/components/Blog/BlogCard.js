import React from 'react'
import { Link } from "react-router-dom"


const BlogCard = ({ src, text, path, title, type, category}) => {
    return (
        <>
            <li className="card-item">
                <Link to={path} className="card-item-link">
                    <figure className="card-item-image-container">
                        <img src={src} alt={text} className="card-item-image"/>
                        <span className={`${type === "video" ? "card-type-vid" : "card-type-article"}`}>{type}</span>
                    </figure>
                    <div className="card-item-info">
                    
                        <h5 className="card-info-title">{title}</h5>
                        <p className="card-info-category">Category: {category}</p>
                    </div>
                </Link>
            </li>
            
        </>
    )
}

export default BlogCard
