import React from 'react'

const ContactForm = () => {
    return (
        <form className="contact-form">
            <div className="label-div">
            <label>Name</label>
            </div>
            <input type="text" name="name" className="Name" required/>
            <div className="label-div">
            <label>Email</label>
            </div>
            <input type="email" name="email" className="Email" required/>
            <div className="label-div">
            <label>Message</label>
            </div>
            <textarea className="text-area" required/>
            <button className="submit-btn">Submit</button>
        </form>
    )
}

export default ContactForm
