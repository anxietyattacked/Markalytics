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
                    <h2>We <span className="product-text-analytics">analyze</span> and <span className="product-text-marketing">strategize</span> to help achieve your goals</h2>
                    <div className="product-btn-container">
                    <button className="product-contact-btn" onClick={() => modal.current.open()}>Contact Us</button>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio dolores perspiciatis, repellendus asperiores qui sed enim, officiis, veniam deleniti cumque saepe neque dolorem nostrum at accusamus voluptates tempora est?</p>
                </div>
                <div className="details-container center-details">
                <i className="fas fa-users detail-icon"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto ex, perferendis veritatis nulla blanditiis consectetur porro sapiente qui maiores ducimus optio nesciunt soluta officia sint ipsa cum! Porro, tempore!</p>
                </div>
                <div className="details-container">
                <i className="fas fa-heart detail-icon"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quia tenetur debitis saepe, quos aperiam nulla doloribus magnam reiciendis iste voluptatibus possimus eligendi, fugiat a repellendus esse nisi vel soluta.</p>
                </div>
            </div>
            <div className="product-testimonials-container">
                
                <div className="test-card" >
                    <div className="test-person-container">
                        <img className="test1" src={test1} alt="CEO of "/>
                        <h5>Brian Douglas</h5>
                        <h5>CEO at </h5>
                        </div>
                        <div className="test-text-container">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse eos adipisci doloremque, asperiores vel perferendis magnam nam facilis molestiae distinctio odit, illo obcaecati aut reiciendis excepturi nihil iste quibusdam! Molestias?</p>
                    </div>
                </div>
                    
                <div className="test-card-reverse">
                    <div className="test-person-container">
                        <img className="test1" src={test2} alt="CEO of "/>
                        <h5>Shardul Thakur</h5>
                        <h5>CTO of Delmo</h5>
                    </div>
                    <div className="test-text-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, facere maiores voluptatum, atque distinctio obcaecati quo error reiciendis, soluta provident eaque blanditiis vel assumenda cupiditate! Suscipit iusto harum optio ipsa?</p>
                    </div>
                </div>
                <div  className="test-card">
                    <div className="test-person-container">
                        <img className="test1" src={test3} alt=""/>
                        <h5>Sharon Smith</h5>
                        <h5>COO of Inkphonics</h5>
                    </div>
                    <div className="test-text-container">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi magni, architecto quos laudantium error consequatur impedit dolorem repellendus consectetur deserunt est dolore dolores facere reprehenderit sed? Unde, dolor corrupti!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen


