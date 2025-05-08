import { useRef, forwardRef, useImperativeHandle } from "react";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceList from "./ExperienceList";

const Experience = forwardRef(({ theme }, ref) => {
    return (
        <div className="container" ref={ref}>
            <div className="mb-5">
                <Fade top duration={1000} distance="20px">
                    <h1
                        style={{ color: theme.headline, paddingTop: "5%" }}
                        className="experience-text"
                    >
                        Experience
                    </h1>
                    {/* <hr
                        style={{
                            border: 0,
                            borderTop: `1px solid ${theme.headline}`,
                            width: "15%",
                            margin: "1rem auto 2rem auto",
                        }}
                    /> */}
                </Fade>
            </div>

            <div className="experience-main-div">
                <ExperienceList theme={theme} />
            </div>
        </div>
    );
});

export default Experience;
