import React from "react";
import { Fade } from "react-reveal";
import { experience } from "../../portofolio";
import "./Experience.css";

function ExperienceList(props) {
    const theme = props.theme;
    return (
        experience.data.map((experience, i) => (
            <Fade top duration={1000} distance="20px">
                <div className="experience-main">
                    <div
                        className="experience-card"
                        style={{ borderColor: theme.headline }}
                    >
                        {/* <h2 className="experience-sub-text" style={{ color: theme.textCard }}>{experience.office}</h2> */}
                        <img
                            className="logo_img"
                            src={require(`../../${experience.logo_path}`)}
                            // alt={certificate.alt_name}
                        />
                        <h3 className="experience-sub-text" style={{ color: theme.textCard }}>{experience.jobTitle}</h3>
                        {experience.experience.map((skills, i) => (
                            <div className="experience-text-p" key={i} style={{ color: theme.text }}>{skills}</div>
                        ))}
                    </div>
                </div>
            </Fade>
        ))

    );
}

export default ExperienceList;