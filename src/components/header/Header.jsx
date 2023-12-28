import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { HashScroll } from "react-hash-scroll";

function Header(props) {
    const theme = props.theme;

    // method to jump to the desired element by using the element's id
    const jumpToReleventDiv = (e) => {
        const releventDiv = document.getElementById('experience-main-div');
        // behavior: "smooth" parameter for smooth movement
        releventDiv.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div>
            <header className="header">
                <Fade top duration={1000} distance="20px">
                    <ul>
                        <li>
                            <p onClick={() => jumpToReleventDiv('experience-main-div')}>Experience</p>
                        </li>
                        <li>
                            <NavLink
                                to={"/Home"}
                                style={{ color: theme.headline }}
                            >
                                Education
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/Home"}
                                style={{ color: theme.headline }}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/Home"}
                                style={{ color: theme.headline }}
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