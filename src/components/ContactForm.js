import React from 'react'

const ContactForm = () => {
    return (
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="contact-form">
            <div className="label-div">
            <label htmlFor="name">Name</label>
            </div>
            <input  type="text" name="name" className="Name" required/>
            <div className="label-div">
            <label htmlFor="email">Email</label>
            </div>
            <input type="email" name="email" className="Email" required/>
            <div hidden> <input name="bot-field" type="text"/></div>
            <div className="label-div">
            <label htmlFor="message">Message</label>
            </div>
            <textarea  name="message" className="text-area" required/>
            <button className="submit-btn">Submit</button>
        </form>
    )
}

export default ContactForm
