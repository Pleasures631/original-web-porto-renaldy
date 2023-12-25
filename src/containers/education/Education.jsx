import React from "react";
import "./Education.css";
import { Fade } from "react-reveal";

function Education(props) {
    const theme = props.theme;
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="education-main">
                <div>
                    <h1
                        style={{ color: theme.text }}
                        className="education-text"
                    >
                        Education
                    </h1>
                    <h2
                        style={{ color: theme.text }}
                        className="education-history"
                    >
                        Tarumanagara University
                    </h2>
                    <p
                        style={{ color: theme.text }}
                        className="education-text-p"
                    >Experienced Web Programmer with a demonstrated history of working in the insurance industry & IT Service/Solution. Skilled in PHP, JavaScript Strong engineering professional graduated from Universitas Tarumanagara.
                    </p>
                    <h2
                        style={{ color: theme.text }}
                        className="education-history"
                    >
                        Tarumanagara University
                    </h2>
                    <p
                        style={{ color: theme.text }}
                        className="education-text-p"
                    >Experienced Web Programmer with a demonstrated history of working in the insurance industry & IT Service/Solution. Skilled in PHP, JavaScript Strong engineering professional graduated from Universitas Tarumanagara.
                    </p>
                    <h2
                        style={{ color: theme.text }}
                        className="education-history"
                    >
                        Tarumanagara University
                    </h2>
                    <p
                        style={{ color: theme.text }}
                        className="education-text-p"
                    >Experienced Web Programmer with a demonstrated history of working in the insurance industry & IT Service/Solution. Skilled in PHP, JavaScript Strong engineering professional graduated from Universitas Tarumanagara.
                    </p>
                    <h2
                        style={{ color: theme.text }}
                        className="education-history"
                    >
                        Tarumanagara University
                    </h2>
                    <p
                        style={{ color: theme.text }}
                        className="education-text-p"
                    >Experienced Web Programmer with a demonstrated history of working in the insurance industry & IT Service/Solution. Skilled in PHP, JavaScript Strong engineering professional graduated from Universitas Tarumanagara.
                    </p>
                </div>
            </div>
        </Fade>
    );
}

export default Education;