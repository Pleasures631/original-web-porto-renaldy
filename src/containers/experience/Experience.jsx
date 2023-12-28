import React from "react";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceList from "./ExperienceList";

function Experience(props) {
    const theme = props.theme;
    return (
        <div style={{backgroundColor: theme.bgExperience}}>
        <Fade top duration={1000} distance="20px">
            <h1
                style={{color : theme.textExperience, paddingTop:"10%"}}
                className="experience-text"
            >
                Experience
            </h1>
            <div className="experience-main-div">
            <ExperienceList theme={theme} />
            </div>
        </Fade>
        </div>
    );
}

export default Experience;