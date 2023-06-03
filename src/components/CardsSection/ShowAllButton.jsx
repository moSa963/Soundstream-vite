import { Box, Typography } from "@mui/material";
import React from "react";


const ShowAllButton = ({ onClick }) => {


    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
            <Typography variant="caption"
                color="primary"
                onClick={onClick}
                sx={{ cursor: "pointer", ":hover": { transform: "scale(1.2)" } }}>Show all</Typography>
        </Box>
    );
}


export default ShowAllButton;