import React, {useState} from 'react'
import {Link} from "react-router-dom"
import BlogCard from "../components/Blog/BlogCard"
import blogData from '../components/Blog/BlogPostData'
import Pagination from '../components/Blog/Pagination'
import BlogPosts from '../components/Blog/BlogPosts'

const BlogScreen = () => {
    const [filterType,setFilterType] = useState("")
    const [filterCategory, setFilterCategory] = useState("")
    const filtered = blogData.filter(posts => posts.type.includes(filterType)).filter(posts => posts.category.includes(filterCategory))
    const [page, setPage] = useState(1)
    const [pageItems] = useState(8)
    
    

    const indexOfLastPost = page * pageItems;
    const indexOfFirstPost = indexOfLastPost - pageItems;
    const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);

    const showAll = () => {
        setFilterType("")
        setFilterCategory("")
    }

    const paginate = (pageNumber) => setPage(pageNumber)

    return (
        <div className="blog-container">
            <div className="blog-margin-container">
            <div className="blog-hero-container">
                <div className="featured-blog-container">
                <ul className="card-items">
                        <BlogCard 
                        src="/images/blog-1-low.jpg"
                        text="pages from a book"
                        title="Markalytics: Our Story"
                        path="/blog/our-story"
                        type={filtered[0].type}
                        category={filtered[0].category}
                        />
                    </ul>
                </div>
                
                <div className="staff-pick-links-container">
                    <h2><i className="fas fa-star"></i>Staff Picks</h2>
                  <ul>
                        <li className="list-element"><Link to="blog/our-story">Markalytics: Our Story</Link></li>
                        <li className="list-element"><Link to='/blog/breath-slow-down'>Breathe: Slow Down and Relax</Link></li>
                        <li className="list-element"><Link to="/blog/video-2">Relax and Explore the Ocean</Link></li>
                        <li className="list-element"><Link to="/blog/video-3">The Secret Behind Coca-Cola Marketing Strategy</Link></li>
                 </ul>  
                </div>
            </div>
            <div className="filter-container">
                <div className="filter-content-all">
                <h4>Tags</h4>
                <button className="filter-btn" onClick={() => showAll()}>all</button>
                </div>
                <div className="filter-content-type">
                    <h4>Type</h4>
                   <button className={`filter-btn ${filterType === "video" ? "filter-on" : null}`} onClick={() => filterType === "video" ? setFilterType("") : setFilterType("video")}>video</button>
                   <button className={`filter-btn ${filterType === "article" ? "filter-on" : null}`} onClick={() => filterType === "article" ? setFilterType("") : setFilterType("article")}>article</button>
                </div>
                <div className="filter-content-category">
                    <h4>Category</h4>
                    <button className={`filter-btn ${filterCategory === "fun" ? "filter-on" : null}`} onClick={() => filterCategory === "fun" ? setFilterCategory("") : setFilterCategory("fun")}>fun</button>
                   <button className={`filter-btn ${filterCategory === "musings" ? "filter-on" : null}`} onClick={() => filterCategory === "musings" ? setFilterCategory("") : setFilterCategory("musings")}>musings</button>
                </div>
      
                 
                </div>
            <BlogPosts posts={currentPosts}/>
            <Pagination
                currentPage={page}
                totalPosts={filtered.length}
                pageItems={pageItems}
                paginate={paginate}
                />

            </div>
        </div>
    )
}

export default BlogScreen
