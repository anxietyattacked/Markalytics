import React from 'react'
import {Link} from "react-router-dom"
import blog1 from "../images/hl-blog.jpg"

const BlogScreen = () => {
    return (
     <div className=" blog-container">
            <div className="blog-hero-container">
              <div className="highlighted-card-container">
                <div className="highlighted-blog-card">
                    <div className="thumb-outer">
                        <div className="highlighted-blog-thumb"></div>
                    </div>
                    
                    <div className="highlighted-blog-title-and-info">
                        <h2>Our Story</h2>
                    </div>
                
                </div>
                </div>
                <div className="blog-hightlighted-links">
                    <h2><i class="fas fa-star"></i>Staff Picks</h2>
                    <Link>the first link is here</Link>
                    <Link>the first link is here</Link>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Link>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam</Link>
                </div>
            </div>
                <div   div className="blog-grid-container">
                <div className="blog-card">1
                    <div className="blog-thumbnail-container">

                    </div>
                    <div className="blog-title-and-info">

                    </div>
                    <div className="excerpt-content">

                     </div>
                </div>

                <div className="blog-card">2
                <div className="blog-thumbnail-container">

                </div>
                <div className="blog-title-and-info">

                </div>
                <div className="excerpt-content">

                </div>
                </div>

                <div className="blog-card">3
                <div className="blog-thumbnail-container">

                </div>
                <div className="blog-title-and-info">

                </div>
                <div className="excerpt-content">

                </div>
                </div>

                <div className="blog-card">4
                <div className="blog-thumbnail-container">

                </div>
                <div className="blog-title-and-info">

                </div>
                <div className="excerpt-content">

                </div>
             </div>

                <div className="blog-card">5
                <div className="blog-thumbnail-container">

                </div>
                <div className="blog-title-and-info">

                </div>
                <div className="excerpt-content">

                </div>
             </div>

                <div className="blog-card">6
                <div className="blog-thumbnail-container">

                 </div>
                <div className="blog-title-and-info">

                </div>
                <div className="excerpt-content">

                </div>
                </div>

                <div className="blog-card">7
             <div className="blog-thumbnail-container">

                </div>
                <div className="blog-title-and-info">

                </div>
                <div className="excerpt-content">

                </div>
                </div>

                <div className="blog-card">8
                <div className="blog-thumbnail-container">

             </div>
                <div className="blog-title-and-info">

                </div>
                <div className="excerpt-content">

                </div>
                </div>

                </div>
            
        </div>
    )
}

export default BlogScreen
