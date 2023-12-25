import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
    const theme = props.theme;
    return (
        <div>
            <header className="header">
                <Fade top duration={1000} distance="20px">
                    <ul>
                        <li>
                            <NavLink
                                to={"/Home"}
                                style={{ color: theme.headline }}
                            >
                                Home
                            </NavLink>
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