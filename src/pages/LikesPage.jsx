import { Box } from "@mui/material";
import React from "react";
import PlaylistBanner from "../components/PlaylistBanner";
import TracksTable from "../components/TracksTable/TracksTable";


const LikesPage = () => {
    

    return (
        <Box sx={{ width: "100%" }}>
            <PlaylistBanner type="playlist" title="Liked Songs"/>
            <TracksTable />
        </Box>
    );
}


export default LikesPage;