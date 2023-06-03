import { Box } from "@mui/material";
import React from "react";
import CardsSection from "../components/CardsSection/CardsSection";
import PlaylistCard from "../components/CardsSection/PlaylistCard";
import { usePlaylists } from "../contexts/PlaylistsContext";


const PlaylistsPage = ({ albums }) => {
    const { playlists } = usePlaylists();

    return (
        <Box sx={{ width: "100%" }}>
            <CardsSection
                title="Your Playlists"
                Card={PlaylistCard}
                data={playlists?.filter(v => v?.album || !albums)}
            />
        </Box>
    );
}

export default PlaylistsPage;