import { useRef } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Greeting from "../../containers/greeting/Greeting";
import Education from "../../containers/education/Education";
import Project from "../../containers/projects/Project";
import Contact from "../../containers/contact/Contact";
import Experience from "../../containers/experience/Experience";
import Skills from "../../containers/skills/Skill";
import BackgroundGreeting from '../../blob-scene-haikei.svg';
import ArrowButton from "../../components/arrow/ArrowButton";

function HomeComponent(props) {
    const resultRef = useRef(null);
    const resultRef2 = useRef(null);
    const resultRef3 = useRef(null);
    const resultRef4 = useRef(null);
    // Fungsi yang dipicu oleh komponen pertama    

    return (
        <div>
            <Header resultRef={resultRef} resultRef2={resultRef2} resultRef3={resultRef3} theme={props.theme} />
            <div className="background-image-div">                
                <Greeting theme={props.theme} />
                <ArrowButton theme={props.theme} resultRef4={resultRef4} />
            </div>
            <Experience ref={resultRef2} theme={props.theme} />
            <Skills ref={resultRef3} theme={props.theme} />
            {/* <Education theme={props.theme}/> */}
            {/* <Project theme={props.theme}/> */}
            {/* <Contact theme={props.theme}/> */}
            <Footer ref={resultRef4} theme={props.theme} />
            {/* <TopButton /> */}
        </div>


    );
}

export default HomeComponent;