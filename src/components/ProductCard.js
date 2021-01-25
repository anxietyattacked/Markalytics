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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam voluptatem adipisci? Voluptates exercitationem nihil, veritatis sunt ducimus earum facere sequi natus hic aliquam eos, expedita voluptatum iusto quidem vitae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam voluptatem adipisci? Voluptates exercitationem nihil, veritatis sunt ducimus earum facere sequi natus hic aliquam eos, expedita voluptatum iusto quidem vitae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam voluptatem adipisci? Voluptates exercitationem nihil, veritatis sunt ducimus earum facere sequi natus hic aliquam eos, expedita voluptatum iusto quidem vitae?</p>
            </div>
        </div>
    )
}

export default ProductCard
