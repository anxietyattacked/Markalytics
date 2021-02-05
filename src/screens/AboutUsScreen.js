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
                    <p> Our aim is to understand people better. We specialize in gathering and analyzing data in order to come up with the perfect marketing plan. We have worked with dozens of companies to help them with their marketing needs.  </p>
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
                        <div><p>We work with more than 20 Organisations.</p></div>
                        </div>
                    <div className="caption-container collage-grid-item two-cap">
                        <hr/>
                        <div><p>We have studied people from all over the country</p></div>
                        </div>
                    <div className="caption-container collage-grid-item three-cap">
                        <hr/>
                        <div><p>We spend our time working with clients to understand their needs</p></div>
                        </div>
                    <div className="caption-container collage-grid-item four-cap">
                        <hr/>
                        <div><p>We gather and analyze data about people needs, wants, and preferences</p></div>
                        </div>
                    <div className="caption-container collage-grid-item five-cap">
                        <hr/>
                        <div><p>We come up with a plan of action to tackle their marketing problem</p></div>
                        </div>
                </div>
                <div className="collage-caption-container">
                    
                </div>
            </div>
            <div className="culture-container">
                <div className="culture-head">
                    <h2><span>Our Culture</span></h2>
                    <p>Our company culture values many qualities, but we prioritize honesty, respect and creativity above all else. </p>
                </div>
                <div className="culture-caption-container">
                    <div className="culture-caption">
                        <h2>Honesty</h2>
                 
                        <p>Honesty is one of our top qualities we prize as a company. An honest and open environment leads to the best results. </p>
                    </div>
                    <div className="culture-caption">
                        <h2>Respect</h2>
              
                        <p>Respect for our clients, their customers, and for each other. A little respect goes a long way. </p>
                    </div>
                    <div className="culture-caption">
                        <h2>Creativity</h2>
                
                        <p>Being able to thinking creativly is the key to a better marketing exprience. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsScreen
