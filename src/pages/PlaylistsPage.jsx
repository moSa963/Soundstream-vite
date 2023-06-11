import { Box } from "@mui/material";
import React from "react";
import { usePlaylists } from "../contexts/PlaylistsContext";
import PlaylistsList from "../components/Playlist/PlaylistsList";


const PlaylistsPage = ({ albums }) => {
    const { playlists, setPlaylists } = usePlaylists();


    return (
        <Box sx={{ width: "100%" }}>

            <PlaylistsList 
                playlists={playlists?.filter(v => Boolean(v?.album) === Boolean(albums))}
                setPlaylists={setPlaylists}
            />
        </Box>
    );
}

export default PlaylistsPage;