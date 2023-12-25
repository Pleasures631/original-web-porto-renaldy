import React from "react";
import { Fade } from "react-reveal";
import { experience } from "../../portofolio";
import "./Experience.css";

function ExperienceList(props) {
    const theme = props.theme;
    return (
        experience.data.map((experience, i) => (
            <Fade top duration={1000} distance="20px">
                <div style={{ display: "flex", flexDirection:"row"}}>
                    <div className="experience-card">
                        <div className="experience-main">
                            <h2 className="experience-sub-text" style={{ color: theme.headline }}>{experience.office}</h2>
                            <h3 className="experience-text-p" style={{ color: theme.headline }}>{experience.jobTitle}</h3>
                            {experience.experience.map((skills, i) => (
                                <div className="experience-text-p" key={i} style={{ color: theme.text }}>{skills}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </Fade>
        ))

    );
}

export default ExperienceList;