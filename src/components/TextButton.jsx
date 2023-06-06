import { Box, Typography } from "@mui/material";
import React from "react"



const TextButton = ({ title, onClick, color, justifyEnd }) => {



    return (
        <Box sx={{ display: "flex", justifyContent: justifyEnd && "end" }}>
            <Typography
                variant="caption"
                color={color || "primary"}
                onClick={onClick}
                sx={{ cursor: "pointer", ":hover": { transform: "scale(1.1)" } }}
            >
                {title}
            </Typography>
        </Box>
    );
}


export default TextButton;