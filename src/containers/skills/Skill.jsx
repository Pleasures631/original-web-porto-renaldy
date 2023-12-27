import React from "react";
import { Fade } from "react-reveal";
import SkillList from "./SkillList";
import "./Skill.css";

function skill(props) {
    const theme = props.theme;
    return(
        <Fade top duration={1000} distance="20px">
            <h1
                style={{color : theme.headline}}
                className="skill-text"
            >
                Skills What i Have
            </h1>
            <div className="skill-main-div">
            <SkillList theme={theme} />
            </div>
        </Fade>
    );
}

export default skill;