import { Box, Divider } from "@mui/material";
import React from "react";
import SearchBar from "../components/SearchBar";
import CardsSection from "../components/CardsSection/CardsSection";



const SearchPage = () => {
    

    return (
        <Box sx={{ width: "100%", p: 2 }}>
            <SearchBar />

            <Divider sx={{ my: 5 }} />

            <CardsSection title="Recent searches"/>
        </Box>
    );
}


export default SearchPage;