import { useRef } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Greeting from "../../containers/greeting/Greeting";
import Experience from "../../containers/experience/Experience";
import Skills from "../../containers/skills/Skill";
import ArrowButton from "../../components/arrow/ArrowButton";
import { useTheme } from "../../theme";

function HomeComponent() {
    const { theme } = useTheme();
    const resultRef = useRef(null);
    const resultRef2 = useRef(null);
    const resultRef3 = useRef(null);
    const resultRef4 = useRef(null);

    return (
        <div style={{backgroundColor: theme.bgBody}}>
            <Header resultRef={resultRef} resultRef2={resultRef2} resultRef3={resultRef3} />
            <div className="background-image-div">
                <Greeting theme={theme} />
                <ArrowButton theme={theme} resultRef4={resultRef4} />
            </div>
            <Experience ref={resultRef2} theme={theme} />
            <Skills ref={resultRef3} theme={theme} />
            <Footer ref={resultRef4} theme={theme} />
        </div>
    );
}

export default HomeComponent;
