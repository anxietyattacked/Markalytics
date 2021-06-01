import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import Modal from "./Modal"
import ContactForm from "./ContactForm"

const Hamburger = () => {
    const [menu, setMenu] = useState(false)
    const showMenu = () => setMenu(!menu)

    const modal = useRef(null)
    return (
        <>
        <header id="top" className="navbar">
            <div className="menu-and-logo">
            <Link to="#" className="menu-bars">
            <i className="fas fa-bars" onClick={showMenu}></i>
            </Link>
            <h1>Markalytics</h1>
            </div>
            <div>
                    <button className="hamburger-contact-btn" onClick={() => modal.current.open()}>Contact Us</button>
                    <Modal ref={modal}>
                    <ContactForm/>
                    </Modal>
                </div>
            </header>
            <nav className={menu ? "nav-menu active" : 'nav-menu'}>
                <ul onClick={showMenu} className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <i className="fas fa-times"></i>
                        </Link>
                    </li>
                    <li className="nav-text"><Link to="/">Home</Link></li>
                    <li className="nav-text"><Link to="/about">About</Link></li>
                    <li className="nav-text"><Link to="/product">Product</Link></li>
                    <li className="nav-text"><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Hamburger
