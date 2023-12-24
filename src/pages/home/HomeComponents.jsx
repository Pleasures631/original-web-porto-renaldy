import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Greeting from "../../containers/greeting/Greeting";
import Education from "../../containers/education/Education";
import Project from "../../containers/projects/Project";
import Contact from "../../containers/contact/Contact";

function HomeComponent() {
    return(
        <div>
            <Header />
            <Greeting />
            <Education />
            <Project />
            <Contact />
            <Footer />
            {/* <TopButton /> */}
        </div>
        
        
    );
}

export default HomeComponent;