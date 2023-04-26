import { Box, Paper, Typography, styled } from "@mui/material";
import React from "react";

const Image = styled('img')(() => ({
    width: "100%",
    height: "100%",
    overflow: "hidden",
    objectFit: "cover",
}));

const Card = ({ src, onClick, children }) => {

    return (
        <Paper elevation={3} onClick={onClick}
            sx={{
                width: "100%",
                maxWidth: 230,
                minWidth: 150,
                p: 1, 
                overflow: "hidden",
                cursor: "pointer",
                m: .5,
                boxShadow: t => t.shadows[2],
                ":hover": { boxShadow: t => t.shadows[6], filter: "contrast(90%)" }
            }}>
            <Box sx={{ width: "100%", aspectRatio: '1', my: 1, boxShadow: t => t.shadows[1] }}>
                <Image src={src} />
            </Box>
            {children}
        </Paper>
    );
}


export default Card;