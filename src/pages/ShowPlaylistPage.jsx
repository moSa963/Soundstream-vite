import { Box } from "@mui/material";
import React from "react";
import TracksTable from "../components/TracksTable/TracksTable";
import PlaylistBanner from "../components/PlaylistBanner";



const ShowPlaylistPage = () => {
    

    return (
        <Box sx={{ width: "100%" }}>
            <PlaylistBanner type="playlist" title="playlist name"/>
            <TracksTable />
        </Box>
    );
}


export default ShowPlaylistPage;