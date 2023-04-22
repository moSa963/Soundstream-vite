import { Box } from "@mui/material";
import React from "react";
import CardsSection from "../components/CardsSection/CardsSection";



const HomePage = () => {


    return (
        <Box sx={{ width: "100%" }}>
            
            <CardsSection title="Your Playlists" onShowAll={() => console.log("all")}/>
            <CardsSection title="Recently Played"/>
            <CardsSection title="Liked Tracks"/>
            <CardsSection title="Recent searches"/>

        </Box>
    );
}


export default HomePage;