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
                        style={{ color: theme.headline, paddingTop: "5%" }}
                        className="skill-text"
                    >
                        Skills
                    </h1>
                    {/* <hr
                        style={{
                            border: 0,
                            borderTop: `1px solid ${theme.headline}`,
                            width: "15%",
                            margin: "1rem auto 2rem auto",
                        }}
                    /> */}
                    {/* <div className="skill-main-div"> */}
                        <SkillList theme={theme} />
                    {/* </div> */}
                </Fade>
            </div>
        </div>
    );
});

export default Skill;
