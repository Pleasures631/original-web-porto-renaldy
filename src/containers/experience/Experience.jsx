import { useRef, forwardRef, useImperativeHandle } from "react";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceList from "./ExperienceList";

// function Experience(props) {
const Experience = forwardRef(({ theme }, ref) => {

    return (
        <div style={{ backgroundColor: theme.bgExperience }} ref={ref}>
            <Fade top duration={1000} distance="20px">
                <h1
                    style={{ color: theme.textExperience, paddingTop: "10%" }}
                    className="experience-text"                    
                >
                    Experience
                </h1>
                <hr style={{
                    marginTop: "1rem",
                    marginBottom: "2rem",
                    border: "0",
                    borderTop: `3px solid ${theme.textExperience}`,
                    width: "20%",
                    margin: "0 auto"
                }}>
                </hr>
                <div className="experience-main-div">
                    <ExperienceList theme={theme} />
                </div>
            </Fade>
        </div>
    );
});

export default Experience;