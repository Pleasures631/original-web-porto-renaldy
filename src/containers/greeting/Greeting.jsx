import { forwardRef, useRef, useImperativeHandle } from "react";
import "./Greeting.css";
import { Bounce, Fade } from "react-reveal";
import BackgroundGreeting from '../../../src/wave-haikei.svg';
import { IoRocketSharp } from "react-icons/io5";
import { FaArrowDownLong, FaWhatsapp } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";

// const Greeting = forwardRef(({theme}, ref) => {
function Greeting({ theme }) {
    return (
        <Fade bottom duration={2000} distance="10px">
            <div style={{position:"relative", width:"100%", height:"100%"}}>
                <div style={{position:"absolute", top:"50%", left:"50%", transform: "translate(-50%, -50%)"}}>
                    {/* <div className="greet-main"> */}
                    <div className="greeting-image-div" style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                        <div className="rounded-circle greeting-card-image">
                        </div>
                    </div>
                    <div>
                        <h1
                            style={{ color: theme.headline }}
                            className="greeting-text"
                        >
                            Renaldy Cahya</h1>
                        <h2 style={{ color: theme.textExperience }} className="greeting-nickname">Fullstack Web Developer</h2>
                        {/* <p style={{ color: theme.headline }} className="greeting-text-p">Experienced Web Programmer with a demonstrated history of working in the insurance industry & IT Service/Solution. Skilled in PHP, JavaScript Strong engineering professional graduated from Universitas Tarumanagara.</p> */}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                        <a href="https://api.whatsapp.com/send?phone=6282211577756" style={{ backgroundColor: theme.textExperience, color: theme.headline, borderColor: theme.headline, border: "2px solid" }} className="btn button-see-experience">
                            <FaWhatsapp size={25} /> Contact Me
                        </a>
                    </div>
                    {/* <div style={{float:"right"}}>
                        
                    </div> */}
                </div>
            </div>
            {/* </div> */}
        </Fade>
    );
};


export default Greeting;