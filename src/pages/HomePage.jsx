import { Box } from "@mui/material";
import React from "react";
import CardsSection from "../components/CardsSection/CardsSection";
import { useNavigate } from "react-router-dom";
import { usePlaylists } from "../contexts/PlaylistsContext";
import PlaylistCard from "../components/CardsSection/PlaylistCard";



const HomePage = () => {
    const nav = useNavigate();
    const { playlists } = usePlaylists();

    return (
        <Box sx={{ width: "100%" }}>

            <CardsSection
                title="Your Playlists"
                onAction={() => nav("/library/playlists")}
                actionTitle="ShowAll"
                Card={PlaylistCard}
                data={playlists.filter((v, i) => !v.album).filter((_, i) => i < 4)}
            />

            <CardsSection
                title="Albums"
                onAction={() => nav("/library/albums")}
                actionTitle="ShowAll"
                Card={PlaylistCard}
                data={playlists.filter(v => v.album).filter((_, i) => i < 4)}
            />

        </Box>
    );
}


export default HomePage;