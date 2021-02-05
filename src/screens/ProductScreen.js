import React, {useRef} from 'react'
import Modal from '../components/Modal'
import ContactForm from "../components/ContactForm"

import analytic from "../images/Analytic.svg"
import strategy from "../images/Strategy.svg"
import test1 from "../images/test-1.jpg"
import test2 from "../images/test-2.jpg"
import test3 from "../images/test-3.jpg"


const ProductScreen = () => {
    const modal = useRef(null)
    return (
        <div>
            <div className="product-hero-container">
            <div className="product-hero-text-container"> 
                    <h2>We <span className="product-text-analytics">analyze</span> and <span className="product-text-marketing">strategize</span> to help your company achieve its goals</h2>
                    <div className="product-btn-container">
                    <button className="product-contact-btn" onClick={() => modal.current.open()}>Contact Us Now</button>
                    </div>
                    
            <Modal ref={modal}>
            <ContactForm/>
           </Modal>
                </div>
                <div className="hero-image-container">
                <img className="product-hero-strategy" src={strategy} alt="woman ptiches a strategy"/>
                </div>
                <div className="hero-image-container">
                    <img className="product-hero-analytic" src={analytic} alt="woman going over analytics"/>
                </div>
               

            </div>
            <div className="product-details-container">
                <div className="details-container">
                <i className="far fa-chart-bar detail-icon"></i>
                <p>We gather information about your customers and potential customers. We do this to get a better understanding of their wants, needs, and preferences. This is a crutial step in creating a plan of action.</p>
                </div>
                <div className="details-container center-details">
                <i className="fas fa-users detail-icon"></i>
                <p>We analyze and strategize to come up with a plan of action in order to reach people. This process helps narrow down a message with a broad appeal.</p>
                </div>
                <div className="details-container">
                <i className="fas fa-heart detail-icon"></i>
                <p>People will connect with your product and brand. We have seen dramatic tranformations after our campaigns are done. Leading to increase sales and business.</p>
                </div>
            </div>
            <div className="product-testimonials-container">
                
                <div className="test-card" >
                    <div className="test-person-container">
                        <img className="test1" src={test1} alt="CEO of "/>
                        <h5>Brian Douglas</h5>
                        <h5>CEO at Alamine</h5>
                        </div>
                        <div className="test-text-container">
                        <p>The Markalytics team was amazing! We are a small but growing startup that needed some extra help marketing. Since working with Markalytics we have seen a massive increase in sales and interest in our business </p>
                    </div>
                </div>
                    
                <div className="test-card-reverse">
                    <div className="test-person-container">
                        <img className="test1" src={test2} alt="CEO of "/>
                        <h5>Shardul Thakur</h5>
                        <h5>CTO of Delmo</h5>
                    </div>
                    <div className="test-text-container">
                        <p>Working with Markalytics with was incredibly easy. They did most of the heavylifting allowing us to focus on improving or product. They listened to us when we had concerns and adjusted accordingly. </p>
                    </div>
                </div>
                <div  className="test-card">
                    <div className="test-person-container">
                        <img className="test1" src={test3} alt=""/>
                        <h5>Sharon Smith</h5>
                        <h5>COO of Inkphonics</h5>
                    </div>
                    <div className="test-text-container">
                        <p>We came to Markalytics for their analytics team. They were able to give us more insight into our users preferences, which helped us design better products. We will definately be working with Markalytics again.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen


