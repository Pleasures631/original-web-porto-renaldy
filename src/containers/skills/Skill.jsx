import { forwardRef } from "react";
import { Fade } from "react-reveal";
import SkillList from "./SkillList";
import "./Skill.css";

const Skill = forwardRef(({ theme }, ref) => {
// function skill(props) {

    // const theme = props.theme;
    return(
        <div style={{backgroundColor: theme.bgBody}} ref={ref}>
        <Fade top duration={1000} distance="20px">
            <h1
                style={{color : theme.greenText, paddingTop:"5%"}}
                className="skill-text"
            >
                Skills
            </h1>
            <hr style={{
                    marginTop: "1rem",
                    marginBottom: "2rem",
                    border: "0",
                    borderTop: `3px solid ${theme.greenText}`,
                    width: "12%",
                    margin: "0 auto"
                }}>
                </hr>
            <div className="skill-main-div">
            <SkillList theme={theme} />
            </div>
        </Fade>
        </div>
    );
});

export default Skill;