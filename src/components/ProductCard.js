import React from 'react'
import {Link} from "react-router-dom"
import image from "../images/undraw_financial_data_es63.svg"
import crowd from "../images/davide-ragusa-gcDwzUGuUoI-unsplash.jpg"

const ProductCard = () => {
    return (
        <div className="product-container">
            <div className="product-text-container">
                <h2>We focus on <span className="product-text-marketing">marketing</span> and <span className="product-text-analytics">analytics</span> to help achieve your goals </h2> 
                <Link to="/product" className="explore-btn">Explore our Product</Link>
            </div>
            <div className="product-image-container">
                <img className="product-image" src={image} alt="screen with graph"/>
            </div>
            <div className="product-info-image-container">
                <img src={crowd} alt="crowd of people" className="product-info-image"></img>
            </div>
            <div className="product-info">
                <p>Markalytics is a marketing and analytics company that works with compaines to create new and unique marketing campaigns. We work closely with our clients to fulfill their needs. We can help with your current marketing campaign or craft a brand new one.</p>
                <p>Data is just summaries of much larger stories. We at Markalytics use the latest and greatest software tools to get at the larger stories being told. </p>
                <p>We specialize in creating new and unique marketing campaigns. Marketing is an art. Our team is filled with creative minds ready to tackle even the most challenging of marketing problems. </p>
            </div>
        </div>
    )
}

export default ProductCard
