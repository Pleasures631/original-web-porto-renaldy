import { forwardRef } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Footer = forwardRef(({ theme }, ref) => {
  return (
    <div className="footer-div" ref={ref} style={{ backgroundColor: theme.bgBody }}>
      <Fade>
        <div className="footer-container">
          <div className="social-icons">
            <a href="https://www.instagram.com/renaidyy?igsh=MTZidXczenRna2hvbQ%3D%3D&utm_source=qr">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/renaldy-cahya-2455751a1">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=6282211577756">
              <FaWhatsapp className="social-icon" />
            </a>
          </div>
          <p className="footer-text" style={{ color: theme.titleP }}>© 2025 Renaldy Cahya. All Rights Reserved.</p>
        </div>
      </Fade>
    </div>
  );
});

export default Footer;
