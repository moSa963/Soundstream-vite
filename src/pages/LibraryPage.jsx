import { Box } from "@mui/material";
import React from "react";
import CardsSection from "../components/CardsSection/CardsSection";
import CreateAlbumCard from "../components/CreateAlbumCard";


const LibraryPage = () => {
    

    return (
        <Box sx={{ width: "100%", pt: 3 }}>
            <CreateAlbumCard />
            <CardsSection title="Your albums"/>
        </Box>
    );
}


export default LibraryPage;