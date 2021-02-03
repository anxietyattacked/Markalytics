import React from 'react'
import aboutHero from "../images/about-hero.jpg"
import blurbImage from '../images/Ideation Session Whiteboarding.svg'
import collage1 from "../images/collage-1.jpg"
import collage2 from "../images/collage-2.jpg"
import collage3 from "../images/collage-3.jpg"
import collage4 from "../images/collage-4.jpg"
import collage5 from "../images/collage-5.jpg"

const AboutUsScreen = () => {
    return (
        <div className="about_container">
            <div className="about-hero-container">
            <img className="about-hero-image" src={aboutHero} alt="People walking in traffic" />
            <h2 className="about-hero-title">We seek to understand people better</h2>
            </div>
            <div className="about-blurb-container">
                <div className="blurb-container" >
                    <h2>We are a <span className="blurb-span">marketing and analytics company</span> dedicated to fulfilling your needs.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae a at tempora explicabo quasi cumque necessitatibus delectus, reiciendis, animi tempore harum? Ex porro tempore libero ab aut! Blanditiis, accusantium temporibus.</p>
                </div>
                <div className="blurb-image-container">
                    <img className="blurb-image" src={blurbImage} alt="People discussing analytics"/>
                </div>
            </div>
            <div className="image-collage-container">
                <div className="collage">
                    <div className="collage-image-container collage-grid-item one"><img className="collage-image" src={collage1} alt="" /></div>
                    <div className="collage-image-container collage-grid-item two"><img className="collage-image" src={collage2} alt="" /></div>
                    <div className="collage-image-container collage-grid-item three"><img className="collage-image" src={collage3} alt="" /></div>
                    <div className="collage-image-container collage-grid-item four"><img className="collage-image" src={collage4} alt="" /></div>
                    <div className="collage-image-container collage-grid-item five"><img className="collage-image" src={collage5} alt="" /></div>
                    <div className="caption-container collage-grid-item one-cap">
                        <hr/>
                        <div><p>We work with more than 100 Organisations.</p></div>
                        </div>
                    <div className="caption-container collage-grid-item two-cap">
                        <hr/>
                        <div><p>The world is the limit. We study more than 2 billion people worldwide.</p></div>
                        </div>
                    <div className="caption-container collage-grid-item three-cap">
                        <hr/>
                        <div><p>We spend half our time on commercial clients. </p></div>
                        </div>
                    <div className="caption-container collage-grid-item four-cap">
                        <hr/>
                        <div><p>We dedicate a quarter of our time on paid foundation work.</p></div>
                        </div>
                    <div className="caption-container collage-grid-item five-cap">
                        <hr/>
                        <div><p>The rest? Moonshot work. Curiosity, directed.</p></div>
                        </div>
                </div>
                <div className="collage-caption-container">
                    
                </div>
            </div>
            <div className="culture-container">
                <div className="culture-head">
                    <h2><span>Our Culture</span></h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, id, corrupti consequuntur quisquam pariatur error et harum dicta, placeat vitae earum enim quae accusantium ipsum numquam distinctio sunt quia. At!</p>
                </div>
                <div className="culture-caption-container">
                    <div className="culture-caption">
                        <br/>
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt fugiat incidunt architecto ipsum recusandae illum omnis molestias, itaque consequuntur natus excepturi dolorem temporibus eum aliquid nam? Expedita, obcaecati officia?</p>
                    </div>
                    <div className="culture-caption">
                        <br/>
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt fugiat incidunt architecto ipsum recusandae illum omnis molestias, itaque consequuntur natus excepturi dolorem temporibus eum aliquid nam? Expedita, obcaecati officia?</p>
                    </div>
                    <div className="culture-caption">
                        <br/>
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt fugiat incidunt architecto ipsum recusandae illum omnis molestias, itaque consequuntur natus excepturi dolorem temporibus eum aliquid nam? Expedita, obcaecati officia?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsScreen
