import { Avatar, Box, Paper, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Image = styled(Avatar)(() => ({
    width: "100%",
    height: "100%",
    overflow: "hidden",
    objectFit: "cover",
}));

const Card = ({ src, onClick, children, to }) => {

    return (
        <Link to={to}>
            <Paper elevation={3} onClick={onClick}
                sx={{
                    width: "100%",
                    maxWidth: { xs: 130, sm: 160, md: 180 },
                    minWidth: { xs: 130, sm: 160, md: 180 },
                    height: { xs: 200, sm: 255, md: 255 },
                    p: { xs: .5, md: 1 },
                    overflow: "hidden",
                    cursor: "pointer",
                    m: .5,
                    boxShadow: t => t.shadows[2],
                    ":hover": { boxShadow: t => t.shadows[6], filter: "contrast(90%)" }
                }}>
                <Box sx={{ width: "100%", aspectRatio: '1', my: { xs: .5, md: 1 }, boxShadow: t => t.shadows[1] }}>
                    <Image src={src} variant="square"/>
                </Box>
                {children}
            </Paper>
        </Link>
    );
}


export default Card;