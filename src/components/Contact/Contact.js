import React from 'react'

function Contact() {
    return (
        <div className="contact" id="contact">
            <h1 className="contact_title">Contact</h1>
            <p className="contact_content">
                {`Want to request for my resume or just want to say hi?
                Send me an email at `}
                <a href="mailto: jonkwee@gmail.com">jonkwee@gmail.com</a>.
            </p>
        </div>
    )
}

export default Contact