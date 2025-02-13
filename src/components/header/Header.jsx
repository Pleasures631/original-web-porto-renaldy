import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../theme";

const Header = ({ resultRef, resultRef2, resultRef3 }) => {

    const { theme, isDarkMode, toggleTheme } = useTheme();

    const handleClick = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="container" style={{ position: "fixed", top: "0", right: "0", left: "0", zIndex: "1000" }}>
            <header className="header" style={{ position: "relative", zIndex: "1" }}>
                <Fade top duration={1000} distance="20px">
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <nav>
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
                    </nav>
                    <div className="header-action">
                        <NavLink
                            onClick={() => toggleTheme()}
                            style={{ color: theme.headline }}
                        >
                            {isDarkMode ? <MdOutlineLightMode style={{ fontSize: "1.5rem", cursor: "pointer" }} />
                                : <MdOutlineDarkMode style={{ fontSize: "1.5rem", cursor: "pointer" }} />}
                        </NavLink>
                    </div>

                </Fade>
            </header>
        </div>
    );
}

export default Header;