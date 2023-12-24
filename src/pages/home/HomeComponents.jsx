import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Greeting from "../../containers/greeting/Greeting";

function HomeComponent() {
    return(
        <div>
            <Header />
            <Greeting />
            <Footer />
            {/* <TopButton /> */}
        </div>
        
        
    );
}

export default HomeComponent;