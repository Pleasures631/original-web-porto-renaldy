import React from "react";
import { Fade } from "react-reveal";
import { skill } from "../../portofolio";

function SkillList(props) {
    const theme = props.theme;
    return (
        skill.data.map((skill, i) => (
            <Fade top duration={1000} distance="20px">
                <div className="skill-main">
                    <div
                        style={{ borderColor: theme.greenText }}
                        className="skill-card">
                        <h1
                            key={i}
                            style={{ color: theme.headline }}
                            className="skill-sub-text"
                        >{skill.skillTitle}</h1>
                        <div className="row">
                            {skill.skillLanguage.map((skillLanguages, i) => (
                                <div className="col-md-6" style={{ display: "flex", gap: "1rem", padding: "10px", alignItems: "baseline" }}>
                                    <div>
                                        <img width="20" height="20" src="https://img.icons8.com/color/48/verified-badge.png" alt="verified-badge" />
                                    </div>
                                    <div>
                                        <h2 className="skill-sub-second-text" key={i} style={{ color: theme.headline }}>{skillLanguages.skillName}</h2>
                                        {skillLanguages.levelSkill == 'Beginner' &&
                                            <div className="progress" style={{width:"3rem"}}>
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        }
                                        {skillLanguages.levelSkill == 'Intermediate' &&
                                            <div className="progress" style={{width:"3rem"}}>
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        }
                                        {skillLanguages.levelSkill == 'Advanced' &&
                                            <div className="progress" style={{width:"3rem"}}>
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        }
                                        {skillLanguages.levelSkill == 'Expert' &&
                                            <div className="progress" style={{width:"3rem"}}>
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        }
                                        <h4 className="skill-sub-third-text" key={i} style={{ color: theme.headline }}>{skillLanguages.levelSkill}</h4><br />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Fade>
        ))
        // <div></div>
    );
}

export default SkillList;