import React from "react";
import { Fade } from "react-reveal";
import { skill } from "../../portofolio";

function SkillList(props) {
    const theme = props.theme;
    
    const groupedSkills = [];
    for (let i = 0; i < skill.data.length; i += 2) {
        groupedSkills.push(skill.data.slice(i, i + 2));
    }

    return (
        <Fade top duration={1000} distance="20px">
            {groupedSkills.map((group, index) => (
                <div className="row" key={index}>
                    {group.map((skill, i) => (
                        <div className="col-md-6 p-3" key={i} style={{ display: "grid" }}>
                            <div style={{ borderColor: theme.jacketColor }} className="skill-card">
                                <h1 style={{ color: theme.headline }} className="skill-sub-text">
                                    {skill.skillTitle}
                                </h1>
                                <div className="row">
                                    {skill.skillLanguage.map((skillLanguages, j) => (
                                        <div
                                            className="col-md-6"
                                            key={j}
                                            style={{
                                                display: "flex",
                                                gap: "0.5rem",
                                                padding: "5px",
                                                alignItems: "baseline",
                                            }}
                                        >
                                            <div>
                                                <img
                                                    width="20"
                                                    height="20"
                                                    src="https://img.icons8.com/color/48/verified-badge.png"
                                                    alt="verified-badge"
                                                />
                                            </div>
                                            <div>
                                                <h2
                                                    className="skill-sub-second-text"
                                                    style={{ color: theme.headline }}
                                                >
                                                    {skillLanguages.skillName}
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </Fade>
    );
}


export default SkillList;
