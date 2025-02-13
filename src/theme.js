/**
 * theme for color template 
 */

import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const theme = isDarkMode
        ? {
            headline: "#EAEAEA",
            body: "#121212",
            text: "#EAEAEA",
            expTxtColor: "#EAEAEA",
            highlight: "#00A8E8",
            dark: "#181818",
            secondaryText: "#86E0F9",
            imageHighlight: "#252525",
            compImgHighlight: "#303030",
            jacketColor: "#222222",
            headerColor: "#252525",
            splashBg: "#121212",
            textCard: "#FFD700",
            footer: "#181818",
            bgBody: "#121212",
            textExperience: "#63E6BE",
            bgExperience: "#1F1F1F",
            greenText: "#20C20E",
        }
        : {
            headline: "#222831",
            body: "#ffffff",
            text: "#333333",
            expTxtColor: "#222831",
            highlight: "#00ADB5",
            dark: "#393E46",
            secondaryText: "#008080",
            imageHighlight: "#EEEEEE",
            compImgHighlight: "#DDDDDD",
            jacketColor: "#CCCCCC",
            headerColor: "#EEEEEE",
            splashBg: "#00ADB5",
            textCard: "#FF8C00",
            footer: "#f1f1f1",
            bgBody: "#ffffff",
            textExperience: "#FFD700",
            bgExperience: "#00ADB5",
            greenText: "#2ECC71",
        };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => useContext(ThemeContext);