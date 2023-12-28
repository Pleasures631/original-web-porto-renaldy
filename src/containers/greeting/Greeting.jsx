import React from "react";
import "./Greeting.css";
import { Fade } from "react-reveal";
import Foto from '../../../src/selca1.jpg';

function Greeting(props) {
    const theme = props.theme;
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <div>
                            <h1
                                style={{ color: theme.headline }}
                                className="greeting-text"
                            >
                                Renaldy Cahya</h1>
                            <h2 style={{ color: theme.textExperience }} className="greeting-nickname">Fullstack Web Developer</h2>
                            <p style={{ color: theme.headline }} className="greeting-text-p subTitle">Experienced Web Programmer with a demonstrated history of working in the insurance industry & IT Service/Solution. Skilled in PHP, JavaScript Strong engineering professional graduated from Universitas Tarumanagara.</p>
                        </div>
                    </div>

                    <div className="greeting-image-div">
                        <div className="rounded-circle greeting-card-image">
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default Greeting;