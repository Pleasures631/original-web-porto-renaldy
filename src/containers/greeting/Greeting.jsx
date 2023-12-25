import React from "react";
import "./Greeting.css";
import { Fade } from "react-reveal";
import Foto from '../../../src/Monkey-D-Luffy-Gear-5-PNG.png';

function Greeting(props) {
    const theme = props.theme;
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <div>
                            <h1
                                style={{ color: theme.text }}
                                className="greeting-text"
                            >
                                Renaldy Cahya</h1>
                            <p className="greeting-text-p subTitle">Fullstack Web Developer</p>
                            <p>Experienced Web Programmer with a demonstrated history of working in the insurance industry & IT Service/Solution. Skilled in PHP, JavaScript Strong engineering professional graduated from Universitas Tarumanagara.</p>
                        </div>
                    </div>

                    <div className="greeting-image-div">
                        <img src={Foto}/>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default Greeting;