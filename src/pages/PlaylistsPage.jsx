import { Box } from "@mui/material";
import React from "react";
import CardsSection from "../components/CardsSection/CardsSection";
import PlaylistCard from "../components/CardsSection/PlaylistCard";
import { useLoaderData } from "react-router-dom";
import { usePlaylists } from "../contexts/PlaylistsContext";


const PlaylistsPage = () => {
    const { playlists, setPlaylists } = usePlaylists();

    return (
        <Box sx={{ width: "100%" }}>
            <CardsSection title="Your Playlists" Card={PlaylistCard} data={playlists} />
        </Box>
    );
}

export default PlaylistsPage;