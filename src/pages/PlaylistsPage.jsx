import { Box } from "@mui/material";
import React from "react";
import CardsSection from "../components/CardsSection/CardsSection";
import PlaylistCard from "../components/CardsSection/PlaylistCard";
import { useLoaderData } from "react-router-dom";


const PlaylistsPage = () => {
    const { data } = useLoaderData();

    return (
        <Box sx={{ width: "100%" }}>
            <CardsSection title="Your Playlists" Card={PlaylistCard} data={data} />
        </Box>
    );
}

export default PlaylistsPage;