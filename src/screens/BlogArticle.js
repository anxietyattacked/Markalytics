import React from 'react'
import ShareLinks from '../components/ShareLinks'


const BlogArticle = ({ title, by, content, width, src, src2}) => {
    let isMobile = (width <= 768);
    return (
        <div>
            <div className="blog-article-container">
              <div className="blog-article-hero-container">
                    <div className="blog-article-image-container">
                        <img className="blog-article-image" src={isMobile ? src2 : src} alt=""/>
                    </div>
               </div>
               <div className="article-and-link-container">
                <ShareLinks width={width}/>
                <article className="blog-article">
                <h2>{title}</h2>
                <h4>{by}</h4>
                {content.map(p => (
                    <p>{p}</p>
                ))}
                </article>
                </div>
            </div>
           
        </div>
    )
}

export default BlogArticle
