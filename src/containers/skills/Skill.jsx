import { forwardRef } from "react";
import { Fade } from "react-reveal";
import SkillList from "./SkillList";
import "./Skill.css";

const Skill = forwardRef(({ theme }, ref) => {
    // function skill(props) {

    // const theme = props.theme;
    return (
        <div ref={ref}>
            <div className="container">
                <Fade top duration={1000} distance="20px">
                    <h1
                        style={{ color: theme.titleP, paddingTop: "5%" }}
                        className="skill-text"
                    >
                        Skills
                    </h1>
                    <hr
                        style={{
                            // marginTop: "1rem",
                            // marginBottom: "2rem",
                            // border: "0",
                            borderTop: `1px solid ${theme.titleP}`,
                            width: "15%",
                            // margin: "0 auto",
                        }}
                    ></hr>
                    {/* <div className="skill-main-div"> */}
                        <SkillList theme={theme} />
                    {/* </div> */}
                </Fade>
            </div>
        </div>
    );
});

export default Skill;
