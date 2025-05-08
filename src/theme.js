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
            titleP: "#5c4f6a",
            bgExperience: "#1F1F1F",
            headerBackground: "rgba(0, 0, 0, 0.3)",
            bgCard: "linear-gradient(145deg, #1a1a1a, #222)"
    
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
            titleP: "#a890c5",
            bgExperience: "#00ADB5",
            headerBackground:"rgba(255, 255, 255, 0.3)",
            bgCard: "linear-gradient(145deg, #ffffff, #f3f3f3)"
        };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => useContext(ThemeContext);