import React from 'react'
import BlogCard from "./BlogCard"

const BlogPosts = ({posts}) => {
    return (
        <div className="cards-container">
        <div className="cards-wrapper">
            <ul className="card-items">
            {posts.map((post, index) => (
                <BlogCard
                src={post.src}
                text={post.text}
                title={post.title}
                path={post.path}
                type={post.type}
                category={post.category}
                key={index}
                />
            ))}

            </ul>
        </div>
    </div>
    )
}

export default BlogPosts
