import React from "react";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceList from "./ExperienceList";

function Experience(props) {
    const theme = props.theme;
    return (
        <Fade top duration={1000} distance="20px">
            <h1
                style={{color : theme.headline}}
                className="experience-text"
            >
                Experience
            </h1>
            <div className="experience-main-div">
            <ExperienceList theme={theme} />
            </div>
        </Fade>
    );
}

export default Experience;