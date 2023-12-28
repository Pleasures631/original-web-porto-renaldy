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
                        style={{ borderColor: theme.textExperience }}
                    >
                        {/* <h2 className="experience-sub-text" style={{ color: theme.textCard }}>{experience.office}</h2> */}
                        <img
                            className="logo_img"
                            src={require(`../../${experience.logo_path}`)}
                        // alt={certificate.alt_name}
                        />
                        <h3 className="experience-sub-text" style={{ color: theme.headline }}>{experience.jobTitle}</h3>
                        <h4 className="experience-sub-second-text" style={{ color: theme.headline }}>{experience.date}</h4>
                        {/* <h5 className="experience-sub-second-text" style={{ color: theme.headline }}>Click For More Information.</h5> */}
                        {experience.experience.map((skills, i) => (
                            <div style={{display: "flex", gap: "1rem", padding: "10px",alignItems: "baseline"}}>
                                <img width="20" height="20" src="https://img.icons8.com/color/48/verified-badge.png" alt="verified-badge" />
                                <div className="experience-text-p" key={i} style={{ color: theme.headline }}>{skills}</div>                                
                            </div>

                        ))}

                    </div>
                </div>
            </Fade>
        ))

    );
}

export default ExperienceList;