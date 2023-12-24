import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

function Footer() {
    return(
<div className="footer-div">
      <Fade>
        <p className="footer-text">
          Made with <span role="img">❤️</span> by Renaldy Cahya
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
    );
}

export default Footer;