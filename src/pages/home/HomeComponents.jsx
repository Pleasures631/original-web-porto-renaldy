import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Greeting from "../../containers/greeting/Greeting";
import Education from "../../containers/education/Education";
import Project from "../../containers/projects/Project";
import Contact from "../../containers/contact/Contact";

function HomeComponent(props) {     
    return(
        <div>
            <Header theme={props.theme}/>
            <Greeting theme={props.theme}/>
            <Education theme={props.theme}/>
            <Project theme={props.theme}/>
            <Contact theme={props.theme}/>
            <Footer theme={props.theme}/>
            {/* <TopButton /> */}
        </div>
        
        
    );
}

export default HomeComponent;