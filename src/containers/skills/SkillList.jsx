import React from "react";
import { Fade } from "react-reveal";
import { skill } from "../../portofolio";

function SkillList({ theme }) {
    const groupedSkills = [];
    for (let i = 0; i < skill.data.length; i += 2) {
        groupedSkills.push(skill.data.slice(i, i + 2));
    }

    return (
        <Fade top duration={1000} distance="20px">
            {groupedSkills.map((group, index) => (
                <div className="row" key={index}>
                    {group.map((skillGroup, i) => (
                        <div className="col-md-6 p-3" key={i}>
                            <div
                                className="skill-card shadow-sm"
                                style={{
                                    borderColor: theme.jacketColor,
                                    background: theme.bgCard,
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                    height: "100%",
                                }}
                            >
                                <h3
                                    style={{
                                        color: theme.headline,
                                        marginBottom: "1rem",
                                        fontWeight: "600",
                                        borderBottom: `1px solid ${theme.headline}`,
                                        paddingBottom: "0.5rem",
                                    }}
                                    className="skill-sub-text"
                                >
                                    {skillGroup.skillTitle}
                                </h3>

                                <div className="row">
                                    {skillGroup.skillLanguage.map((lang, j) => (
                                        <div
                                            className="col-sm-6 mb-3"
                                            key={j}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.6rem",
                                            }}
                                        >
                                            <i
                                                className={lang.iconClass}
                                                style={{ fontSize: "24px"}}
                                            ></i>

                                            <div style={{ lineHeight: "1.2" }}>
                                                <div style={{ fontWeight: "500", color: theme.headline }}>
                                                    {lang.skillName}
                                                </div>
                                                <small style={{ color: "#888" }}>{lang.levelSkill}</small>
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
