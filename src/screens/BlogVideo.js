import React from 'react'
import ShareLinks from '../components/ShareLinks'

const BlogVideo = ({width, src, title, description}) => {
    return (
        <div>
            <div className="blog-article-container">
              <div className="blog-article-hero-container">
                    <div className="blog-article-video-container">
                    <iframe title={title} className="blog-article-image" width="560" height="315" src={src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
               </div>
               <div className="article-and-link-container">
                <ShareLinks width={width}/>
                <article className="blog-article">
                <h2>{title}</h2>
                <p>{description}</p>
                </article>
                </div>
            </div>
           
        </div>
    )
}

export default BlogVideo
