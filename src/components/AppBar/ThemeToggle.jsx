import { IconButton } from "@mui/material";
import React from "react";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeMode } from "../../contexts/ThemeContext";



const ThemeToggle = () => {
    const { themeMode, setThemeMode } = useThemeMode();

    return (
        <IconButton
            size="small"
            onClick={() => setThemeMode(t => t == "dark" ? "light" : "dark")}
            sx={{ transition: "500ms", ":hover": { transform: "rotate(-90deg)" } }} >
            {themeMode == "dark" ? <LightModeIcon /> : <NightsStayIcon />}
        </IconButton>
    );
}


export default ThemeToggle;