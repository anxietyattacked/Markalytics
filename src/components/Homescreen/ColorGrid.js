import React from 'react'
import {Link} from "react-router-dom"

const ColorGrid = () => {
    return (
        <div className="color-grid-container">
            <div className="about-us-container">
                <Link to="/about"><h3 className="color-grid-title">About Us</h3></Link>
                <Link to="/about"><p className="color-arrow">⟶</p></Link>
            </div>
            
            <div className="our-product-container">
            <Link to="/product"><h3 className="color-grid-title">Our Product</h3></Link>
                <Link to="/product"><p className="color-arrow">⟶</p></Link>
            </div>

            <div className="our-story-container">
            <Link to="/blog/our-story"><h3 className="color-grid-title">Our Story</h3></Link>
                <Link to="/blog/our-story"><p className="color-arrow">⟶</p></Link>
            </div>
            <div className="read-our-thoughts-container">
            <Link to="/blog"> <h3 className="color-grid-title">Read Our Thoughts</h3></Link>
            <Link to="/blog"><p className="color-arrow">⟶</p></Link>
            </div>
        </div>
    )
}

export default ColorGrid
