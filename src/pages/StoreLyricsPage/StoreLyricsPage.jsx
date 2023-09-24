import { Box } from "@mui/material";
import React from "react";
import { useRouteLoaderData } from "react-router-dom";


const StoreLyricsPage = () => {
    const { data } = useRouteLoaderData("track_root");

    return (
        <Box>

        </Box>
    )
}



export default StoreLyricsPage;