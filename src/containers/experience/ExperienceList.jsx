import React from "react";
import { Fade } from "react-reveal";
import { experience } from "../../portofolio";
import "./Experience.css";

function ExperienceList(props) {    
    const theme = props.theme;
    return (
        experience.data.map((experience, i) => (
            <Fade top duration={1000} distance="20px">
                <div className="education-main">
                    <h2 style={{color : theme.text}}>{experience.office}</h2>
                    <h3 style={{color : theme.text}}>{experience.jobTitle}</h3>
                    {experience.experience.map((skills, i) => (
                        <div className="experience-text-p" key={i} style={{color : theme.text}}>{skills}</div>
                    ))}
                </div>
            </Fade>
        ))

    );
}

export default ExperienceList;