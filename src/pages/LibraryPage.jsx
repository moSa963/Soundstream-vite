import { Box } from "@mui/material";
import React from "react";
import CreateAlbumCard from "../components/Dialogs/CreateAlbumCard";


const LibraryPage = () => {


    return (
        <Box sx={{ width: "100%", pt: 3 }}>
            <CreateAlbumCard onAlbumAdded={(v) => setAlbums(as => [...as, v])}/>
        </Box>
    );
}

export default LibraryPage;