import React from "react";
import "./Education.css";
import { Fade } from "react-reveal";

function Education(props) {
    const theme = props.theme;
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="education-main">
            <h1
                            style={{ color: theme.headline }}
                            className="education-text"
                        >
                            Education
                        </h1>
                <div 
                className="education-card"
                style={{borderColor: theme.headline}}
                >
                    <div>
                        
                        <h2
                            style={{ color: theme.textCard }}
                            className="education-sub-text"
                        >
                            Tarumanagara University
                        </h2>
                        <p
                            style={{ color: theme.text }}
                            className="education-text-p"
                        >Bachelor's degree.
                        </p>
                        <p style={{ color: theme.text }} className="education-text-p">2015-2020</p>
                        <p style={{ color: theme.text }} className="education-text-p">Grade: 3.05</p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default Education;