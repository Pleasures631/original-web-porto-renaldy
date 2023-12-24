import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomeComponent from "../pages/home/HomeComponents";

function Main() {

    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeComponent />}></Route>
            <Route             
            path="Home"
            element={<HomeComponent />}></Route>
            </Routes>
        </BrowserRouter>
    );

}

export default Main;