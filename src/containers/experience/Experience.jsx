import React from "react";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceList from "./ExperienceList";

function Experience(props) {
    const theme = props.theme;
    return (
        <Fade top duration={1000} distance="20px">
            <h1
                style={{color : theme.text}}
                className="experience-text"
            >
                Experience
            </h1>
            <ExperienceList theme={theme} />
        </Fade>
    );
}

export default Experience;