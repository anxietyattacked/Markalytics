import React from 'react'
import {Link} from "react-router-dom"
import blog1 from "../images/hl-blog.jpg"
import BlogCard from "../components/BlogCard"

const BlogScreen2 = () => {
    return (
        <div className="blog-container">
            <div className="card-container">
                <div className="cards-wrapper">
                    <ul className="card-items">
                        <BlogCard 
                        src="../images/hl-blog.jpg"
                        text="pages from a book"
                        title="Markalytics: Our Story"
                        path="/blog/our-story"
                        />
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default BlogScreen2
