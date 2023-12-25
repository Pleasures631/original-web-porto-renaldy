import React from "react";
import { Fade } from "react-reveal";
import "./Contact.css";

function Contact(props) {
    const theme = props.theme;
    return (
        <Fade>
            <h1
                className="contact-text"
                style={{ color: theme.headline }}
            >Contact</h1>
            <div className="contact-main">
                <div className="contact-card">
                    <p className="contact-text-p" style={{color :theme.text}}>Email</p>
                    <p className="contact-text-p" style={{color :theme.text}}>renaldycahyaa@gmail.com</p>
                </div>
                <div className="contact-card">
                    <p className="contact-text-p" style={{color :theme.text}}>WhatsApp</p>
                    <p className="contact-text-p" style={{color :theme.text}}>+62 82211577756</p>
                </div>
            </div>
        </Fade>
    );
}

export default Contact;