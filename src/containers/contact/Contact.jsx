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
                <div
                    className="contact-card"
                    style={{
                        background: theme.text
                    }}>
                    <p className="contact-text-p" style={{ color: theme.textCard }}>Email</p>
                    <p className="contact-text-p" style={{ color: theme.textCard }}>renaldycahyaa@gmail.com</p>
                    <p className="contact-text-p" style={{ color: theme.textCard }}>WhatsApp</p>
                    <p className="contact-text-p" style={{ color: theme.textCard }}>+62 82211577756</p>
                </div>
            </div>
        </Fade>
    );
}

export default Contact;