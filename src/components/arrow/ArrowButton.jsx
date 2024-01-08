import React from "react";
import { FaArrowDownLong, FaWhatsapp } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";

const ArrowButton = ({ theme, resultRef4 }) => {
    const handleClick = (ref) => {                        
        ref.current.scrollIntoView({ behavior: 'smooth' });
        
    };
    return (
        <div style={{position:"absolute", bottom:"0", textAlign:"end", right:"5%"}}>
            <NavLink
                onClick={() => handleClick(resultRef4)}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.headline}}
                className="header-text"
            >
                <FaArrowDownLong className="arrow-bounce-icon" size={50} />
            </NavLink>
        </div>
    );
};

export default ArrowButton;