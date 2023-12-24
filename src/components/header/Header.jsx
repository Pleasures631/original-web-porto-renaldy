import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";

function Header() {
    return(
        <div>
            <header className="header">
            <Fade top duration={1000} distance="20px">
            <ul className="menu">
                <li>
                    <NavLink
                    to={"/Home"}
                    >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to={"/Home"}
                    >
                    Education
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to={"/Home"}
                    >
                    Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to={"/Home"}
                    >
                    Contact Me
                    </NavLink>
                </li>
            </ul>
            </Fade>      
            </header>      
        </div>
    );
}

export default Header;