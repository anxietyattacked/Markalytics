import React, {useRef} from 'react'
import {Link} from "react-router-dom"
import Modal from './Modal'
import ContactForm from "./ContactForm"


const Footer = () => {
    const modal = useRef(null)
    return (
        <footer className="footer-container">
            <div className="logo-brands-container">
                <h1 className="header-title">Markalytics</h1>
                <div className="brands">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
            <div className="footer-contact-div">
            <button className="footer-contact-btn" onClick={() => modal.current.open()}>Contact Us</button>
            <Modal ref={modal}>
            <ContactForm/>
           </Modal>
            </div>
            <div className="backtotop-container">
                    <a href={"#top" || "#nav"} >Back to Top</a>
                </div>
        </footer>
    )
}

export default Footer