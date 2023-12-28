import React from "react";
import { Fade } from "react-reveal";
import SkillList from "./SkillList";
import "./Skill.css";

function skill(props) {
    const theme = props.theme;
    return(
        <div style={{backgroundColor: theme.bgBody}}>
        <Fade top duration={1000} distance="20px">
            <h1
                style={{color : theme.greenText, paddingTop:"10%"}}
                className="skill-text"
            >
                Skills
            </h1>
            <div className="skill-main-div">
            <SkillList theme={theme} />
            </div>
        </Fade>
        </div>
    );
}

export default skill;