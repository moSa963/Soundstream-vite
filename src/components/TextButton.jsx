import { Box, Typography } from "@mui/material";
import React from "react"



const TextButton = ({ title, onClick, color, justifyEnd, noWrap }) => {

    const handleClick = (e) => {
        e.stopPropagation();
        onClick && onClick();
    }

    return (
        <Box sx={{ display: "flex", justifyContent: justifyEnd && "end" }}>
            <Typography noWrap={noWrap}
                color={color || "primary"}
                onClick={handleClick}
                sx={{ cursor: "pointer", color: t => t.palette.text.secondary, ":hover": { color: t => t.palette.text.primary } }}
            >
                {title}
            </Typography>
        </Box>
    );
}


export default TextButton;