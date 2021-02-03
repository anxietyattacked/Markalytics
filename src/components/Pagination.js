import React from 'react'
import { Link } from 'react-router-dom'



const Pagination = ({currentPage, totalPosts, paginate, pageItems}) => {
    const pageNumbers= []
    for(let i = 1; i <= Math.ceil(totalPosts / pageItems); i++){
        pageNumbers.push(i)
    }

    return (
        <div className="pagination-container">
            <ul className="page-list">
            {pageNumbers.map(page => (
                
                   <Link onClick={() => paginate(page)} href='!#' className='page-link'>
              <li key={page} className={`pages ${currentPage === page ? "current-page" : null}`}>       
              {page}
              </li>  
            </Link>
                
            ))}
            </ul>
        </div>
    )
}

export default Pagination
