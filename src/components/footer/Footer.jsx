import { forwardRef } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

// function Footer(props) {
  const Footer = forwardRef(({ theme }, ref) => {
  // const theme = props.theme;
  let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
  let iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    <div className="footer-div" ref={ref}>
      <Fade>
        <div className="row" style={{ backgroundColor: theme.bgBody }} >
          <div>
            {/* <h3 style={{ color: theme.titleP, textAlign: "center", marginTop:"2%", fontFamily:"berthold-bold"}}>you Suffer but why ?</h3> */}
            {/* <div id="socmed" style={{ display:"flex", justifyContent: "center", gap:"0.5rem", padding:"1rem" }}>
              <a href="https://www.instagram.com/renaidyy?igsh=MTZidXczenRna2hvbQ%3D%3D&utm_source=qr"><FaInstagram style={{ color: theme.titleP, fontSize:'30px' }} /></a>
              <a href="https://www.linkedin.com/in/renaldy-cahya-2455751a1"><FaLinkedin style={{ color: theme.titleP, fontSize:'30px' }} /></a>
              <a href="https://api.whatsapp.com/send?phone=6282211577756"><FaWhatsapp style={{ color: theme.titleP, fontSize:'30px' }} /></a>
            </div> */}
          </div>
          {/* <div className="col-md-4">
            <p style={{ color: theme.titleP }}>Support Ukraine 🇺🇦</p>
            <p style={{ color: theme.titleP }}>Support Palestine 🇵🇸</p>
          </div> */}
          <div >

          </div>
          {/* <p style={{
            color: theme.titleP,
            textAlign: "center",
            marginBottom:"2%"
          }}>© Renaldy Cahya. All right reserved.</p> */}
        </div>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
});

export default Footer;