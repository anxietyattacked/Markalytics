import React from 'react'
import ShareLinks from '../components/ShareLinks'
import img from "../images/hl-blog.jpg"

const BlogArticle = ({width}) => {
    return (
        <div>
            <div className="blog-article-container">
              <div className="blog-article-hero-container">
                    <div className="blog-article-image-container">
                        <img className="blog-article-image" src={img} alt=""/>
                    </div>
               </div>
               <div className="article-and-link-container">
                <ShareLinks width={width}/>
                <article className="blog-article">
                <h2>Markalytics: Our Story</h2>
                <h4>Markalytics Staff</h4>
                <p>What happens when a disgruntled marketing vet meets a jaded analyst? A failed  startup. However, with failure comes perspective. We decided to take another shot at marketing and analytics our way. Markalytics was founded in 2015 and has rapidly grown since then. Today we employ dozens of employees specializing in many areas such as marketing and data science. Together we have worked with over 20 companies to come up with fresh and unique marketing campaigns. Each campaign has provided interesting insights into people we try to reach.</p>
                <p>People are the most important part of what we do. Our analytics team allows us to better understand the people we are trying to reach. We want to create a lasting connection between people and our clients. Our marketing team is able to use the insights our analytics team has provided and create fresh and unique marketing strategies. Marketing is an artform. Our team is filled with creative minds that are able tackle even the most difficult of marketing problems. We have had an amazing journey since our founding, and our story has just begun. </p>
                </article>
                </div>
            </div>
           
        </div>
    )
}

export default BlogArticle
