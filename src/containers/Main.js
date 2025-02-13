import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomeComponent from "../pages/home/HomeComponents";
import { ThemeProvider } from "../theme";

function Main() {
    return (
        <ThemeProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route exact path="/" element={<HomeComponent />} />
                    <Route path="Home" element={<HomeComponent />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default Main;
