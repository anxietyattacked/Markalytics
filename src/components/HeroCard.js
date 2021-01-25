import React from 'react'
import video from "../images/mixkit-street-with-people-walking-at-dusk-3428.mp4"
import image from "../images/screenshot-people-waling-at-dusk.jpg"

const HeroCard = () => {
    return (
        <div className="hero-div">
            <div className="video-div">
            <video className="bgvid" poster={image} autoPlay muted loop><source src={video} type="video/mp4"/></video>
            </div>
         
            <h2 className="hero-text"><span>Data are just summaries of thousands of stories</span></h2>
         
            <div className="arrow-container">
                <p className="arrow">˅</p>
            </div>
            
            
            
        </div>
    )
}

export default HeroCard
