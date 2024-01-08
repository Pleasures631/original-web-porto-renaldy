import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import BackgroundGreeting from '../../../src/wave-haikei.svg';

const Header = ({ theme, resultRef, resultRef2, resultRef3 }) => {

    const handleClick = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <header className="header" style={{position:"relative", zIndex:"1"}}>
                <Fade top duration={1000} distance="20px">
                    <div>
                        <input className="menu-btn" type="checkbox" id="menu-btn" />
                        <label className="menu-icon" htmlFor="menu-btn">
                            <span className="navicon"></span>
                        </label>
                        <ul className="menu">
                            <li>
                                <NavLink
                                    onClick={() => handleClick(resultRef)}
                                    activeStyle={{ fontWeight: "bold" }}
                                    style={{ color: theme.headline }}
                                    className="header-text"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => handleClick(resultRef2)}
                                    activeStyle={{ fontWeight: "bold" }}
                                    style={{ color: theme.headline }}
                                    className="header-text"
                                >
                                    Experience
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => handleClick(resultRef3)}
                                    activeStyle={{ fontWeight: "bold" }}
                                    style={{ color: theme.headline }}
                                    className="header-text"
                                >
                                    Skills
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Fade>
            </header>
        </div>
    );
}

export default Header;