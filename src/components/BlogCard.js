import React from 'react'
import { Link } from "react-router-dom"


const BlogCard = ({ src, text, path, title}) => {
    return (
        <>
            <li className="card-item">
                <Link to={path} className="card-item-link">
                    <figure className="card-item-image-container">
                        <img src='/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg' alt={text} className="card-item-image"/>
                    </figure>
                    <div className="card-item-info">
                        <h5>{title}</h5>
                    </div>
                </Link>
            </li>
            
        </>
    )
}

export default BlogCard
