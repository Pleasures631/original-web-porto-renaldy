import React, { useState } from "react";
import { Fade } from "react-reveal";
import { experience } from "../../portofolio";
import "./Experience.css";

function ExperienceList(props) {
    const theme = props.theme;

    const groupedExperience = [];
    for (let i = 0; i < experience.data.length; i += 2) {
        groupedExperience.push(experience.data.slice(i, i + 2));
    }

    return (
        <div className="container">
            {groupedExperience.map((group, index) => (
                <div key={index} className="row mb-4">
                    {group.map((exp, i) => (
                        <div key={i} className="col-md-6 d-flex">
                            <Fade top duration={1000} distance="20px">
                                <ExperienceCard exp={exp} theme={theme} />
                            </Fade>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

function ExperienceCard({ exp, theme }) {

    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className="experience-card"
            style={{ borderColor: theme.jacketColor, background: theme.bgCard }}
        >
            {/* <img
                className="logo_img"
                src={require(`../../../public/img/${exp.logo_path}`)}
                alt={exp.jobTitle}
            /> */}
            <h3 className="experience-sub-text" style={{ color: theme.headline }}>
                {exp.jobTitle}
            </h3>
            <h4 className="experience-sub-second-text" style={{ color: theme.headline }}>
                {exp.date}
            </h4>

            <div className="experience-card-content" style={{ maxHeight: expanded ? "none" : "100px" }}>
                {exp.experience.map((skills, i) => (
                    <div key={i} style={{ display: "flex", gap: "1rem", padding: "10px", alignItems: "baseline" }}>
                        <img width="20" height="20" src="https://img.icons8.com/color/48/verified-badge.png" alt="verified-badge" />
                        <div className="experience-text-p" style={{ color: theme.headline }}>{skills}</div>
                    </div>
                ))}
            </div>

            {exp.experience.length > 3 && (
                <span className="read-more" onClick={() => setExpanded(!expanded)}>
                    {expanded ? "Read Less" : "Read More"}
                </span>
            )}
        </div>
    );
}

export default ExperienceList;