import React, {useState, useEffect} from 'react'


const ContactForm = () => {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if ( window.location.search.includes('success=true') ) {
          setSuccess(true);
        }
      }, []);
    
 

    return (
        <div className="contact-container">
            {success && (
                <div className="success">
                <i style={{color:"green", textAlign:"center", fontSize:"3rem"}} className="fas fa-check-circle"></i>
                <h2 style={{fontSize:"1.5rem", textAlign:"center"}}>Your Message Has Been Sent. Thank You!</h2>
                </div>
            )}
        <form name="contact" method="POST" netlify netlify-honeypot="bot-field"  className="contact-form">
            <input type="hidden" name="form-name" value="contact"></input>
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
        </div>
    )
}

export default ContactForm
