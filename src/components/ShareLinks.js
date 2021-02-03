import React, {useState} from 'react'

const ShareLinks = ({width}) => {
    let isMobile = (width <= 768);
    const [showLinks, setShowLinks] = useState(false)
    const showShareLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <div className="share-links">
        {isMobile ? <i onClick={showShareLinks} className="fas fa-share-alt-square"></i> :<h6>Share</h6>}
    <div className={`share-links-container ${isMobile ? "hide-links": "" }${showLinks ? "show-links" : ""}`}>
    <i className="fab fa-twitter"></i>
    <i className="fab fa-facebook"></i>
    <i className="fab fa-linkedin-in"></i>
    <i className="fab fa-instagram"></i>
    </div>
    </div>
    )
}

export default ShareLinks
