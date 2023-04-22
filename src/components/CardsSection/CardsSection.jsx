import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Card from "./Card";



const CardsSection = ({ title, onShowAll }) => {



    return (
        <Stack spacing={2} sx={{ width: "100%", p: 2 }}>
            <Typography variant="h4" fontFamily="cursive">{title}</Typography>

            <Stack direction="row" >
                <Card src="vite.svg" title="Title" description="description " />
                <Card src="vite.svg" title="Title" description="description " />
                <Card src="vite.svg" title="Title" description="description " />
                <Card src="vite.svg" title="Title" description="description " />
            </Stack>

            {onShowAll &&
                <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
                    <Typography variant="caption"
                        color="primary"
                        onClick={onShowAll}
                        sx={{ cursor: "pointer", ":hover": { transform: "scale(1.2)" } }}>Show all</Typography>
                </Box>
            }
        </Stack>
    );
}


export default CardsSection;