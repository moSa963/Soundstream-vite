import { Box } from "@mui/material";
import React from "react";
import CardsSection from "../components/CardsSection/CardsSection";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
    const nav = useNavigate();

    return (
        <Box sx={{ width: "100%" }}>
            
            <CardsSection title="Your Playlists" onAction={() => nav("/playlist")} actionTitle="ShowAll" />
            <CardsSection title="Recently Played"/>
            <CardsSection title="Liked Tracks"/>
            <CardsSection title="Recent searches"/>

        </Box>
    );
}


export default HomePage;