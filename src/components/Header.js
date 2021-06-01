import React, {useRef} from 'react'
import {Link} from "react-router-dom"
import ContactForm from './ContactForm'
import Modal from "./Modal"

const Header = () => {
    const modal = useRef(null)
    return (
        <header className="header" id="nav">
            <nav className="header-nav">
            <Link className="header-title" to="/"><h1>Markalytics</h1></Link>
            <div className="link-container">
            <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/blog">Blog</Link></li>
           </ul>
           <button className="contact-btn" onClick={() => modal.current.open()}>Contact Us</button>
           </div>
           <Modal ref={modal}>
            <ContactForm/>
           </Modal>
           </nav>
        </header>
    )
}

export default Header
