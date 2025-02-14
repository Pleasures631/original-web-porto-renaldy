import { useRef, forwardRef, useImperativeHandle } from "react";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceList from "./ExperienceList";

// function Experience(props) {
const Experience = forwardRef(({ theme }, ref) => {
    return (
        <div className="container" ref={ref}>
            <Fade top duration={1000} distance="20px">
                <div className="mb-5">
                    <h1
                        style={{ color: theme.titleP, paddingTop: "10%" }}
                        className="experience-text"
                    >
                        Experience
                    </h1>
                    <hr
                       style={{
                        // marginTop: "1rem",
                        // marginBottom: "2rem",
                        // border: "0",
                        borderTop: `1px solid ${theme.titleP}`,
                        width: "15%",
                        float:"right"
                        // margin: "0 auto",
                    }}
                    ></hr>
                </div>
                <div className="experience-main-div">
                    <ExperienceList theme={theme} />
                </div>
            </Fade>
        </div>
    );
});

export default Experience;
