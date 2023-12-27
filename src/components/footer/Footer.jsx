import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

function Footer(props) {
  const theme = props.theme;
  return (
    <div className="footer-div">
      <Fade>
        <div className="row" style={{ backgroundColor: theme.footer }} >
          <h1 style={{ color: theme.text }}>Hasta La Vista, Baby!</h1>
          <div className="col-md-4">
            <p style={{ color: theme.text }}>Renaldy Cahya</p>
            <p style={{ color: theme.text }}>Warm talks :</p>
            <p style={{ color: theme.text }}>socmed</p>
          </div>
          <div className="col-md-4">
            <p style={{ color: theme.text }}>Support Ukraine 🇺🇦</p>
            <p style={{ color: theme.text }}>Support Palestine 🇵🇸</p>
          </div>
          <div className="col-md-4">
            <p style={{ color: theme.text }}>© Renaldy Cahya. All right reserved.</p>
          </div>
        </div>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}

export default Footer;