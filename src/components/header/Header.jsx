import React, { useEffect, useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../theme";
import mainLogoBlack from "../../main_logo_black.png";
import mainLogoWhite from "../../main_logo_white.png";

const Header = ({ resultRef, resultRef2, resultRef3 }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, isDarkMode, toggleTheme } = useTheme();

    const handleClick = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="header-container">
            <header className={`header ${isScrolled ? "blur-header" : "bg-transparent"}`} style={{ background: theme.headerBackground }}>
                <Fade top duration={1000} distance="20px">
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <div className="container" style={{display:"flex", justifyContent:"space-between"}}>
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
                            <li>
                                <NavLink
                                    // onClick={() => handleClick(resultRef)}
                                    activeStyle={{ fontWeight: "bold" }}
                                    style={{ color: theme.headline }}
                                    className="header-text"
                                >
                                    Technologies
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-action">
                        <NavLink
                            onClick={() => toggleTheme()}
                            style={{ color: theme.headline }}
                        >
                            {isDarkMode ? (
                                <MdOutlineLightMode
                                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                                />
                            ) : (
                                <MdOutlineDarkMode
                                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                                />
                            )}
                        </NavLink>
                    </div>
                    </div>
                </Fade>
            </header>
        </div>
    );
};

export default Header;
