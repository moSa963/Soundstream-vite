import { Box } from "@mui/material";
import React from "react";
import { usePlaylists } from "../contexts/PlaylistsContext";
import PlaylistsList from "../components/Playlist/PlaylistsList";
import CreateAlbumCard from "../components/Dialogs/CreateAlbumCard";


const AlbumsPage = () => {
    const { playlists, setPlaylists } = usePlaylists();


    return (
        <Box sx={{ width: "100%" }}>
            <CreateAlbumCard onAlbumAdded={(v) => setPlaylists(ps => [...ps, v])}/> 

            <PlaylistsList 
                playlists={playlists?.filter(v => v?.album)}
                setPlaylists={setPlaylists}
            />
        </Box>
    );
}

export default AlbumsPage;