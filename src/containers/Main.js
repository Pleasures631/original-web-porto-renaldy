import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomeComponent from "../pages/home/HomeComponents";
import { chosenTheme } from "../theme";

function Main() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route exact path="/" element={<HomeComponent theme={chosenTheme} />}></Route>
            <Route             
            path="Home"
            element={<HomeComponent theme={chosenTheme} />}></Route>
            </Routes>
        </BrowserRouter>
    );

}

export default Main;