import { Box, Paper, Typography, styled } from "@mui/material";
import React from "react";

const Image = styled('img')(() => ({
    width: "100%",
    height: "100%",
    overflow: "hidden",
    objectFit: "cover",
}));

const Card = ({ src, title, description, onClick }) => {

    return (
        <Paper elevation={3} onClick={onClick}
            sx={{
                width: "100%",
                maxWidth: 250,
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
            <Typography noWrap >{title}</Typography>
            <Typography variant="caption" color="gray" fontFamily="serif">{description}</Typography>
        </Paper>
    );
}


export default Card;